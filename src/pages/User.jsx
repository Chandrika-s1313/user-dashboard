import { useParams } from "react-router-dom"
import React from "react";
import { motion } from "framer-motion";


function User() {
    const { id, name } = useParams();
    return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2>User Details</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
    </motion.div>
  );
}

export default User;