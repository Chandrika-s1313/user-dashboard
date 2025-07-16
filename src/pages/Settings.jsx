import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function Settings() {
  const [notification, setNotification] = useState("Email Only");
  const [theme, setTheme] = useState("Light");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Settings saved successfully ✅");

    // Clear message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card shadow p-4">
        <h2 className="mb-3 text-primary">Settings</h2>
        <p className="mb-3">Update your preferences below:</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Notification Settings</label>
            <select
              className="form-select"
              value={notification}
              onChange={(e) => setNotification(e.target.value)}
            >
              <option>Email Only</option>
              <option>SMS Only</option>
              <option>Push Notifications</option>
              <option>None</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Theme</label>
            <select
              className="form-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option>Light</option>
              <option>Dark</option>
              <option>System Default</option>
            </select>
          </div>

          <motion.button
            type="submit"
            className="btn btn-success w-100"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Save Settings
          </motion.button>

          {message && (
            <div className="alert alert-success mt-3 text-center">
              {message}
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default Settings;
