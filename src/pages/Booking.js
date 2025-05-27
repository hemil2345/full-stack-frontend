import React, { useState, useEffect, useRef } from 'react';
import api from '../axios';
import { PayPalButtons } from '@paypal/react-paypal-js';

const Booking = () => {
  const [form, setForm] = useState({
    sport: 'cricket',
    date: '',
    start_time: '',
    duration: 0.30,
  });

  const [personalDetails, setPersonalDetails] = useState({
    full_name: '',
    email: '',
    phone: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [existingBookings, setExistingBookings] = useState([]);
  const [price, setPrice] = useState(0);
  const [showPayPalButtons, setShowPayPalButtons] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get('booking/');
        setExistingBookings(res.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  useEffect(() => {
    setPrice(form.duration * 100);
  }, [form.duration]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'duration' ? Number(value) : value,
    }));
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkDoubleBooking = () => {
    if (!form.date || !form.start_time) return false;

    const selectedStart = new Date(`${form.date}T${form.start_time}`);
    const selectedEnd = new Date(selectedStart.getTime() + form.duration * 60 * 60 * 1000);

    return existingBookings.some(b => {
      const bStart = new Date(`${b.date}T${b.start_time}`);
      const bEnd = new Date(bStart.getTime() + b.duration * 60 * 60 * 1000);

      return (
        form.date === b.date &&
        form.sport === b.sport &&
        selectedStart < bEnd &&
        selectedEnd > bStart
      );
    });
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (checkDoubleBooking()) {
      alert('This slot is already booked. Please choose a different time.');
      return;
    }
    setShowModal(true);
    setShowPayPalButtons(false);
  };

  const onPaymentSuccess = async (details, data) => {
    try {
      const bookingPayload = {
        ...form,
        price,
        ...personalDetails,
      };

      await api.post('booking/', bookingPayload);

      alert('Booking successful!');
      setShowModal(false);
      setShowPayPalButtons(false);
      setForm({
        sport: 'cricket',
        date: '',
        start_time: '',
        duration: 1,
      });
      setPersonalDetails({
        full_name: '',
        email: '',
        phone: '',
      });

      const updatedBookings = await api.get('booking/');
      setExistingBookings(updatedBookings.data);
    } catch (error) {
      console.error('Booking creation failed:', error.response?.data || error.message);
      alert('Booking failed.');
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1712600582575-0cfb91ee2198?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 20px',
          color: 'white',
          textAlign: 'center',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h1 style={{ fontSize: '3.2rem', fontWeight: '900', marginBottom: '18px' }}>
          Book Your Sport Slot Now!
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 24px auto' }}>
          Reserve your preferred time for cricket or bowling quickly and easily.
        </p>
        <button
          onClick={scrollToForm}
          style={{
            backgroundColor: '#2d9cdb',
            border: 'none',
            color: 'white',
            fontSize: '1.1rem',
            padding: '14px 26px',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgb(45 156 219 / 0.5)',
            fontWeight: '700',
            letterSpacing: '0.05em',
            transition: 'background-color 0.3s ease',
          }}
        >
          Book Now
        </button>
      </section>

      {/* BOOKING FORM */}
      <section ref={formRef} style={{ maxWidth: '450px', margin: '45px auto 80px auto', fontFamily: "'Poppins', sans-serif" }}>
        <form onSubmit={handleBookNow} style={{ textAlign: 'left' }}>
          <label>Sport:
            <select name="sport" value={form.sport} onChange={handleChange} required style={formInputStyle}>
              <option value="cricket">Cricket</option>
              <option value="bowling">Bowling</option>
            </select>
          </label>

          <label>Date:
            <input type="date" name="date" value={form.date} onChange={handleChange} required style={formInputStyle} />
          </label>

          <label>Start Time:
            <input type="time" name="start_time" value={form.start_time} onChange={handleChange} required style={formInputStyle} />
          </label>

          <label>Duration (hours):
            <input type="number" name="duration" value={form.duration} onChange={handleChange} min="1" max="5" required style={formInputStyle} />
          </label>

          <p style={{ fontWeight: '700', fontSize: '1.3rem', color: '#2d9cdb', marginTop: '22px', textAlign: 'center' }}>
            Total Price: ${price}
          </p>

          <button type="submit" style={bookNowBtnStyle}>Book Now</button>
        </form>
      </section>

      {/* MODAL */}
      {showModal && (
        <div style={modalStyles.backdrop}>
          <div style={modalStyles.content}>
            <h2>Enter Personal Details</h2>

            <input type="text" name="full_name" placeholder="Full Name" value={personalDetails.full_name} onChange={handlePersonalChange} required style={modalStyles.input} />
            <input type="email" name="email" placeholder="Email" value={personalDetails.email} onChange={handlePersonalChange} required style={modalStyles.input} />
            <input type="tel" name="phone" placeholder="Phone Number" value={personalDetails.phone} onChange={handlePersonalChange} required style={modalStyles.input} />

            {!showPayPalButtons && (
              <button onClick={() => setShowPayPalButtons(true)} style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}>
                Pay Now
              </button>
            )}

            {showPayPalButtons && (
              <PayPalButtons
                style={{ layout: 'vertical' }}
                createOrder={(data, actions) => actions.order.create({
                  purchase_units: [{
                    amount: { value: price.toFixed(2) },
                  }],
                })}
                onApprove={async (data, actions) => {
                  const details = await actions.order.capture();
                  onPaymentSuccess(details, data);
                }}
                onError={(err) => {
                  console.error('PayPal Checkout Error:', err);
                  alert('Payment failed. Please try again.');
                }}
                onCancel={() => setShowPayPalButtons(false)}
              />
            )}

            <button onClick={() => { setShowModal(false); setShowPayPalButtons(false); }} style={{ marginTop: '15px', padding: '8px 16px', cursor: 'pointer' }}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const formInputStyle = {
  display: 'block',
  width: '100%',
  padding: '13px 16px',
  fontSize: '1rem',
  borderRadius: '10px',
  border: '1.8px solid #ced4da',
  marginTop: '8px',
  marginBottom: '18px',
  boxSizing: 'border-box',
};

const bookNowBtnStyle = {
  marginTop: '28px',
  width: '100%',
  backgroundColor: '#2d9cdb',
  border: 'none',
  color: 'white',
  padding: '14px 0',
  fontWeight: '700',
  fontSize: '1.2rem',
  borderRadius: '14px',
  cursor: 'pointer',
  boxShadow: '0 10px 25px rgb(45 156 219 / 0.4)',
};

const modalStyles = {
  backdrop: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  content: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '8px',
    border: '1.8px solid #ced4da',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
};

export default Booking;
