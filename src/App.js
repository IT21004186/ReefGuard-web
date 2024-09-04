import { useEffect, useState } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { auth } from "./components/firebase";
import Themeroutes from "./routes/Router";
import Login from "./components/login";
import Register from "./components/register";

import CoralLifeExpectancyPrediction from "./components/coral-lifeExpectancy/coralLifeExpectancyPrediction";
import MoreFacts from "./components/coral-lifeExpectancy/MoreFacts";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const routing = useRoutes([
    { path: "/", element: user ? <Navigate to="/starter" /> : <Navigate to="/login" /> },
    { path: "/login", element: user ? <Navigate to="/starter" /> : <Login /> },
    { path: "/register", element: user ? <Navigate to="/starter" /> : <Register /> },

    { path: "/corallifeexpectancy", element: <CoralLifeExpectancyPrediction /> }, // Route for CoralLifeExpectancyPrediction
    { path: "/morefacts", element: <MoreFacts /> }, // Route for MoreFacts

    ...Themeroutes
  ]);

  return <div className="dark">{routing}</div>;
};

export default App;