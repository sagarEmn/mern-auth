import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault;
  }

  return (
    <motion.section>
      <header>Login</header>
    </motion.section>
  );
};

export default LoginPage;
