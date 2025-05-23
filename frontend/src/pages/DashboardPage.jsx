import React from "react";

import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date.js";

const DashboardPage = () => {
  // extract/desctructure "user" and "logout" from the object returned by useAuthStore()
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
        Dashboard
      </h2>

      <div className="space-y-6">
        <motion.div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-green-400 mb-3">
            Profile Information
          </h3>
          <p className="text-gray-300">Name: </p>
          <p className="text-gray-300">Email: </p>
        </motion.div>
        <motion.div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
          <h3 className="text-xl text-green-400 mb-3">Account Activity:</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardPage;
