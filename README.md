# AARV Train Booking System

Full-stack MERN train booking system with Selenium automation testing.

---

## Overview

AARV Train Booking System is a modern web-based railway ticket booking application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The system allows users to register, log in, view trains, and book tickets through an interactive and user-friendly interface.

The project also demonstrates software testing concepts using Selenium IDE and Selenium WebDriver for automation testing.

---

## Features

### User Features
- User Login & Signup
- Train Listing
- Ticket Booking
- Dynamic Ticket Pricing
- Account Section
- Responsive UI

### Admin Features
- View All Bookings
- Manage Booking Data

### Testing Features
- Selenium IDE Automation
- Python Selenium Automation
- Automated Login Validation
- Navigation Testing
- Alert Handling

---

## Technology Stack

### Frontend
- React.js
- CSS3
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Automation Testing
- Selenium IDE
- Selenium WebDriver
- Python

---

## System Architecture

The project follows a three-tier architecture:

1. Presentation Layer (Frontend)
2. Application Layer (Backend APIs)
3. Database Layer (MongoDB)

The frontend communicates with the backend through REST APIs, while MongoDB stores user and booking data.

---

## Project Structure

```bash
aarv-train-booking-system/
│
├── client/                 # React Frontend
│
├── server/                 # Node.js Backend
│
├── tests/                  # Selenium Automation Scripts
│
├── README.md
│
└── package.json
```

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/aarv-train-booking-system.git
cd aarv-train-booking-system
```

---

## Frontend Setup

```bash
cd client
npm install
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

## Backend Setup

Open another terminal:

```bash
cd server
npm install
node index.js
```

---

## Database Setup

Make sure MongoDB is installed and running locally.

Default MongoDB URL:

```bash
mongodb://127.0.0.1:27017/
```

---

# Selenium Automation Testing

## Create Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## Install Selenium

```bash
pip install selenium
```

---

## Run Automation Script

```bash
python test_system.py
```

---

## Automated Test Cases

| Test Case ID | Scenario | Status |
|--------------|----------|--------|
| TC_001 | Valid Login | Pass |
| TC_002 | Invalid Login | Pass |
| TC_003 | Navigation Testing | Pass |
| TC_004 | Booking Workflow | Pass |

---

## Selenium Features Implemented

- Login Automation
- URL Validation
- Alert Handling
- Dynamic Element Handling
- Explicit Waits
- Pass/Fail Validation

---

## Sample Test Output

```bash
===== TEST RESULTS =====
Login Test: PASS
Booking Page Navigation: PASS
Booking Test: PASS
```

---

## Modules

### Authentication Module
- Login
- Signup
- User Validation

### Booking Module
- Train Selection
- Journey Details
- Dynamic Pricing

### Account Module
- User Information
- Booking History

### Admin Module
- View All Bookings
- Manage Records

---

## Defects Identified & Fixed

### Login Redirection Issue
- Fixed incorrect routing logic.

### Selenium Selector Instability
- Replaced unstable selectors with XPath and IDs.

### Alert Popup Interruption
- Added automatic alert handling.

### User Data Visibility Issue
- Implemented account-specific booking filtering.

---

## Future Scope

- Payment Gateway Integration
- Real-Time Train Availability
- Ticket Cancellation
- Mobile Application
- Advanced Security Features
- Full Automation Coverage

---

## Learning Outcomes

This project helped in understanding:

- MERN Stack Development
- Selenium Automation Testing
- Functional Testing
- Automation Script Writing
- Debugging & Defect Analysis
- Web Application Testing

---

## Contributors

- Arin
- Reshma
- Anshika
- Vedika

---

## References

- React Documentation
- Node.js Documentation
- MongoDB Documentation
- Selenium Documentation

---

## License

This project is developed for educational and academic purposes only.

---

## GitHub Commands

```bash
git init
git add .
git commit -m "Initial Commit - AARV Train Booking System"
git branch -M main
git remote add origin https://github.com/your-username/aarv-train-booking-system.git
git push -u origin main
```
