import React from 'react';

const About = () => {
  const heroStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',

  };

  return (
    <>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 className="display-4 fw-bold">About Us</h1>
      </section>

      <main className="container py-5">
        <h2 className="text-center mb-4">About RICC</h2>
        <p className="text-center">
          RICC Australia Cricket Club has a legacy of nurturing cricket talent for over a decade,
          blending excellence, discipline, and sportsmanship.
        </p>

        {/* Cards for Mission, Vision, and Values */}
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          <div className="col">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h5 className="card-title text-center">Our Mission</h5>
                <p className="card-text">
                  To provide high-quality cricket coaching and infrastructure to players of all levels,
                  empowering them to achieve their full potential.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h5 className="card-title text-center">Our Vision</h5>
                <p className="card-text">
                  To become a leading cricket hub known for producing elite talent and promoting the
                  true spirit of the game in Australia and beyond.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h5 className="card-title text-center">Our Values</h5>
                <ul>
                  <li>Integrity</li>
                  <li>Teamwork</li>
                  <li>Excellence</li>
                  <li>Respect</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <h3 className="mt-5">FAQs</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#a1"
                aria-expanded="true"
                aria-controls="a1"
              >
                Who can join RICC?
              </button>
            </h2>
            <div
              id="a1"
              className="accordion-collapse collapse show"
              aria-labelledby="faq1"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">Anyone aged 6+ interested in cricket is welcome to join.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#a2"
                aria-expanded="false"
                aria-controls="a2"
              >
                Do I need prior experience?
              </button>
            </h2>
            <div
              id="a2"
              className="accordion-collapse collapse"
              aria-labelledby="faq2"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                No. We have programs for beginners, intermediates, and advanced players.
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
