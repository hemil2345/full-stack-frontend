import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem('access');
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('access');
    window.location.href = '/login';
  };

  const closeOffcanvas = () => {
    const offcanvasEl = document.getElementById('mobileSidebar');
    const bsOffcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvasEl);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  };

  const navItems = [
    { to: '/', label: 'Home', icon: 'fas fa-home' },
    { to: '/about', label: 'About', icon: 'fas fa-info-circle' },
    { to: '/booking', label: 'Book', icon: 'fas fa-calendar-check' },
    { to: '/status', label: 'Status', icon: 'fas fa-tasks' },
    { to: '/contact', label: 'Contact', icon: 'fas fa-envelope' },
  ];

  return (
    <header className="bg-dark text-white sticky-top shadow-sm">
      <div className="container-fluid py-2">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left: Logo + Mobile Hamburger */}
          <div className="d-flex align-items-center gap-3">
            {isLoggedIn && (
              <button
                className="btn btn-outline-light d-md-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileSidebar"
                aria-controls="mobileSidebar"
              >
                <i className="fas fa-bars"></i>
              </button>
            )}
            <Link className="navbar-brand fs-4 fw-bold text-white text-decoration-none" to="/">
              <img src={logo} alt="Logo" id="logo_img" />
              <i className="fas fa-cricket me-2"> RICC Club</i>
            </Link>
          </div>

          {/* Right: Nav Links + Auth Buttons (Desktop only) */}
          <div className="d-none d-md-flex align-items-center gap-4">
            {isLoggedIn && (
              <nav className="d-flex gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`nav-link-custom text-white text-decoration-none ${
                      location.pathname === item.to ? 'fw-bold text-primary' : ''
                    }`}
                  >
                    <i className={`${item.icon} me-1`}></i>
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}

            <div className="d-flex gap-2">
              {isLoggedIn ? (
                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt me-1"></i>Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="btn btn-light btn-sm">
                    <i className="fas fa-sign-in-alt me-1"></i>Login
                  </Link>
                  <Link to="/register" className="btn btn-outline-light btn-sm">
                    <i className="fas fa-user-plus me-1"></i>Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Sidebar for Mobile */}
      {isLoggedIn && (
        <div
          className="offcanvas offcanvas-start bg-dark text-white"
          tabIndex="-1"
          id="mobileSidebar"
          aria-labelledby="mobileSidebarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mobileSidebarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="d-block mb-3 text-white text-decoration-none"
                onClick={closeOffcanvas}
              >
                <i className={`${item.icon} me-2`}></i>
                {item.label}
              </Link>
            ))}
            <hr className="border-secondary" />
            <button
              className="btn btn-outline-light w-100"
              onClick={() => {
                handleLogout();
                closeOffcanvas();
              }}
            >
              <i className="fas fa-sign-out-alt me-2"></i>Logout
            </button>
          </div>
        </div>
      )}

      {/* Custom Style */}
      <style>{`
        .nav-link-custom {
          transition: color 0.3s ease;
        }
        .nav-link-custom:hover {
          color: #0d6efd !important;
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
