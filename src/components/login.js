// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "./firebase";
// import { toast } from "react-toastify";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in Successfully");
//       window.location.href = "/dashboard";
//       toast.success("User logged in Successfully", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.log(error.message);

//       toast.error(error.message, {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Login</h3>

//       <div className="mb-3">
//         <label>Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </div>
//       <p className="forgot-password text-right">
//         New user <a href="/register">Register Here</a>
//       </p>
//     </form>
//   );
// }

// export default Login;

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import BannerImg from '../assets/images/bg/background-img1.jpg';
import { predict } from "../service/coral-disease-identification/CoralDisease";

const inputClass = "w-full p-2 border border-border rounded-md";
const buttonClass = "w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-md";
const textClass = "text-sm text-muted-foreground";
const linkClass = "text-primary hover:underline";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleImageChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
      try {
          const response = await predict(file);
          console.log('Successfully predicted:', response);
      } catch (error) {
          console.error('Failed to predict image:', error);
      }
  }
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    

      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/dashboard";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-primary">REEFGUARD</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={inputClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={buttonClass}>
            SIGN IN
          </button>
          <div className="flex items-center justify-center">
            <p className={textClass}>
              Don't have an account? <a href="/register" className={linkClass}>Sign up</a>
            </p>
          </div>
          <div>
            <h1>Upload an Image</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        </form>
      </div>
      <div className="hidden lg:block flex-1 bg-cover bg-center" style={{backgroundImage: BannerImg }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h2 className="text-4xl font-bold text-white">Welcome to REEFGUARD</h2>
          <p className="text-lg text-muted-foreground">Early Warning System in Coral Conservation</p>
        </div>
      </div>
    </div>
  );
}

export default Login;