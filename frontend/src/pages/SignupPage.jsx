import React from "react";
import { Loader, Lock, Mail, User } from "lucide-react";
import { motion } from "framer-motion";

export const SignupPage = () => {
  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <main className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create An Account
        </h2>

        <form onSubmit={handleSignup}>
          
        </form>
      </main>
    </motion.div>
  );
};
