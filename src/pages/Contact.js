import React, { useState } from 'react';
import api from '../axios';

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.heroOverlay}>
        <h1 style={styles.heroTitle}>Get in Touch with Us</h1>
        <p style={styles.heroSubtitle}>We are here to help you book your cricket or bowling sessions easily!</p>
      </div>
    </section>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/contact/', form);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <>
      <HeroSection />

      <div style={styles.container}>
        <h2 style={styles.header}>Contact Us</h2>
        <div style={styles.flexWrapper}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={form.name}
              style={styles.input}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={form.email}
              style={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              value={form.message}
              style={styles.textarea}
              required
            />
            <button type="submit" style={styles.button}>Send Message</button>
            {submitted && <p style={styles.successMsg}>Message sent successfully!</p>}
          </form>

          <div style={styles.mapContainer}>
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6665921542717!2d144.74691287661216!3d-37.77441517198543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68adc54d8fb2d%3A0x763de08ea773f78f!2s2%2F56%20Barretta%20Rd%2C%20Ravenhall%20VIC%203023%2C%20Australia!5e0!3m2!1sen!2sin!4v1748160475758!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    height: '350px',
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661893590210-bd4b72568d7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'fadeInHero 1s ease-in-out',
    marginBottom: '40px',
  },
  heroOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '30px 40px',
    borderRadius: '12px',
    textAlign: 'center',
    color: '#fff',
  },
  heroTitle: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  heroSubtitle: {
    fontSize: '18px',
    fontWeight: '300',
  },
  container: {
    padding: '0 20px 40px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '40px',
    animation: 'fadeInDown 0.8s ease-in-out',
  },
  flexWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
  },
  form: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    animation: 'fadeInLeft 0.8s ease-in-out',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    transition: 'border-color 0.3s',
  },
  textarea: {
    padding: '12px 16px',
    fontSize: '16px',
    height: '120px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    resize: 'none',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#0077cc',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  successMsg: {
    color: 'green',
    fontSize: '14px',
    marginTop: '10px',
  },
  mapContainer: {
    flex: '1 1 400px',
    animation: 'fadeInRight 0.8s ease-in-out',
  },
};

export default Contact;
