import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/user', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(user => setUser(user))
      .catch(err => console.log(err));
  }, []);

  const handleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };

  const handleLogout = () => {
    window.location.href = 'http://localhost:3001/api/logout';
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">Escool</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          {user ? (
            <div className="user-profile">
              <img src={user.photos[0].value} alt="profile" className="profile-pic" />
              <span>{user.displayName}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <button onClick={handleLogin} className="login-btn">Login with Google</button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Escool</h1>
          <p className="hero-subtitle">Your all-in-one learning platform</p>
          {!user && (
            <button onClick={handleLogin} className="cta-button">
              Get Started
            </button>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose Escool?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="feature-icon">📚</i>
            <h3>Easy Learning</h3>
            <p>Access your courses anytime, anywhere</p>
          </div>
          <div className="feature-card">
            <i className="feature-icon">🔒</i>
            <h3>Secure Access</h3>
            <p>Safe and secure Google authentication</p>
          </div>
          <div className="feature-card">
            <i className="feature-icon">📱</i>
            <h3>Mobile Friendly</h3>
            <p>Learn on any device, any time</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Escool has transformed how I learn. The platform is intuitive and user-friendly."</p>
            <div className="testimonial-author">- Sarah Johnson</div>
          </div>
          <div className="testimonial-card">
            <p>"The best learning platform I've used. Highly recommended!"</p>
            <div className="testimonial-author">- Michael Chen</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Escool</h4>
            <p>Making learning accessible to everyone</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@escool.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Escool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
