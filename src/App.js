// import { useRoutes } from "react-router-dom";
// import Themeroutes from "./routes/Router";

// const App = () => {
//   const routing = useRoutes(Themeroutes);

//   return <div className="dark">{routing}</div>;
// };

// export default App;

//---------------- login-Auth app.js structure ------------------------------

import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile/profile";
import DiseaseIdentifier from "./components/disease-identification/diseaseIdentifier";
import FullLayout from "./layouts/FullLayout";
// import About from "./views/About";
import Alerts from "./views/ui/Alerts";
import Badges from "./views/ui/Badges";
import Buttons from "./views/ui/Buttons";
import Cards from "./views/ui/Cards";
import Grid from "./views/ui/Grid";
import Tables from "./views/ui/Tables";
import Forms from "./views/ui/Forms";
import Breadcrumbs from "./views/ui/Breadcrumbs";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <Router>
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/dashboard" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/dashboard" element={<FullLayout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/diseaseIdentifier" element={<DiseaseIdentifier />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/badges" element={<Badges />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/grid" element={<Grid />} />
              <Route path="/table" element={<Tables />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/breadcrumbs" element={<Breadcrumbs />} />
            </Routes>
    </Router>
  );
}

export default App;