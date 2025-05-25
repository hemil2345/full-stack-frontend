import React, { useState } from 'react';
import api from '../axios';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.heroOverlay}>
        <h1 style={styles.heroTitle}>Welcome Back!</h1>
        <p style={styles.heroSubtitle}>Login to book your cricket or bowling sessions easily.</p>
      </div>
    </section>
  );
};

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('login/', form);
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.response || error);
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <HeroSection />

      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.formTitle}>Login</h2>

          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            style={styles.input}
            required
            autoFocus
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    height: '300px',
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661893983686-9c246656021b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'fadeInHero 1s ease-in-out',
    marginBottom: '50px',
  },
  heroOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
    maxWidth: '400px',
    margin: '0 auto 60px',
    padding: '0 20px',
    animation: 'fadeInUp 0.8s ease-in-out',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
  },
  formTitle: {
    marginBottom: '25px',
    fontSize: '28px',
    color: '#333',
    textAlign: 'center',
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '12px 15px',
    fontSize: '18px',
    backgroundColor: '#0077cc',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Login;
