import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-3 position-relative">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3 fw-bold">About RICC</h5>
            <p>
              RICC Australia Cricket Club is dedicated to promoting community cricket,
              providing quality training, and organizing engaging matches for all skill levels.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3 fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link text-white text-decoration-none d-block py-1"><i className="fas fa-home me-2"></i>Home</a></li>
              <li><a href="/about" className="footer-link text-white text-decoration-none d-block py-1"><i className="fas fa-info-circle me-2"></i>About</a></li>
              <li><a href="/booking" className="footer-link text-white text-decoration-none d-block py-1"><i className="fas fa-calendar-check me-2"></i>Booking</a></li>
              <li><a href="/contact" className="footer-link text-white text-decoration-none d-block py-1"><i className="fas fa-envelope me-2"></i>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3 fw-bold">Contact Us</h5>
            <p>
              <i className="fas fa-envelope me-2"></i>
              <a href="mailto:contact@riccclub.au" className="footer-link text-white text-decoration-none">contact@riccclub.au</a>
            </p>
            <p>
              <i className="fas fa-phone me-2"></i>
              <a href="tel:+61123456789" className="footer-link text-white text-decoration-none">+61 123 456 789</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>
              2/56 Barretta Road, Ravenhall, Vic 3023
            </p>
          </div>
        </div>

        {/* Bottom Socials */}
        <div className="text-center border-top border-secondary pt-3 mt-3">
          <div className="mb-3">
            <a href="https://instagram.com/" className="text-white me-3 fs-5"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com/" className="text-white fs-5"><i className="fab fa-facebook"></i></a>
          </div>
          <p className="mb-0 small">
            © {currentYear} RICC Australia Cricket Club. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Effect (Optional) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      ></div>
    </footer>
  );
};

export default Footer;
