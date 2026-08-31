import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "../src/styles/navbar.css";
import ProviderProfile from "./pages/ProviderProfile";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerDashboard from "./pages/CustomerDashboard";
import Services from "./pages/Services";
import AdminDashboard from "./pages/AdminDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<Services />}
        />
        <Route
  path="/provider-dashboard"
  element={<ProviderDashboard />}
/>

        <Route
  path="/providers/:id"
  element={<ProviderProfile />}
/>

<Route
  path="/booking/:id"
  element={<Booking />}
/>

<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/dashboard"
  element={<CustomerDashboard />}
/>

<Route
  path="/admin-dashboard"
  element={<AdminDashboard />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;