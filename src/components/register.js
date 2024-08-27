import React from "react";
import RegisterForm from "./RegistrationForm";
import HeroSection from "./HeroSection";
import '../assets/styles/RegisterForm.css';

const Register = () => {
  return (
    <div className="register-container">
      <RegisterForm />
      <HeroSection />
    </div>
  );
};

export default Register;