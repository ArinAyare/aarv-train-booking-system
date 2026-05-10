const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const QRCode = require("qrcode");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// Prevent caching (important for Selenium stability)
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

// ================= DATABASE =================
mongoose.connect("mongodb://127.0.0.1:27017/aarv", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ================= MODELS =================
const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
});

const Booking = mongoose.model("Booking", {
  user: String, // email
  train: String,
  source: String,
  destination: String,
  date: String,
  time: String,
  class: String,
  price: Number,
  qr: String,
});

// ================= AUTH =================

// ✅ Signup (multi-user safe)
app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({ username, email, password });

    res.json({
      success: true,
      username: user.username,
      email: user.email,
    });

  } catch {
    res.status(500).json({ success: false });
  }
});


// ✅ Login (works for ALL users)
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.json({
      success: true,
      username: user.username,
      email: user.email,
    });

  } catch {
    res.status(500).json({ success: false });
  }
});


// ================= BOOKING =================

// ✅ Create booking + QR
app.post("/api/book", async (req, res) => {
  try {
    const {
      user,
      train,
      source,
      destination,
      date,
      time,
      class: cls,
      price,
    } = req.body;

    const qr = await QRCode.toDataURL(
      `${train} | ${source} → ${destination} | ${date} ${time}`
    );

    const booking = await Booking.create({
      user,
      train,
      source,
      destination,
      date,
      time,
      class: cls,
      price,
      qr,
    });

    res.json({ success: true, booking });

  } catch {
    res.status(500).json({ success: false });
  }
});


// ✅ User-specific bookings
app.get("/api/bookings/:user", async (req, res) => {
  try {
    const data = await Booking.find({ user: req.params.user });
    res.json(data);
  } catch {
    res.status(500).json([]);
  }
});


// ✅ Admin - all bookings
app.get("/api/admin", async (req, res) => {
  try {
    const data = await Booking.find();
    res.json(data);
  } catch {
    res.status(500).json([]);
  }
});


// ================= SERVER =================

// ✅ Auto-create demo user (for Selenium/demo safety ONLY)
app.listen(5001, async () => {
  console.log("🚀 Server running on http://localhost:5001");

  const exists = await User.findOne({ email: "arin@gmail.com" });

  if (!exists) {
    await User.create({
      username: "Arin",
      email: "arin@gmail.com",
      password: "12345",
    });

    console.log("✅ Test user ready (arin@gmail.com / 12345)");
  }
});