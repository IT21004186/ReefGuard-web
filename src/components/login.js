import React from "react";
import LoginForm from "./LoginForm";
import HeroSection from "./HeroSection";
import '../assets/styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <LoginForm />
      <HeroSection />
    </div>
  );
};

export default Login;