import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  Clock,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { providers } from "../data/mockData";

import "../styles/booking.css";

function Booking() {
  const { id } = useParams();

  const provider = providers.find(
    (item) => item.id === Number(id)
  );

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!provider) {
    return (
      <>
        <Navbar />

        <div className="booking-not-found">
          <h2>Provider Not Found</h2>

          <Link to="/services">
            Back to Services
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();

    if (!date || !time || !address) {
      alert("Please complete all required fields.");
      return;
    }

    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <>
        <Navbar />

        <main className="booking-success-page">

          <div className="booking-success">

            <div className="success-icon">
              <CheckCircle size={45} />
            </div>

            <p className="success-label">
              BOOKING CONFIRMED
            </p>

            <h1>
              Your service has been booked!
            </h1>

            <p className="success-description">
              Your booking request has been successfully
              submitted to {provider.name}.
            </p>

            <div className="confirmation-card">

              <div className="confirmation-row">
                <span>Service</span>
                <strong>{provider.category}</strong>
              </div>

              <div className="confirmation-row">
                <span>Provider</span>
                <strong>{provider.name}</strong>
              </div>

              <div className="confirmation-row">
                <span>Date</span>
                <strong>{date}</strong>
              </div>

              <div className="confirmation-row">
                <span>Time</span>
                <strong>{time}</strong>
              </div>

              <div className="confirmation-row">
                <span>Service Address</span>
                <strong>{address}</strong>
              </div>

              <div className="confirmation-row total-row">
                <span>Estimated Price</span>
                <strong>₹{provider.price}</strong>
              </div>

            </div>

            <div className="success-actions">

              <Link
                to="/services"
                className="secondary-button"
              >
                Find Another Service
              </Link>

              <Link
                to="/"
                className="primary-button"
              >
                Back to Home
              </Link>

            </div>

          </div>

        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="booking-page">

        <div className="booking-container">

          <Link
            to={`/providers/${provider.id}`}
            className="booking-back"
          >
            <ArrowLeft size={17} />
            Back to Provider
          </Link>

          <div className="booking-layout">

            {/* FORM */}
            <section className="booking-form-card">

              <div className="booking-form-header">

                <p>BOOK A SERVICE</p>

                <h1>
                  Schedule your service
                </h1>

                <span>
                  Choose a convenient date and time for
                  your service.
                </span>

              </div>

              <form onSubmit={handleBooking}>

                {/* Date */}
                <div className="form-group">

                  <label>
                    <CalendarDays size={16} />
                    Select Date
                    <span>*</span>
                  </label>

                  <input
                    type="date"
                    value={date}
                    min={
                      new Date()
                        .toISOString()
                        .split("T")[0]
                    }
                    onChange={(e) =>
                      setDate(e.target.value)
                    }
                    required
                  />

                </div>

                {/* Time */}
                <div className="form-group">

                  <label>
                    <Clock size={16} />
                    Select Time
                    <span>*</span>
                  </label>

                  <select
                    value={time}
                    onChange={(e) =>
                      setTime(e.target.value)
                    }
                    required
                  >

                    <option value="">
                      Select a time slot
                    </option>

                    <option>
                      09:00 AM - 10:00 AM
                    </option>

                    <option>
                      10:00 AM - 11:00 AM
                    </option>

                    <option>
                      11:00 AM - 12:00 PM
                    </option>

                    <option>
                      02:00 PM - 03:00 PM
                    </option>

                    <option>
                      03:00 PM - 04:00 PM
                    </option>

                    <option>
                      04:00 PM - 05:00 PM
                    </option>

                    <option>
                      05:00 PM - 06:00 PM
                    </option>

                  </select>

                </div>

                {/* Address */}
                <div className="form-group">

                  <label>
                    <MapPin size={16} />
                    Service Address
                    <span>*</span>
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Enter the complete address where the service is required..."
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                    required
                  />

                </div>

                {/* Description */}
                <div className="form-group">

                  <label>
                    Describe the problem
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell the professional what service you need..."
                    value={description}
                    onChange={(e) =>
                      setDescription(e.target.value)
                    }
                  />

                </div>

                <button
                  type="submit"
                  className="confirm-booking-button"
                >
                  Confirm Booking
                </button>

              </form>

            </section>

            {/* SUMMARY */}
            <aside className="booking-summary">

              <h2>Booking Summary</h2>

              <div className="summary-provider">

                <div className="summary-avatar">
                  {provider.name.charAt(0)}
                </div>

                <div>
                  <span>
                    {provider.category}
                  </span>

                  <h3>
                    {provider.name}
                  </h3>

                  <p>
                    ⭐ {provider.rating} (
                    {provider.reviews} reviews)
                  </p>
                </div>

              </div>

              <div className="summary-divider"></div>

              <div className="summary-detail">

                <span>Service</span>

                <strong>
                  {provider.category}
                </strong>

              </div>

              <div className="summary-detail">

                <span>Starting Price</span>

                <strong>
                  ₹{provider.price}
                </strong>

              </div>

              <div className="summary-detail">

                <span>Location</span>

                <strong>
                  {provider.location}
                </strong>

              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">

                <span>Estimated Total</span>

                <strong>
                  ₹{provider.price}
                </strong>

              </div>

              <div className="booking-info">

                <CheckCircle size={17} />

                <span>
                  No payment is required at this stage.
                  Final pricing can be confirmed with the
                  service provider.
                </span>

              </div>

            </aside>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Booking;