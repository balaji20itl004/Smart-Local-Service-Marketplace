import { useState } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  CheckCircle,
  Clock,
  Briefcase,
  User,
  Settings,
  LogOut,
  MapPin,
  Menu,
  X,
  IndianRupee,
  Star,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/providerDashboard.css";

function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenu, setMobileMenu] = useState(false);

  const user = JSON.parse(
    localStorage.getItem("serviceHubUser")
  );

  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: "Arun Kumar",
      service: "Plumbing",
      date: "28 Aug 2026",
      time: "10:00 AM - 11:00 AM",
      location: "Madurai",
      price: 300,
      status: "Pending",
    },
    {
      id: 2,
      customer: "Priya S",
      service: "Pipe Repair",
      date: "29 Aug 2026",
      time: "02:00 PM - 03:00 PM",
      location: "Madurai",
      price: 450,
      status: "Pending",
    },
    {
      id: 3,
      customer: "Karthik R",
      service: "Bathroom Repair",
      date: "24 Aug 2026",
      time: "11:00 AM - 12:00 PM",
      location: "Madurai",
      price: 500,
      status: "Accepted",
    },
    {
      id: 4,
      customer: "Meena P",
      service: "Tap Repair",
      date: "20 Aug 2026",
      time: "03:00 PM - 04:00 PM",
      location: "Madurai",
      price: 250,
      status: "Completed",
    },
  ]);

  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Plumbing",
      description:
        "Complete home plumbing services.",
      price: 300,
      status: "Active",
    },
    {
      id: 2,
      name: "Pipe Repair",
      description:
        "Leakage and damaged pipe repair.",
      price: 450,
      status: "Active",
    },
    {
      id: 3,
      name: "Bathroom Repair",
      description:
        "Bathroom fittings and repair services.",
      price: 500,
      status: "Active",
    },
  ]);

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  );

  const acceptedBookings = bookings.filter(
    (booking) => booking.status === "Accepted"
  );

  const completedBookings = bookings.filter(
    (booking) => booking.status === "Completed"
  );

  const updateBookingStatus = (id, status) => {
    setBookings((previousBookings) =>
      previousBookings.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status: status,
            }
          : booking
      )
    );
  };

  const deleteService = (id) => {
    setServices((previousServices) =>
      previousServices.filter(
        (service) => service.id !== id
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("serviceHubUser");
    window.location.href = "/";
  };

  const renderContent = () => {
    if (activeTab === "requests") {
      return (
        <BookingRequests
          bookings={pendingBookings}
          updateBookingStatus={updateBookingStatus}
        />
      );
    }

    if (activeTab === "bookings") {
      return (
        <ProviderBookings
          bookings={[
            ...acceptedBookings,
            ...completedBookings,
          ]}
        />
      );
    }

    if (activeTab === "services") {
      return (
        <ServicesSection
          services={services}
          deleteService={deleteService}
        />
      );
    }

    if (activeTab === "profile") {
      return <ProviderProfile user={user} />;
    }

    if (activeTab === "availability") {
      return <AvailabilitySection />;
    }

    return (
      <ProviderOverview
        user={user}
        bookings={bookings}
        pendingBookings={pendingBookings}
        acceptedBookings={acceptedBookings}
        completedBookings={completedBookings}
        setActiveTab={setActiveTab}
        updateBookingStatus={updateBookingStatus}
      />
    );
  };

  return (
    <>
      <Navbar />

      <main className="provider-dashboard-page">

        {/* Mobile Header */}

        <div className="provider-mobile-header">

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
          >
            {mobileMenu ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

          <strong>Provider Dashboard</strong>

        </div>

        <div className="provider-dashboard-layout">

          {/* SIDEBAR */}

          <aside
            className={
              mobileMenu
                ? "provider-sidebar mobile-open"
                : "provider-sidebar"
            }
          >

            <div className="provider-user">

              <div className="provider-avatar">
                {user?.name
                  ? user.name.charAt(0).toUpperCase()
                  : "P"}
              </div>

              <div>

                <strong>
                  {user?.name || "Service Provider"}
                </strong>

                <span>Service Provider</span>

              </div>

            </div>

            <nav className="provider-nav">

              <button
                className={
                  activeTab === "overview"
                    ? "provider-nav-item active"
                    : "provider-nav-item"
                }
                onClick={() => {
                  setActiveTab("overview");
                  setMobileMenu(false);
                }}
              >
                <LayoutDashboard size={18} />
                Overview
              </button>

              <button
                className={
                  activeTab === "requests"
                    ? "provider-nav-item active"
                    : "provider-nav-item"
                }
                onClick={() => {
                  setActiveTab("requests");
                  setMobileMenu(false);
                }}
              >
                <Clock size={18} />
                Booking Requests

                {pendingBookings.length > 0 && (
                  <span className="nav-count">
                    {pendingBookings.length}
                  </span>
                )}

              </button>

              <button
                className={
                  activeTab === "bookings"
                    ? "provider-nav-item active"
                    : "provider-nav-item"
                }
                onClick={() => {
                  setActiveTab("bookings");
                  setMobileMenu(false);
                }}
              >
                <CalendarDays size={18} />
                My Bookings
              </button>

              <button
                className={
                  activeTab === "services"
                    ? "provider-nav-item active"
                    : "provider-nav-item"
                }
                onClick={() => {
                  setActiveTab("services");
                  setMobileMenu(false);
                }}
              >
                <Briefcase size={18} />
                My Services
              </button>

              <button
                className={
                  activeTab === "availability"
                    ? "provider-nav-item active"
                    : "provider-nav-item"
                }
                onClick={() => {
                  setActiveTab("availability");
                  setMobileMenu(false);
                }}
              >
                <Clock size={18} />
                Availability
              </button>

              <button
                className={
                  activeTab === "profile"
                    ? "provider-nav-item active"
                    : "provider-nav-item"
                }
                onClick={() => {
                  setActiveTab("profile");
                  setMobileMenu(false);
                }}
              >
                <User size={18} />
                My Profile
              </button>

            </nav>

            <div className="provider-sidebar-bottom">

              <button className="provider-nav-item">
                <Settings size={18} />
                Settings
              </button>

              <button
                className="provider-nav-item provider-logout"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>

          </aside>

          {/* MAIN CONTENT */}

          <section className="provider-dashboard-main">

            {renderContent()}

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}


/* ==================================================
   OVERVIEW
================================================== */

function ProviderOverview({
  user,
  bookings,
  pendingBookings,
  acceptedBookings,
  completedBookings,
  setActiveTab,
  updateBookingStatus,
}) {
  return (
    <>
      <div className="provider-heading">

        <div>

          <p>PROVIDER DASHBOARD</p>

          <h1>
            Welcome, {user?.name || "Provider"}!
          </h1>

          <span>
            Manage your services, bookings and customers.
          </span>

        </div>

        <button
          className="provider-primary-button"
          onClick={() => setActiveTab("services")}
        >
          <Plus size={16} />
          Add Service
        </button>

      </div>

      {/* Statistics */}

      <div className="provider-stats">

        <div className="provider-stat-card">

          <div className="provider-stat-icon blue">
            <CalendarDays size={20} />
          </div>

          <div>
            <span>Total Bookings</span>
            <strong>{bookings.length}</strong>
          </div>

        </div>

        <div className="provider-stat-card">

          <div className="provider-stat-icon orange">
            <Clock size={20} />
          </div>

          <div>
            <span>Pending Requests</span>
            <strong>
              {pendingBookings.length}
            </strong>
          </div>

        </div>

        <div className="provider-stat-card">

          <div className="provider-stat-icon green">
            <CheckCircle size={20} />
          </div>

          <div>
            <span>Completed</span>
            <strong>
              {completedBookings.length}
            </strong>
          </div>

        </div>

        <div className="provider-stat-card">

          <div className="provider-stat-icon purple">
            <IndianRupee size={20} />
          </div>

          <div>
            <span>Total Earnings</span>
            <strong>₹1,500</strong>
          </div>

        </div>

      </div>

      {/* Booking Requests */}

      <div className="provider-section">

        <div className="provider-section-heading">

          <div>
            <h2>New Booking Requests</h2>

            <p>
              Customers waiting for your response
            </p>
          </div>

          <button
            onClick={() => setActiveTab("requests")}
          >
            View All
          </button>

        </div>

        {pendingBookings.length > 0 ? (

          <div className="provider-booking-list">

            {pendingBookings.slice(0, 2).map(
              (booking) => (
                <ProviderBookingCard
                  key={booking.id}
                  booking={booking}
                  updateBookingStatus={
                    updateBookingStatus
                  }
                  showActions={true}
                />
              )
            )}

          </div>

        ) : (

          <ProviderEmptyState
            text="No pending booking requests."
          />

        )}

      </div>

      {/* Accepted */}

      <div className="provider-section">

        <div className="provider-section-heading">

          <div>
            <h2>Upcoming Jobs</h2>

            <p>
              Services you have accepted
            </p>
          </div>

          <button
            onClick={() => setActiveTab("bookings")}
          >
            View All
          </button>

        </div>

        {acceptedBookings.length > 0 ? (

          <div className="provider-booking-list">

            {acceptedBookings.map((booking) => (
              <ProviderBookingCard
                key={booking.id}
                booking={booking}
                updateBookingStatus={
                  updateBookingStatus
                }
                showActions={false}
              />
            ))}

          </div>

        ) : (

          <ProviderEmptyState
            text="No upcoming jobs."
          />

        )}

      </div>
    </>
  );
}


/* ==================================================
   BOOKING REQUESTS
================================================== */

function BookingRequests({
  bookings,
  updateBookingStatus,
}) {
  return (
    <>
      <div className="provider-heading">

        <div>
          <p>BOOKINGS</p>

          <h1>Booking Requests</h1>

          <span>
            Review customer requests and respond to them.
          </span>

        </div>

      </div>

      <div className="provider-section">

        {bookings.length > 0 ? (

          <div className="provider-booking-list">

            {bookings.map((booking) => (
              <ProviderBookingCard
                key={booking.id}
                booking={booking}
                updateBookingStatus={
                  updateBookingStatus
                }
                showActions={true}
              />
            ))}

          </div>

        ) : (

          <ProviderEmptyState
            text="You don't have any pending requests."
          />

        )}

      </div>
    </>
  );
}


/* ==================================================
   BOOKING CARD
================================================== */

function ProviderBookingCard({
  booking,
  updateBookingStatus,
  showActions,
}) {
  return (
    <div className="provider-booking-card">

      <div className="customer-avatar">
        {booking.customer.charAt(0)}
      </div>

      <div className="provider-booking-info">

        <span className="provider-service">
          {booking.service}
        </span>

        <h3>{booking.customer}</h3>

        <div className="provider-booking-meta">

          <span>
            <CalendarDays size={14} />
            {booking.date}
          </span>

          <span>
            <Clock size={14} />
            {booking.time}
          </span>

          <span>
            <MapPin size={14} />
            {booking.location}
          </span>

        </div>

      </div>

      <div className="provider-booking-actions">

        <span
          className={
            booking.status === "Pending"
              ? "provider-status pending"
              : booking.status === "Accepted"
              ? "provider-status accepted"
              : "provider-status completed"
          }
        >
          {booking.status}
        </span>

        <strong>
          ₹{booking.price}
        </strong>

        {showActions &&
          booking.status === "Pending" && (
            <div className="request-buttons">

              <button
                className="accept-button"
                onClick={() =>
                  updateBookingStatus(
                    booking.id,
                    "Accepted"
                  )
                }
              >
                Accept
              </button>

              <button
                className="reject-button"
                onClick={() =>
                  updateBookingStatus(
                    booking.id,
                    "Rejected"
                  )
                }
              >
                Reject
              </button>

            </div>
          )}

        {!showActions &&
          booking.status === "Accepted" && (
            <button
              className="complete-button"
              onClick={() =>
                updateBookingStatus(
                  booking.id,
                  "Completed"
                )
              }
            >
              Mark Completed
            </button>
          )}

      </div>

    </div>
  );
}


/* ==================================================
   BOOKINGS
================================================== */

function ProviderBookings({ bookings }) {
  return (
    <>
      <div className="provider-heading">

        <div>
          <p>MY WORK</p>

          <h1>My Bookings</h1>

          <span>
            Track your accepted and completed jobs.
          </span>

        </div>

      </div>

      <div className="provider-section">

        {bookings.length > 0 ? (

          <div className="provider-booking-list">

            {bookings.map((booking) => (
              <ProviderBookingCard
                key={booking.id}
                booking={booking}
                showActions={false}
              />
            ))}

          </div>

        ) : (

          <ProviderEmptyState
            text="No bookings available."
          />

        )}

      </div>
    </>
  );
}


/* ==================================================
   SERVICES
================================================== */

function ServicesSection({
  services,
  deleteService,
}) {
  return (
    <>
      <div className="provider-heading">

        <div>
          <p>MY BUSINESS</p>

          <h1>My Services</h1>

          <span>
            Manage the services you offer to customers.
          </span>

        </div>

        <button className="provider-primary-button">
          <Plus size={16} />
          Add Service
        </button>

      </div>

      <div className="provider-service-grid">

        {services.map((service) => (

          <div
            className="provider-service-card"
            key={service.id}
          >

            <div className="service-card-top">

              <div className="service-icon">
                <Briefcase size={20} />
              </div>

              <span className="service-active">
                {service.status}
              </span>

            </div>

            <h3>{service.name}</h3>

            <p>
              {service.description}
            </p>

            <div className="service-card-bottom">

              <strong>
                ₹{service.price}
              </strong>

              <div>

                <button>
                  <Edit size={15} />
                </button>

                <button
                  onClick={() =>
                    deleteService(service.id)
                  }
                >
                  <Trash2 size={15} />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>
    </>
  );
}


/* ==================================================
   AVAILABILITY
================================================== */

function AvailabilitySection() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [availability, setAvailability] =
    useState({
      Monday: true,
      Tuesday: true,
      Wednesday: true,
      Thursday: true,
      Friday: true,
      Saturday: true,
      Sunday: false,
    });

  const toggleDay = (day) => {
    setAvailability({
      ...availability,
      [day]: !availability[day],
    });
  };

  return (
    <>
      <div className="provider-heading">

        <div>
          <p>WORK SCHEDULE</p>

          <h1>Availability</h1>

          <span>
            Set the days you are available for customers.
          </span>

        </div>

      </div>

      <div className="availability-card">

        {days.map((day) => (

          <div
            className="availability-row"
            key={day}
          >

            <div>
              <strong>{day}</strong>

              <span>
                {availability[day]
                  ? "Available"
                  : "Unavailable"}
              </span>
            </div>

            <button
              className={
                availability[day]
                  ? "availability-toggle active"
                  : "availability-toggle"
              }
              onClick={() => toggleDay(day)}
            >
              <span></span>
            </button>

          </div>

        ))}

      </div>
    </>
  );
}


/* ==================================================
   PROFILE
================================================== */

function ProviderProfile({ user }) {
  return (
    <>
      <div className="provider-heading">

        <div>
          <p>ACCOUNT</p>

          <h1>Provider Profile</h1>

          <span>
            Manage your professional information.
          </span>

        </div>

      </div>

      <div className="provider-profile-card">

        <div className="provider-large-avatar">
          {user?.name
            ? user.name.charAt(0).toUpperCase()
            : "P"}
        </div>

        <div className="provider-profile-fields">

          <div>
            <span>Name</span>

            <strong>
              {user?.name || "Service Provider"}
            </strong>
          </div>

          <div>
            <span>Email</span>

            <strong>
              {user?.email || "Not available"}
            </strong>
          </div>

          <div>
            <span>Profession</span>

            <strong>
              Plumbing Service Provider
            </strong>
          </div>

          <div>
            <span>Rating</span>

            <strong className="rating-value">
              <Star size={14} />
              4.8
            </strong>
          </div>

        </div>

      </div>
    </>
  );
}


/* ==================================================
   EMPTY
================================================== */

function ProviderEmptyState({ text }) {
  return (
    <div className="provider-empty">

      <Briefcase size={30} />

      <p>{text}</p>

    </div>
  );
}

export default ProviderDashboard;