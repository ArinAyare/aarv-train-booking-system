import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (email === "AARV" && password === "2026") {
      localStorage.setItem("admin", "true");
      nav("/admin");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5001/api/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      nav("/home");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={container}>
      <div style={box}>
        <h2>Login</h2>

        {/* EMAIL INPUT */}
        <input
        id="emailInput"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
        id="passwordInput"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        />

<button id="loginBtn" onClick={login}>
  Login
</button>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70vh",
};

const box = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};