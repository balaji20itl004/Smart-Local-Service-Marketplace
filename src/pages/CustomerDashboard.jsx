import { useState } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Clock,
  CheckCircle,
  Heart,
  User,
  Settings,
  LogOut,
  MapPin,
  Star,
  Menu,
  X,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/dashboard.css";

function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenu, setMobileMenu] = useState(false);

  const user = JSON.parse(
    localStorage.getItem("serviceHubUser")
  );

  const bookings = [
    {
      id: 1,
      provider: "Ravi Plumbing Services",
      service: "Plumbing",
      date: "28 Aug 2026",
      time: "10:00 AM - 11:00 AM",
      location: "Madurai",
      price: 300,
      status: "Upcoming",
    },
    {
      id: 2,
      provider: "CoolAir AC Services",
      service: "AC Repair",
      date: "22 Aug 2026",
      time: "02:00 PM - 03:00 PM",
      location: "Madurai",
      price: 500,
      status: "Completed",
    },
    {
      id: 3,
      provider: "Kumar Electrical Works",
      service: "Electrical",
      date: "18 Aug 2026",
      time: "11:00 AM - 12:00 PM",
      location: "Madurai",
      price: 250,
      status: "Completed",
    },
  ];

  const upcomingBookings = bookings.filter(
    (booking) => booking.status === "Upcoming"
  );

  const completedBookings = bookings.filter(
    (booking) => booking.status === "Completed"
  );

  const handleLogout = () => {
    localStorage.removeItem("serviceHubUser");
    window.location.href = "/";
  };

  const renderContent = () => {
    if (activeTab === "bookings") {
      return (
        <BookingsSection bookings={bookings} />
      );
    }

    if (activeTab === "upcoming") {
      return (
        <BookingsSection
          bookings={upcomingBookings}
        />
      );
    }

    if (activeTab === "completed") {
      return (
        <BookingsSection
          bookings={completedBookings}
        />
      );
    }

    if (activeTab === "saved") {
      return <SavedSection />;
    }

    if (activeTab === "profile") {
      return <ProfileSection user={user} />;
    }

    return (
      <OverviewSection
        user={user}
        bookings={bookings}
        upcomingBookings={upcomingBookings}
        completedBookings={completedBookings}
        setActiveTab={setActiveTab}
      />
    );
  };

  return (
    <>
      <Navbar />

      <main className="dashboard-page">

        <div className="dashboard-mobile-header">

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

          <strong>Customer Dashboard</strong>

        </div>

        <div className="dashboard-layout">

          {/* Sidebar */}

          <aside
            className={
              mobileMenu
                ? "dashboard-sidebar mobile-open"
                : "dashboard-sidebar"
            }
          >

            <div className="dashboard-user">

              <div className="dashboard-avatar">
                {user?.name
                  ? user.name.charAt(0).toUpperCase()
                  : "U"}
              </div>

              <div>
                <strong>
                  {user?.name || "Customer"}
                </strong>

                <span>Customer</span>
              </div>

            </div>

            <nav className="dashboard-nav">

              <button
                className={
                  activeTab === "overview"
                    ? "dashboard-nav-item active"
                    : "dashboard-nav-item"
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
                  activeTab === "bookings"
                    ? "dashboard-nav-item active"
                    : "dashboard-nav-item"
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
                  activeTab === "upcoming"
                    ? "dashboard-nav-item active"
                    : "dashboard-nav-item"
                }
                onClick={() => {
                  setActiveTab("upcoming");
                  setMobileMenu(false);
                }}
              >
                <Clock size={18} />
                Upcoming
              </button>

              <button
                className={
                  activeTab === "completed"
                    ? "dashboard-nav-item active"
                    : "dashboard-nav-item"
                }
                onClick={() => {
                  setActiveTab("completed");
                  setMobileMenu(false);
                }}
              >
                <CheckCircle size={18} />
                Completed
              </button>

              <button
                className={
                  activeTab === "saved"
                    ? "dashboard-nav-item active"
                    : "dashboard-nav-item"
                }
                onClick={() => {
                  setActiveTab("saved");
                  setMobileMenu(false);
                }}
              >
                <Heart size={18} />
                Saved Providers
              </button>

              <button
                className={
                  activeTab === "profile"
                    ? "dashboard-nav-item active"
                    : "dashboard-nav-item"
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

            <div className="dashboard-sidebar-bottom">

              <button className="dashboard-nav-item">
                <Settings size={18} />
                Settings
              </button>

              <button
                className="dashboard-nav-item logout"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>

          </aside>

          {/* Main */}

          <section className="dashboard-main">

            {renderContent()}

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}


/* =========================
   OVERVIEW
========================= */

function OverviewSection({
  user,
  bookings,
  upcomingBookings,
  completedBookings,
  setActiveTab,
}) {
  return (
    <>
      <div className="dashboard-heading">

        <div>
          <p>WELCOME BACK</p>

          <h1>
            Hello, {user?.name || "Customer"}!
          </h1>

          <span>
            Manage your services and bookings from here.
          </span>
        </div>

        <a
          href="/services"
          className="find-service-button"
        >
          Find a Service
        </a>

      </div>

      {/* Statistics */}

      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon blue">
            <CalendarDays size={20} />
          </div>

          <div>
            <span>Total Bookings</span>
            <strong>{bookings.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <Clock size={20} />
          </div>

          <div>
            <span>Upcoming</span>
            <strong>
              {upcomingBookings.length}
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <CheckCircle size={20} />
          </div>

          <div>
            <span>Completed</span>
            <strong>
              {completedBookings.length}
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <Heart size={20} />
          </div>

          <div>
            <span>Saved Providers</span>
            <strong>0</strong>
          </div>
        </div>

      </div>

      {/* Upcoming */}

      <div className="dashboard-section">

        <div className="section-heading">

          <div>
            <h2>Upcoming Service</h2>
            <p>Your next scheduled service</p>
          </div>

          <button
            onClick={() => setActiveTab("upcoming")}
          >
            View All
          </button>

        </div>

        {upcomingBookings.length > 0 ? (
          <BookingCard
            booking={upcomingBookings[0]}
          />
        ) : (
          <EmptyState text="No upcoming services." />
        )}

      </div>

      {/* Recent */}

      <div className="dashboard-section">

        <div className="section-heading">

          <div>
            <h2>Recent Bookings</h2>
            <p>Your recent service history</p>
          </div>

          <button
            onClick={() => setActiveTab("bookings")}
          >
            View All
          </button>

        </div>

        <div className="booking-list">

          {bookings.slice(0, 3).map(
            (booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
              />
            )
          )}

        </div>

      </div>
    </>
  );
}


/* =========================
   BOOKINGS
========================= */

function BookingsSection({ bookings }) {
  return (
    <>
      <div className="dashboard-heading">

        <div>
          <p>MY SERVICES</p>

          <h1>My Bookings</h1>

          <span>
            View and manage all your service bookings.
          </span>
        </div>

        <a
          href="/services"
          className="find-service-button"
        >
          Find a Service
        </a>

      </div>

      <div className="dashboard-section">

        {bookings.length > 0 ? (
          <div className="booking-list">

            {bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
              />
            ))}

          </div>
        ) : (
          <EmptyState text="No bookings found." />
        )}

      </div>
    </>
  );
}


