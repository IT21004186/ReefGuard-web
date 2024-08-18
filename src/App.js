import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
};

export default App;

//---------------- login-Auth app.js structure ------------------------------

// import React, { useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "./components/login";
// import SignUp from "./components/register";
// import Profile from "./components/profile/profile";
// import FullLayout from "./layouts/FullLayout";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useState } from "react";
// import { auth } from "./components/firebase";

// function App() {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   });

//   return (
//     <Router>
//       <div className="App">
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route
//                 path="/"
//                 element={user ? <Navigate to="/home" /> : <Login />}
//               />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<SignUp />} />
//               <Route path="/home" element={<FullLayout />} />
//               <Route path="/profile" element={<Profile />} />
//             </Routes>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
