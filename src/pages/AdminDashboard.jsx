import { useState } from "react";

import {
  LayoutDashboard,
  Users,
  UserCheck,
  Briefcase,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  CheckCircle,
  Clock,
  IndianRupee,
  ShieldCheck,
  Search,
  Eye,
  Ban,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/adminDashboard.css";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenu, setMobileMenu] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      name: "Ravi Plumbing",
      email: "ravi@gmail.com",
      role: "Provider",
      status: "Active",
    },
    {
      id: 3,
      name: "Priya S",
      email: "priya@gmail.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 4,
      name: "Kumar Electrical",
      email: "kumar@gmail.com",
      role: "Provider",
      status: "Pending",
    },
  ]);

  const [providers, setProviders] = useState([
    {
      id: 1,
      name: "Ravi Plumbing Services",
      category: "Plumbing",
      location: "Madurai",
      rating: 4.8,
      status: "Verified",
    },
    {
      id: 2,
      name: "CoolAir AC Services",
      category: "AC Repair",
      location: "Madurai",
      rating: 4.6,
      status: "Verified",
    },
    {
      id: 3,
      name: "Kumar Electrical Works",
      category: "Electrical",
      location: "Madurai",
      rating: 4.5,
      status: "Pending",
    },
  ]);

  const bookings = [
    {
      id: 1,
      customer: "Arun Kumar",
      provider: "Ravi Plumbing Services",
      service: "Plumbing",
      date: "28 Aug 2026",
      amount: 300,
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Priya S",
      provider: "CoolAir AC Services",
      service: "AC Repair",
      date: "27 Aug 2026",
      amount: 500,
      status: "Completed",
    },
    {
      id: 3,
      customer: "Karthik R",
      provider: "Kumar Electrical Works",
      service: "Electrical",
      date: "26 Aug 2026",
      amount: 450,
      status: "Pending",
    },
    {
      id: 4,
      customer: "Meena P",
      provider: "Ravi Plumbing Services",
      service: "Pipe Repair",
      date: "24 Aug 2026",
      amount: 400,
      status: "Completed",
    },
  ];

  const verifyProvider = (id) => {
    setProviders((previousProviders) =>
      previousProviders.map((provider) =>
        provider.id === id
          ? {
              ...provider,
              status: "Verified",
            }
          : provider
      )
    );
  };

  const updateUserStatus = (id) => {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : user
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("serviceHubUser");
    window.location.href = "/";
  };

  const renderContent = () => {
    if (activeTab === "users") {
      return (
        <UsersSection
          users={users}
          updateUserStatus={updateUserStatus}
        />
      );
    }

    if (activeTab === "providers") {
      return (
        <ProvidersSection
          providers={providers}
          verifyProvider={verifyProvider}
        />
      );
    }

    if (activeTab === "services") {
      return <AdminServices />;
    }

    if (activeTab === "bookings") {
      return <AdminBookings bookings={bookings} />;
    }

    if (activeTab === "reports") {
      return <ReportsSection bookings={bookings} />;
    }

    return (
      <AdminOverview
        users={users}
        providers={providers}
        bookings={bookings}
        setActiveTab={setActiveTab}
      />
    );
  };

  return (
    <>
      <Navbar />

      <main className="admin-dashboard-page">

        <div className="admin-mobile-header">

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

          <strong>Admin Dashboard</strong>

        </div>

        <div className="admin-dashboard-layout">

          {/* SIDEBAR */}

          <aside
            className={
              mobileMenu
                ? "admin-sidebar mobile-open"
                : "admin-sidebar"
            }
          >

            <div className="admin-user">

              <div className="admin-avatar">
                A
              </div>

              <div>
                <strong>Administrator</strong>
                <span>Platform Admin</span>
              </div>

            </div>

            <nav className="admin-nav">

              <button
                className={
                  activeTab === "overview"
                    ? "admin-nav-item active"
                    : "admin-nav-item"
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
                  activeTab === "users"
                    ? "admin-nav-item active"
                    : "admin-nav-item"
                }
                onClick={() => {
                  setActiveTab("users");
                  setMobileMenu(false);
                }}
              >
                <Users size={18} />
                Users
              </button>

              <button
                className={
                  activeTab === "providers"
                    ? "admin-nav-item active"
                    : "admin-nav-item"
                }
                onClick={() => {
                  setActiveTab("providers");
                  setMobileMenu(false);
                }}
              >
                <UserCheck size={18} />
                Providers
              </button>

              <button
                className={
                  activeTab === "services"
                    ? "admin-nav-item active"
                    : "admin-nav-item"
                }
                onClick={() => {
                  setActiveTab("services");
                  setMobileMenu(false);
                }}
              >
                <Briefcase size={18} />
                Services
              </button>

              <button
                className={
                  activeTab === "bookings"
                    ? "admin-nav-item active"
                    : "admin-nav-item"
                }
                onClick={() => {
                  setActiveTab("bookings");
                  setMobileMenu(false);
                }}
              >
                <CalendarDays size={18} />
                Bookings
              </button>

              <button
                className={
                  activeTab === "reports"
                    ? "admin-nav-item active"
                    : "admin-nav-item"
                }
                onClick={() => {
                  setActiveTab("reports");
                  setMobileMenu(false);
                }}
              >
                <BarChart3 size={18} />
                Reports
              </button>

            </nav>

            <div className="admin-sidebar-bottom">

              <button className="admin-nav-item">
                <Settings size={18} />
                Settings
              </button>

              <button
                className="admin-nav-item admin-logout"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>

          </aside>

          {/* MAIN */}

          <section className="admin-dashboard-main">

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

function AdminOverview({
  users,
  providers,
  bookings,
  setActiveTab,
}) {
  const pendingProviders = providers.filter(
    (provider) =>
      provider.status === "Pending"
  );

  return (
    <>
      <div className="admin-heading">

        <div>

          <p>PLATFORM ADMINISTRATION</p>

          <h1>Dashboard Overview</h1>

          <span>
            Monitor and manage the entire marketplace.
          </span>

        </div>

      </div>

      {/* STATISTICS */}

      <div className="admin-stats">

        <div className="admin-stat-card">

          <div className="admin-stat-icon blue">
            <Users size={20} />
          </div>

          <div>
            <span>Total Users</span>
            <strong>{users.length}</strong>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon purple">
            <UserCheck size={20} />
          </div>

          <div>
            <span>Providers</span>
            <strong>{providers.length}</strong>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon orange">
            <CalendarDays size={20} />
          </div>

          <div>
            <span>Total Bookings</span>
            <strong>{bookings.length}</strong>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon green">
            <IndianRupee size={20} />
          </div>

          <div>
            <span>Platform Revenue</span>
            <strong>₹1,650</strong>
          </div>

        </div>

      </div>

      {/* PROVIDER VERIFICATION */}

      <div className="admin-section">

        <div className="admin-section-heading">

          <div>
            <h2>Provider Verification</h2>

            <p>
              Providers waiting for verification
            </p>
          </div>

          <button
            onClick={() =>
              setActiveTab("providers")
            }
          >
            View All
          </button>

        </div>

        {pendingProviders.length > 0 ? (

          <div className="admin-provider-list">

            {pendingProviders.map(
              (provider) => (
                <ProviderVerificationCard
                  key={provider.id}
                  provider={provider}
                  onVerify={verifyProviderDummy}
                />
              )
            )}

          </div>

        ) : (

          <div className="admin-empty">
            <ShieldCheck size={30} />
            <p>
              All providers are verified.
            </p>
          </div>

        )}

      </div>

      {/* RECENT BOOKINGS */}

      <div className="admin-section">

        <div className="admin-section-heading">

          <div>
            <h2>Recent Bookings</h2>

            <p>
              Latest activity on the platform
            </p>
          </div>

          <button
            onClick={() =>
              setActiveTab("bookings")
            }
          >
            View All
          </button>

        </div>

        <div className="admin-booking-list">

          {bookings.slice(0, 4).map(
            (booking) => (
              <AdminBookingRow
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

function verifyProviderDummy() {
  console.log("Provider verified");
}


/* ==================================================
   USERS
================================================== */

function UsersSection({
  users,
  updateUserStatus,
}) {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="admin-heading">

        <div>

          <p>PLATFORM USERS</p>

          <h1>User Management</h1>

          <span>
            Manage customers and service providers.
          </span>

        </div>

      </div>

      <div className="admin-section">

        <div className="admin-search">

          <Search size={17} />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredUsers.map((user) => (

                <tr key={user.id}>

                  <td>
                    <strong>{user.name}</strong>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span className="role-badge">
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        user.status === "Active"
                          ? "status-badge active"
                          : "status-badge blocked"
                      }
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>

                    <button
                      className="table-action-button"
                      onClick={() =>
                        updateUserStatus(user.id)
                      }
                    >
                      {user.status === "Active" ? (
                        <Ban size={15} />
                      ) : (
                        <CheckCircle size={15} />
                      )}
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}


/* ==================================================
   PROVIDERS
================================================== */

function ProvidersSection({
  providers,
  verifyProvider,
}) {
  return (
    <>
      <div className="admin-heading">

        <div>

          <p>SERVICE PROVIDERS</p>

          <h1>Provider Management</h1>

          <span>
            Verify and monitor service providers.
          </span>

        </div>

      </div>

      <div className="admin-provider-grid">

        {providers.map((provider) => (

          <div
            className="admin-provider-card"
            key={provider.id}
          >

            <div className="admin-provider-top">

              <div className="admin-provider-avatar">
                {provider.name.charAt(0)}
              </div>

              <span
                className={
                  provider.status === "Verified"
                    ? "verification-badge verified"
                    : "verification-badge pending"
                }
              >
                {provider.status}
              </span>

            </div>

            <h3>{provider.name}</h3>

            <p>{provider.category}</p>

            <span className="provider-location">
              {provider.location}
            </span>

            <div className="provider-rating">
              ★ {provider.rating}
            </div>

            {provider.status === "Pending" && (
              <button
                className="verify-button"
                onClick={() =>
                  verifyProvider(provider.id)
                }
              >
                <ShieldCheck size={15} />
                Verify Provider
              </button>
            )}

          </div>

        ))}

      </div>
    </>
  );
}


/* ==================================================
   PROVIDER CARD
================================================== */

function ProviderVerificationCard({
  provider,
  onVerify,
}) {
  return (
    <div className="admin-provider-request">

      <div className="admin-provider-avatar">
        {provider.name.charAt(0)}
      </div>

      <div className="admin-provider-request-info">

        <strong>{provider.name}</strong>

        <span>
          {provider.category} • {provider.location}
        </span>

      </div>

      <button
        className="verify-button"
        onClick={onVerify}
      >
        Verify
      </button>

    </div>
  );
}


/* ==================================================
   SERVICES
================================================== */

function AdminServices() {
  const services = [
    {
      name: "Plumbing",
      providers: 18,
      bookings: 142,
      status: "Active",
    },
    {
      name: "Electrical",
      providers: 14,
      bookings: 118,
      status: "Active",
    },
    {
      name: "AC Repair",
      providers: 11,
      bookings: 95,
      status: "Active",
    },
    {
      name: "Cleaning",
      providers: 21,
      bookings: 164,
      status: "Active",
    },
    {
      name: "Painting",
      providers: 9,
      bookings: 54,
      status: "Active",
    },
    {
      name: "Appliance Repair",
      providers: 12,
      bookings: 76,
      status: "Active",
    },
  ];

  return (
    <>
      <div className="admin-heading">

        <div>

          <p>SERVICE CATEGORIES</p>

          <h1>Service Management</h1>

          <span>
            Manage marketplace service categories.
          </span>

        </div>

      </div>

      <div className="admin-service-grid">

        {services.map((service) => (

          <div
            className="admin-service-card"
            key={service.name}
          >

            <div className="admin-service-icon">
              <Briefcase size={20} />
            </div>

            <h3>{service.name}</h3>

            <div className="admin-service-stats">

              <span>
                <strong>
                  {service.providers}
                </strong>
                Providers
              </span>

              <span>
                <strong>
                  {service.bookings}
                </strong>
                Bookings
              </span>

            </div>

            <span className="service-status">
              {service.status}
            </span>

          </div>

        ))}

      </div>
    </>
  );
}


/* ==================================================
   BOOKINGS
================================================== */

function AdminBookings({ bookings }) {
  return (
    <>
      <div className="admin-heading">

        <div>

          <p>PLATFORM BOOKINGS</p>

          <h1>Booking Management</h1>

          <span>
            Monitor all customer-provider transactions.
          </span>

        </div>

      </div>

      <div className="admin-section">

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>
                <th>Customer</th>
                <th>Provider</th>
                <th>Service</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr key={booking.id}>

                  <td>{booking.customer}</td>

                  <td>{booking.provider}</td>

                  <td>{booking.service}</td>

                  <td>{booking.date}</td>

                  <td>
                    ₹{booking.amount}
                  </td>

                  <td>

                    <span
                      className={
                        booking.status ===
                        "Completed"
                          ? "status-badge active"
                          : "status-badge pending"
                      }
                    >
                      {booking.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}


/* ==================================================
   REPORTS
================================================== */

function ReportsSection({ bookings }) {
  const totalRevenue = bookings.reduce(
    (total, booking) =>
      total + booking.amount,
    0
  );

  return (
    <>
      <div className="admin-heading">

        <div>

          <p>ANALYTICS</p>

          <h1>Reports & Analytics</h1>

          <span>
            Understand marketplace performance.
          </span>

        </div>

      </div>

      <div className="report-cards">

        <div className="report-card">

          <span>Total Bookings</span>

          <strong>{bookings.length}</strong>

          <small>
            Platform-wide bookings
          </small>

        </div>

        <div className="report-card">

          <span>Total Revenue</span>

          <strong>
            ₹{totalRevenue}
          </strong>

          <small>
            Gross booking value
          </small>

        </div>

        <div className="report-card">

          <span>Completed Jobs</span>

          <strong>
            {
              bookings.filter(
                (booking) =>
                  booking.status ===
                  "Completed"
              ).length
            }
          </strong>

          <small>
            Successfully completed
          </small>

        </div>

        <div className="report-card">

          <span>Average Booking</span>

          <strong>
            ₹{Math.round(
              totalRevenue / bookings.length
            )}
          </strong>

          <small>
            Average transaction value
          </small>

        </div>

      </div>

      <div className="admin-section">

        <div className="admin-section-heading">

          <div>
            <h2>Booking Performance</h2>

            <p>
              Current marketplace activity
            </p>
          </div>

        </div>

        <div className="simple-chart">

          <div className="chart-bar bar-one">
            <span>Mon</span>
          </div>

          <div className="chart-bar bar-two">
            <span>Tue</span>
          </div>

          <div className="chart-bar bar-three">
            <span>Wed</span>
          </div>

          <div className="chart-bar bar-four">
            <span>Thu</span>
          </div>

          <div className="chart-bar bar-five">
            <span>Fri</span>
          </div>

          <div className="chart-bar bar-six">
            <span>Sat</span>
          </div>

          <div className="chart-bar bar-seven">
            <span>Sun</span>
          </div>

        </div>

      </div>
    </>
  );
}


/* ==================================================
   BOOKING ROW
================================================== */

function AdminBookingRow({ booking }) {
  return (
    <div className="admin-booking-row">

      <div className="admin-booking-icon">
        <CalendarDays size={18} />
      </div>

      <div className="admin-booking-info">

        <strong>{booking.customer}</strong>

        <span>
          {booking.service} •{" "}
          {booking.provider}
        </span>

      </div>

      <div className="admin-booking-date">
        {booking.date}
      </div>

      <div className="admin-booking-amount">
        ₹{booking.amount}
      </div>

      <span
        className={
          booking.status === "Completed"
            ? "status-badge active"
            : "status-badge pending"
        }
      >
        {booking.status}
      </span>

    </div>
  );
}

export default AdminDashboard;