import { useParams, Link } from "react-router-dom";
import {
  Star,
  MapPin,
  BadgeCheck,
  Clock,
  CalendarDays,
  CheckCircle,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { providers } from "../data/mockData";

import "../styles/providerProfile.css";

function ProviderProfile() {
  const { id } = useParams();

  const provider = providers.find(
    (item) => item.id === Number(id)
  );

  if (!provider) {
    return (
      <>
        <Navbar />

        <div className="profile-not-found">
          <h2>Provider Not Found</h2>
          <p>
            The service provider you are looking for does not
            exist.
          </p>

          <Link to="/services">
            Back to Services
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="provider-profile">

        {/* Profile Header */}
        <section className="profile-header">

          <div className="profile-header-container">

            <Link
              to="/services"
              className="back-services"
            >
              ← Back to Services
            </Link>

            <div className="profile-main">

              <div className="provider-avatar">
                {provider.name.charAt(0)}
              </div>

              <div className="profile-basic">

                <div className="profile-category">
                  {provider.category}
                </div>

                <h1>{provider.name}</h1>

                {provider.verified && (
                  <div className="profile-verified">
                    <BadgeCheck size={17} />
                    Verified Provider
                  </div>
                )}

                <div className="profile-meta">

                  <span>
                    <Star
                      size={17}
                      fill="currentColor"
                    />
                    {provider.rating}
                    <small>
                      ({provider.reviews} reviews)
                    </small>
                  </span>

                  <span>
                    <MapPin size={17} />
                    {provider.location}
                  </span>

                  <span>
                    <Clock size={17} />
                    {provider.experience} years experience
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Profile Content */}
        <section className="profile-content">

          <div className="profile-left">

            {/* About */}
            <div className="profile-section">

              <h2>About This Provider</h2>

              <p>
                {provider.name} is a trusted local professional
                providing high-quality {provider.category.toLowerCase()}
                services in {provider.location}.
              </p>

              <p>
                With {provider.experience} years of experience,
                this provider focuses on reliable service,
                transparent pricing and customer satisfaction.
              </p>

            </div>

            {/* Services */}
            <div className="profile-section">

              <h2>Services Offered</h2>

              <div className="offered-services">

                {provider.services.map((service, index) => (
                  <div
                    className="offered-service"
                    key={index}
                  >
                    <CheckCircle size={17} />
                    <span>{service}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* Reviews */}
            <div className="profile-section">

              <div className="reviews-heading">

                <div>
                  <h2>Customer Reviews</h2>

                  <p>
                    Based on {provider.reviews} reviews
                  </p>
                </div>

                <div className="overall-rating">

                  <Star
                    size={20}
                    fill="currentColor"
                  />

                  <strong>
                    {provider.rating}
                  </strong>

                </div>

              </div>

              <div className="review">

                <div className="review-top">

                  <strong>Arun Kumar</strong>

                  <span>
                    ⭐⭐⭐⭐⭐
                  </span>

                </div>

                <p>
                  Very professional and completed the work
                  on time. The pricing was also reasonable.
                </p>

              </div>

              <div className="review">

                <div className="review-top">

                  <strong>Priya S</strong>

                  <span>
                    ⭐⭐⭐⭐⭐
                  </span>

                </div>

                <p>
                  Good service and quick response. I would
                  definitely recommend this provider.
                </p>

              </div>

            </div>

          </div>

          {/* Booking Card */}
          <aside className="booking-card">

            <div className="booking-price">

              <span>Starting from</span>

              <strong>₹{provider.price}</strong>

            </div>

            <div className="booking-divider"></div>

            <div className="booking-detail">

              <MapPin size={18} />

              <div>
                <span>Service Location</span>
                <strong>
                  {provider.location}
                </strong>
              </div>

            </div>

            <div className="booking-detail">

              <CalendarDays size={18} />

              <div>
                <span>Availability</span>
                <strong>
                  {provider.available
                    ? "Available today"
                    : "Currently unavailable"}
                </strong>
              </div>

            </div>

            <div className="booking-detail">

              <Clock size={18} />

              <div>
                <span>Response Time</span>
                <strong>
                  Usually within 1 hour
                </strong>
              </div>

            </div>

            {provider.available ? (
              <Link
                to={`/booking/${provider.id}`}
                className="profile-book-button"
              >
                Book This Service
              </Link>
            ) : (
              <button
                className="profile-book-button disabled"
                disabled
              >
                Currently Unavailable
              </button>
            )}

            <p className="booking-note">
              You can review the booking details before
              confirming the service.
            </p>

          </aside>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default ProviderProfile;