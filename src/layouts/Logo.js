// import { ReactComponent as LogoDark } from "../assets/images/logos/adminpro.svg";
import AppLogo from '../assets/images/logos/app-logo2.png';
import '../assets/styles/Header.css';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={AppLogo} alt="Reefguard Logo" className="app-logo2" />
    </Link>
  );
};

export default Logo;
