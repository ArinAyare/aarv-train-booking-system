import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import My from "./pages/My";
import Admin from "./pages/Admin";
import Account from "./pages/Account";

export default function App() {
  return (
    <BrowserRouter>

      {/* 🔝 NAVBAR */}
      <Navbar />

      {/* 📄 ROUTES */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking/:name/:price" element={<Booking />} />
        <Route path="/my" element={<My />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      {/* 🔻 FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}