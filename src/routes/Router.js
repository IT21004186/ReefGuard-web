import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const Login = lazy(() => import("../components/login.js"));
const Register = lazy(() => import("../components/register.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Profile = lazy(() => import("../components/profile/profile.js"));
const DiseaseIdentifier = lazy(() => import("../components/disease-identification/diseaseIdentifier.js"));
const CoralIdentification = lazy(() => import("../components/coral-identification/coralIdentification.js"));
const PollutionPredictor = lazy(() => import("../components/seaWater-pollution/seawaterpollutionIdentifier.js"));
const CoralLifeExpectancyPrediction = lazy(() => import("../components/coral-lifeExpectancy/coralLifeExpectancyPrediction.js"));
const Facts = lazy(() => import("../components/coral-lifeExpectancy/Pages/Facts.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "starter", exact: true, element: <Starter /> },
      { path: "profile", exact: true, element: <Profile /> },
      { path: "seawaterpollutionidentifier", exact: true, element: <PollutionPredictor /> },
      { path: "coralIdentification", exact: true, element: <CoralIdentification /> },
      { path: "diseaseIdentifier", exact: true, element: <DiseaseIdentifier /> },
      { path: "coralLifeExpectancyPrediction", exact: true, element: <CoralLifeExpectancyPrediction /> },
      { path: "facts", exact: true, element: <Facts /> },
      { path: "about", exact: true, element: <About /> },
      { path: "alerts", exact: true, element: <Alerts /> },
      { path: "badges", exact: true, element: <Badges /> },
      { path: "buttons", exact: true, element: <Buttons /> },
      { path: "cards", exact: true, element: <Cards /> },
      { path: "grid", exact: true, element: <Grid /> },
      { path: "table", exact: true, element: <Tables /> },
      { path: "forms", exact: true, element: <Forms /> },
      { path: "breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/", element: <Navigate to="/starter" /> },


  

    ],
  },
];

export default ThemeRoutes;