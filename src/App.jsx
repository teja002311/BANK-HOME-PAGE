import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">SecureBank</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SecureBank</h1>
          <p>Your Trusted Partner in Financial Success</p>
          <button className="cta-button">Open an Account</button>
        </div>
      </section>

      <section className="statistics">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Branch Locations</p>
          </div>
          <div className="stat-item">
            <h3>$10B+</h3>
            <p>Assets Managed</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Online Banking</h3>
            <p>Access your accounts 24/7 with our secure online banking platform.</p>
          </div>
          <div className="feature-card">
            <h3>Mobile Banking</h3>
            <p>Bank on the go with our user-friendly mobile application.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Investments</h3>
            <p>Grow your wealth with our diverse investment options.</p>
          </div>
          <div className="feature-card">
            <h3>Personal Loans</h3>
            <p>Competitive rates for all your personal financing needs.</p>
          </div>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose SecureBank?</h2>
        <div className="why-us-grid">
          <div className="why-us-item">
            <h3>Security First</h3>
            <p>State-of-the-art encryption and security measures to protect your assets.</p>
          </div>
          <div className="why-us-item">
            <h3>Expert Support</h3>
            <p>Dedicated financial advisors to help you achieve your goals.</p>
          </div>
          <div className="why-us-item">
            <h3>Innovation</h3>
            <p>Latest banking technology for a seamless experience.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"SecureBank has transformed how I manage my finances. Their mobile app is incredible!"</p>
            <div className="testimonial-author">- Sarah Johnson</div>
          </div>
          <div className="testimonial-card">
            <p>"The personal loan process was smooth and the rates were better than competitors."</p>
            <div className="testimonial-author">- Michael Chen</div>
          </div>
          <div className="testimonial-card">
            <p>"Their investment advisory services helped me plan for a secure retirement."</p>
            <div className="testimonial-author">- Robert Smith</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#locations">Locations</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><a href="#checking">Checking Accounts</a></li>
              <li><a href="#savings">Savings Accounts</a></li>
              <li><a href="#credit-cards">Credit Cards</a></li>
              <li><a href="#mortgages">Mortgages</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>1-800-SECURE-BANK</li>
              <li>contact@securebank.com</li>
              <li>100 Financial Street</li>
              <li>New York, NY 10001</li>
            </ul>
            <div className="social-links">
              <a href="#facebook">f</a>
              <a href="#twitter">t</a>
              <a href="#linkedin">in</a>
              <a href="#instagram">ig</a>
            </div>
          </div>
        </div>
        <p>© 2024 SecureBank. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App