import React from "react";

import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.div
      className="container text-center mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-danger display-1">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
    </motion.div>
  );
}

export default NotFound;

