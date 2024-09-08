import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";



const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-graph-up",
  },
  {
    title: "Sea Water Pollution",
    href: "/seawaterpollutionidentifier",
    icon: "bi bi-droplet-half",
  },
  {
    title: "Coral Identification",
    href: "/coralIdentification",
    icon: "bi bi-search",
  },
  {
    title: "Disease Identification",
    href: "/diseaseIdentifier",
    icon: "bi bi-radioactive",
  },
  {
    title: "LifeExpectancy Level",
    href: "/CoralLifeExpectancyPrediction",
    icon: "bi bi-heart-pulse",
  },
  {
    title: "About",
    href: "/CoralTable",
    icon: "bi bi-qr-code",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav" style={{height: '86vh'}}>
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
