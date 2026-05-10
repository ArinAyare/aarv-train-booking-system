import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const nav = useNavigate();

  return (
    <div style={{ background: "#f3f4f6", borderBottom: "1px solid #ccc" }}>

      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 30px",
          position: "relative"
        }}
      >

        {/* LEFT (LOGO) */}
        <img
          src={logo}
          alt="logo"
          style={{ height: "100px", width: "100px" }}
        />

        {/* CENTER TITLE */}
        <h1
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          AARV Train Booking System
        </h1>

        {/* RIGHT BUTTONS */}
        <div>
          <button
            onClick={() => nav("/")}
            style={{
              background: "#2563eb", // BLUE
              color: "white",
              padding: "8px 16px",
              marginRight: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500"
            }}
          >
            Login
          </button>
 
          <button
            onClick={() => nav("/signup")}
            style={{
              background: "#22c55e", // GREEN
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500"
            }}
          >
            Signup
          </button>
        </div>
      </div>

      {/* NAV MENU */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px", // 👈 spacing between buttons
          padding: "15px",
        }}
      >
        <button
          onClick={() => nav("/home")}
          style={navBtn}
        >
          Home
        </button>

        <button
          onClick={() => nav("/my")}
          style={navBtn}
        >
          Bookings
        </button>

        <button
          onClick={() => nav("/account")}
          style={navBtn}
        >
          Account
        </button>
      </div>
    </div>
  );
}

/* 🔥 NAV BUTTON STYLE */
const navBtn = {
  background: "#d1d5db",
  padding: "10px 28px",   // 👈 bigger buttons
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "500",
};