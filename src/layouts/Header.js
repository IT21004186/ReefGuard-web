import React, { useEffect, useState} from "react";
import { auth, db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Logo from "./Logo";
import { ReactComponent as LogoWhite } from "../assets/images/logos/adminprowhite.svg";
import '../assets/styles/userProfile/DropdownMenu.css';
import user5 from "../assets/images/users/user5.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setUserDetails(docSnap.data());
            } else {
              console.log("User data not found");
            }
        } else {
            console.log("User is not logged in");
        }
      });
    };
      fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <Navbar
      style={{
        backgroundColor: "#134B70",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        paddingBottom: "10px",
      }}
      light
      expand="md"
      className="fix-header"
    >
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo />
        </div>
        <NavbarBrand href="/">
          <LogoWhite className="d-lg-none" />
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          {/* Add your navigation links here */}
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="custom-dropdown">
          <DropdownToggle color="transparent">
            <img
              src={userDetails?.photo || user5}
              alt="profile"
              className="rounded-circle"
              width="35"
            />
          </DropdownToggle>
          <DropdownMenu className="custom-dropdown-menu">
            <div className="dropdown-header">
              <img
                src={userDetails?.photo || user5}
                alt="profile-avatar"
                className="rounded-circle"
                width="45"
              />
              <span className="dropdown-username">{userDetails?.firstName}</span>
            </div>
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/profile">
              My Account
            </DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem id="dropdownItem-logout-btn" onClick={handleLogout}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
