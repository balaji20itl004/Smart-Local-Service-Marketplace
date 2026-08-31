import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Briefcase,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [role, setRole] = useState("customer");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please complete all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Temporary frontend registration
    localStorage.setItem(
      "serviceHubUser",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
        role: role,
      })
    );

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <main className="auth-page">

        <div className="auth-container register-container">

          <div className="auth-header">

            <div className="auth-logo">
              S
            </div>

            <h1>Create your account</h1>

            <p>
              Join ServiceHub and get started
            </p>

          </div>

          {/* Role Selection */}

          <div className="role-selection">

            <button
              type="button"
              className={
                role === "customer"
                  ? "role-card active"
                  : "role-card"
              }
              onClick={() => setRole("customer")}
            >

              <User size={22} />

              <div>
                <strong>Customer</strong>
                <span>
                  Find and book services
                </span>
              </div>

            </button>

            <button
              type="button"
              className={
                role === "provider"
                  ? "role-card active"
                  : "role-card"
              }
              onClick={() => setRole("provider")}
            >

              <Briefcase size={22} />

              <div>
                <strong>Service Provider</strong>
                <span>
                  Offer your services
                </span>
              </div>

            </button>

          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <div className="auth-form-group">

              <label>
                Full Name
              </label>

              <div className="auth-input">

                <User size={18} />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="auth-form-group">

              <label>
                Email Address
              </label>

              <div className="auth-input">

                <Mail size={18} />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="auth-form-group">

              <label>
                Password
              </label>

              <div className="auth-input">

                <Lock size={18} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>

            <div className="auth-form-group">

              <label>
                Confirm Password
              </label>

              <div className="auth-input">

                <Lock size={18} />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

              </div>

            </div>

            <label className="terms-checkbox">

              <input type="checkbox" required />

              <span>
                I agree to the ServiceHub terms and
                privacy policy.
              </span>

            </label>

            <button
              type="submit"
              className="auth-submit"
            >
              Create Account
            </button>

          </form>

          <p className="auth-switch">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Register;