import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/footer.css";
function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">

            <div className="hero-content">

              <div className="hero-badge">
                <span className="badge-dot"></span>
                Trusted local services near you
              </div>

              <p className="hero-subtitle">
                LOCAL SERVICES, MADE SIMPLE
              </p>

              <h1>
                Find Trusted
                <span> Local Professionals</span>
              </h1>

              <p className="hero-description">
                Connect with reliable and verified professionals
                for your home, vehicle, electronics, and everyday
                service needs.
              </p>

              {/* Search Box */}
              <div className="hero-search">

                <div className="search-field">
                  <label>What service do you need?</label>
                  <input
                    type="text"
                    placeholder="e.g. Plumber, Electrician"
                  />
                </div>

                <div className="search-divider"></div>

                <div className="search-field">
                  <label>Where do you need it?</label>
                  <input
                    type="text"
                    placeholder="Enter your location"
                  />
                </div>

                <button className="search-button">
                  Find Services
                </button>

              </div>

              {/* Trust Points */}
              <div className="hero-trust">

                <div className="trust-item">
                  <span className="trust-check">✓</span>
                  <span>Verified Providers</span>
                </div>

                <div className="trust-item">
                  <span className="trust-check">✓</span>
                  <span>Transparent Pricing</span>
                </div>

                <div className="trust-item">
                  <span className="trust-check">✓</span>
                  <span>Easy Booking</span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Popular Services */}
        <section className="services-section">
          <div className="section-heading">
            <p>POPULAR SERVICES</p>
            <h2>What can we help you with?</h2>
            <span>
              Find trusted professionals for your everyday needs.
            </span>
          </div>

          <div className="service-grid">

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Plumbing</h3>
              <p>
                Pipe repair, leakage fixing and water services.
              </p>
              <a href="/services">Explore Services →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Electrical</h3>
              <p>
                Electrical installation, repair and maintenance.
              </p>
              <a href="/services">Explore Services →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">❄️</div>
              <h3>AC Repair</h3>
              <p>
                AC servicing, repair and regular maintenance.
              </p>
              <a href="/services">Explore Services →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">🧹</div>
              <h3>Cleaning</h3>
              <p>
                Professional home and office cleaning services.
              </p>
              <a href="/services">Explore Services →</a>
            </div>

          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works" id="how-it-works">

          <div className="section-heading">
            <p>HOW IT WORKS</p>
            <h2>Get your service in three simple steps</h2>
          </div>

          <div className="steps">

            <div className="step">
              <span className="step-number">01</span>
              <h3>Search</h3>
              <p>
                Choose the service you need and find professionals
                available near your location.
              </p>
            </div>

            <div className="step">
              <span className="step-number">02</span>
              <h3>Compare & Book</h3>
              <p>
                Compare ratings, experience and pricing before
                choosing the right professional.
              </p>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <h3>Get the Service</h3>
              <p>
                Book your preferred time and get the service at
                your doorstep.
              </p>
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;