/* =========================
   BOOKING CARD
========================= */

function BookingCard({ booking }) {
  return (
    <div className="dashboard-booking-card">

      <div className="booking-service-icon">
        {booking.service.charAt(0)}
      </div>

      <div className="dashboard-booking-info">

        <span className="booking-category">
          {booking.service}
        </span>

        <h3>{booking.provider}</h3>

        <div className="booking-meta">

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

      <div className="dashboard-booking-right">

        <span
          className={
            booking.status === "Upcoming"
              ? "status upcoming"
              : "status completed"
          }
        >
          {booking.status}
        </span>

        <strong>
          ₹{booking.price}
        </strong>

      </div>

    </div>
  );
}


/* =========================
   SAVED
========================= */

function SavedSection() {
  return (
    <>
      <div className="dashboard-heading">

        <div>
          <p>SAVED</p>
          <h1>Saved Providers</h1>

          <span>
            Quickly access professionals you may want
            to hire again.
          </span>
        </div>

      </div>

      <div className="dashboard-section">

        <EmptyState
          icon={<Heart size={30} />}
          text="You haven't saved any providers yet."
        />

      </div>
    </>
  );
}


/* =========================
   PROFILE
========================= */

function ProfileSection({ user }) {
  return (
    <>
      <div className="dashboard-heading">

        <div>
          <p>ACCOUNT</p>
          <h1>My Profile</h1>

          <span>
            Manage your personal information.
          </span>
        </div>

      </div>

      <div className="profile-dashboard-card">

        <div className="large-dashboard-avatar">
          {user?.name
            ? user.name.charAt(0).toUpperCase()
            : "U"}
        </div>

        <div className="profile-fields">

          <div>
            <span>Full Name</span>
            <strong>
              {user?.name || "Customer"}
            </strong>
          </div>

          <div>
            <span>Email Address</span>
            <strong>
              {user?.email || "Not available"}
            </strong>
          </div>

          <div>
            <span>Account Type</span>
            <strong>Customer</strong>
          </div>

        </div>

      </div>
    </>
  );
}


/* =========================
   EMPTY
========================= */

function EmptyState({ icon, text }) {
  return (
    <div className="dashboard-empty">

      {icon || (
        <CalendarDays size={30} />
      )}

      <p>{text}</p>

      <a href="/services">
        Find a Service
      </a>

    </div>
  );
}

export default CustomerDashboard;