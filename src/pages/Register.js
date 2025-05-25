import React, { useState } from 'react';
import api from '../axios';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section mm1">
      <div className="hero-overlay mm2">
        <h1 className="hero-title mm3">Create Your Account</h1>
        <p className="hero-subtitle mm4">Join us and book your cricket or bowling sessions easily!</p>
      </div>
    </section>
  );
};

const Register = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    confirm_password: '',
    phone_number: '',
    dob: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match check
    if (form.password !== form.confirm_password) {
      alert('Passwords do not match');
      return;
    }

    // Password strength validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(form.password)) {
      alert(
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'
      );
      return;
    }

    try {
      await api.post('/register/', form);
      alert('Registered successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response || error);
      alert('Failed to register');
    }
  };

  return (
    <>
      <HeroSection />
      <div className="container mm5">
        <form onSubmit={handleSubmit} className="register-form mm6">
          <h2 className="form-title mm7">Register</h2>
          <table>
            <tbody>
              <tr className="mm8">
                <th><label htmlFor="first_name">First Name</label></th>
                <td>
                  <input
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={form.first_name}
                    className="form-input mm9"
                    required
                  />
                </td>
              </tr>

              <tr className="mm10">
                <th><label htmlFor="last_name">Last Name</label></th>
                <td>
                  <input
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={form.last_name}
                    className="form-input mm11"
                    required
                  />
                </td>
              </tr>

              <tr className="mm12">
                <th><label htmlFor="email">Email</label></th>
                <td>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={form.email}
                    className="form-input mm13"
                    required
                  />
                </td>
              </tr>

              <tr className="mm14">
                <th><label htmlFor="username">Username</label></th>
                <td>
                  <input
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={form.username}
                    className="form-input mm15"
                    required
                  />
                </td>
              </tr>

              <tr className="mm16">
                <th><label htmlFor="phone_number">Phone Number</label></th>
                <td>
                  <input
                    id="phone_number"
                    name="phone_number"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={form.phone_number}
                    className="form-input mm17"
                    required
                  />
                </td>
              </tr>

              <tr className="mm18">
                <th><label htmlFor="dob">Date of Birth</label></th>
                <td>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    placeholder="Date of Birth"
                    onChange={handleChange}
                    value={form.dob}
                    className="form-input mm19"
                    required
                  />
                </td>
              </tr>

              <tr className="mm20">
                <th><label htmlFor="password">Password</label></th>
                <td>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={form.password}
                    className="form-input mm21"
                    required
                  />
                </td>
              </tr>

              <tr className="mm22">
                <th><label htmlFor="confirm_password">Confirm Password</label></th>
                <td>
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={form.confirm_password}
                    className="form-input mm23"
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="form-button mm24">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
