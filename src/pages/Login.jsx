import React, { use } from "react";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "1234") {
      setIsLoggedIn(true);
      setError("");
      navigate("/");
    } else {
      setError("Invalid Credentials. Try again.");
    }
  };

  return (
    <motion.div
      className="d-flex justify-content-center align-items-center vh-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border p-4 rounded shadow" style={{ minWidth: "400px" }}>
        <h2 className="text-center mb-4">Welcome to the SSimple User Dashboard </h2>
        <h3 className="text-center mb-4" style={{color:"red"}}>Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <motion.button
            type="submit"
            className="btn btn-primary w-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default Login;
