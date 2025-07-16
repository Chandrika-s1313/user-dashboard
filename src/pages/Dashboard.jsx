import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const users = [
    { id: 1, name: "Subhankar" },
    { id: 2, name: "Chandrika" },
    { id: 3, name: "Satish" },
    { id: 4, name: "Sneha" },
    { id: 5, name: "Neha" },
    { id: 6, name: "Karthik" },
    { id: 7, name: "Arjun" },
    { id: 8, name: "Ravi" },
];


function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      className="container mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4">User Dashboard</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ul className="list-group">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{user.name}</span>
              <Link to={`/user/${user.id}/${user.name}`} className="btn btn-sm btn-outline-primary">
                View
              </Link>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">No users found.</li>
        )}
      </ul>
    </motion.div>
  );
}

export default Dashboard;
