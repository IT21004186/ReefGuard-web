import React from "react";
import "../../assets/styles/coralConservation.css"; // Reference to the CSS file

const CoralConservation = () => {
  return (
    <div className="coral-conservation-page">
      {/* Header Section */}
      {/* <header className="header">
        <nav className="navbar">
          <div className="nav-links">
            <a href="#">Status</a>
            <a href="#">About</a>
            <a href="#">DO Menu</a>
          </div>
          <div className="user-icon">User</div>
        </nav>
      </header> */}

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Preserving Coral Reefs: A Lifeline for Marine Life and Coastal
          Communities
        </h1>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h2>25%</h2>
          <p>of Marine Life Relies on Coral Reefs</p>
        </div>
        <div className="stat-item">
          <h2>500</h2>
          <p>Million People Depend on Coral Reefs</p>
        </div>
        <div className="stat-item">
          <h2>$375</h2>
          <p>Billion in Annual Economic Value</p>
        </div>
        <div className="stat-item">
          <h2>30</h2>
          <p>Years of Coral Conservation</p>
        </div>
      </section>

      {/* Information Section */}
      <section className="information">
        <div className="info-box">
          <img src={require("../../assets/images/corals/ecological-importance.jpg")} alt="Coral Reefs" />
          <p>
            Coral reefs support around 25% of all marine life, providing
            essential habitat for fish and other species.
          </p>
        </div>
        <div className="info-box">
          <img src={require("../../assets/images/corals/ecological-importance.jpg")} alt="Divers" />
          <p>
            Over 500 million people rely on coral reefs for tourism, and
            protection from coastal erosion.
          </p>
        </div>
        <div className="info-box">
          <img src={require("../../assets/images/corals/ecological-importance.jpg")} alt="Coral Reefs" />
          <p>
            Coral reefs provide goods and services valued at $375 billion
            annually, benefiting industries.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action" loading="lazy">
        <h2>Together, We Can Protect Coral Reefs for Future Generations</h2>
        <p>
          The future of coral reefs depends on the actions we take today.
          Through innovative solutions, collective responsibility, and a shared
          commitment to conservation, we can safeguard these vital ecosystems
          and ensure they continue to thrive for generations to come. Join us in
          making a difference.
        </p>
      </section>

      {/* Footer Section */}
      <footer >
        <div className="footer-content">
          {/* <img className="footer-img" ></img> */}
          <div className="sitemap d-flex">
            <h4 className="col-4 flex-start">ReefGuard</h4>
            <ul className="col-4 flex-start">
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
            <ul className="col-4 flex-start">
              <li>
                <a href="#">Coral Identification</a>
              </li>
            </ul>
          </div>
          {/* <div className="resources">
            <h3>RESOURCES</h3>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="mailto:banukeysapol@gmail.com">
                  Contact us at banukeysapol@gmail.com
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default CoralConservation;
