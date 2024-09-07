import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../assets/styles/Login.css';
import AppLogo from '../assets/images/logos/app-logo2.png';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user ID in localStorage
    localStorage.setItem("uid", user.uid);

    // Log success message
    console.log("User logged in Successfully");

    // Navigate to the desired route
    navigate("/starter");

    // Show success toast notification
    toast.success("User logged in Successfully", {
      position: "top-center",
    });
  } catch (error) {
    // Log the error message
    console.log(error.message);

    // Show error toast notification
    toast.error("Failed to login: " + error.message, {
      position: "bottom-center",
    });
  }
};

  return (
    <div className="login-form-container">
        <img src={AppLogo} alt="Reefguard Logo" className="app-logo" />
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">
          SIGN IN
        </button>
        <p className="signup-text">
          <span>Don't have an account? </span> 
          <Link to="/register" className="signup-link">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;