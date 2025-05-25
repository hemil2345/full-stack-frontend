import React, { useEffect, useState } from 'react';
import api from '../axios';

const Status = () => {
  const [bookings, setBookings] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get('/booking/');
        setBookings(res.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  const cancelBooking = async (id) => {
    try {
      await api.delete(`/booking/${id}/`);
      setBookings(bookings.filter((b) => b.id !== id));
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); 
    } catch (error) {
      console.error('Error cancelling booking:', error);
      alert('Failed to cancel booking.');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <h1 style={heroTextStyle}>Manage Your Bookings</h1>
      </div>

      <div style={{ padding: '20px' }}>
        <h2>Your Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((b) => (
            <div key={b.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <p>
                <strong>{b.sport}</strong> | {b.date} | {b.start_time} | {b.duration}h | ₹{b.price}
              </p>
              <button
                onClick={() => cancelBooking(b.id)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#e53935',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
              >
                Cancel
              </button>
            </div>
          ))
        )}

        {/* Pop-up message */}
        {showPopup && (
          <div style={popupStyle}>
            <p style={{ margin: 0, fontWeight: '500' }}>
              Refund is initiated in 1–2 working days.
            </p>
          </div>
        )}

        {/* Note */}
        <p style={{ marginTop: '30px', color: '#888', fontSize: '14px' }}>
          <em>Note: Booking cannot be cancelled after 24 hours.</em>
        </p>
      </div>
    </div>
  );
};

// Hero Section styling
const heroStyle = {
  backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1679917489673-b952cee5857a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
};

const heroTextStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
};

// Popup styling
const popupStyle = {
  position: 'fixed',
  top: '20%',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#fff',
  padding: '20px 30px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  zIndex: 1000,
  animation: 'fadeIn 0.3s ease-in-out',
};

export default Status;
