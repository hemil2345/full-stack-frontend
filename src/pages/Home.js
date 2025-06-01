import React from 'react';

const Home = () => {
  return (
    <main>

      {/* Hero Section with Background Image */}
      <section
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          height: '70vh',
          backgroundImage: 'url("https://images.unsplash.com/photo-1595210382266-2d0077c1f541?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        ></div>

        {/* Hero Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '700px',
            padding: '0 15px',
            textAlign: 'center',
          }}
        >
          <h1 className="display-4 fw-bold">Welcome to RICC Australia Cricket Club</h1>
          <p className="lead mb-4">
            Join us to experience the best cricket training and community spirit.
          </p>
          <a href="/register" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center mb-5 fw-semibold">What Our Members Say</h3>
          <div className="row g-4">
            {[
              { text: "Amazing coaches and great facilities!", author: "Sam D." },
              { text: "My kids love every session here.", author: "Priya R." },
              { text: "Top club in the area without a doubt.", author: "Daniel K." },
            ].map(({ text, author }, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-4 bg-light rounded-4 shadow-sm hover-gloss h-100 d-flex flex-column justify-content-between">
                  <p className="fst-italic mb-4">“{text}”</p>
                  <footer className="blockquote-footer text-end">{author}</footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 text-white" style={{ backgroundColor: '#198754' }}>
        <div className="container text-center">
          <h2 className="fw-semibold mb-3">Ready to Get Started?</h2>
          <p className="mb-4 fs-5">Join the RICC family and begin your cricket journey today.</p>
          <a href="/login" className="btn btn-outline-light btn-lg shadow">
            Please Login To Book Your Spot
          </a>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container my-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="fw-bold mb-4">Our Achievements</h2>
          </div>
          {[
            { title: "🏆 National Titles", desc: "5 National Youth Championships" },
            { title: "🎯 State Representation", desc: "3 Players selected for the State Team in 2024" },
            { title: "🥇 Local Wins", desc: "100+ Local Tournament Wins" },
          ].map(({ title, desc }, idx) => (
            <div key={idx} className="col-md-4 mt-4 mt-md-0">
              <div className="glass-card p-4 text-center rounded-4 shadow">
                <h4 className="fw-semibold">{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div class="container py-5">
  <h2 class="text-center mb-5">Choose Your Plan</h2>
  <div class="row justify-content-center g-4">
    <div class="col-md-4">
      <div class="card pricing-card text-center">
        <div class="card-header py-4">
          <h3>Plan</h3>
        </div>
        <div class="card-body">
          <p class="price">$30</p>
          <ul class="list-unstyled mt-3 mb-4">
            <li class="feature"><i class="fa fa-check-circle"></i>1 Hour Access</li>
          </ul>
        </div>
      </div>
    </div>
        <div class="col-md-4">
      <div class="card pricing-card text-center">
        <div class="card-header py-4">
          <h3>Plan</h3>
        </div>
        <div class="card-body">
          <p class="price">$50</p>
          <ul class="list-unstyled mt-3 mb-4">
            <li class="feature"><i class="fa fa-check-circle"></i>2 Hour Access</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card pricing-card text-center">
        <div class="card-header py-4">
          <h3>Plan</h3>
        </div>
        <div class="card-body">
          <p class="price">$70</p>
          <ul class="list-unstyled mt-3 mb-4">
            <li class="feature"><i class="fa fa-check-circle"></i>3 Hour Access</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card pricing-card text-center">
        <div class="card-header py-4">
          <h3>Plan</h3>
        </div>
        <div class="card-body">
          <p class="price">$90</p>
          <ul class="list-unstyled mt-3 mb-4">
            <li class="feature"><i class="fa fa-check-circle"></i>4 Hour Access</li>
          </ul>
        </div>
      </div>
    </div>
        <div class="col-md-4">
      <div class="card pricing-card text-center">
        <div class="card-header py-4">
          <h3>Plan</h3>
        </div>
        <div class="card-body">
          <p class="price">$110</p>
          <ul class="list-unstyled mt-3 mb-4">
            <li class="feature"><i class="fa fa-check-circle"></i>5 Hour Access</li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</div>
    </main>
  );
};

export default Home;
