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
          <h2>7%</h2>
          <p>of Global Coral Reefs are in Sri Lanka.</p>
        </div>
        <div className="stat-item">
          <h2>2M</h2>
          <p>Million Sri Lankans Depend on Coral Reefs.</p>
        </div>
        <div className="stat-item">
          <h2>140M</h2>
          <p>Million Annual Coral Reef Tourism Revenue.</p>
        </div>
        <div className="stat-item">
          <h2>5</h2>
          <p>Years of Coral Restoration Efforts.</p>
        </div>
      </section>

      {/* Information Section */}
      <section className="information">
        <div className="info-box">
          <img
            src={require("../../assets/images/corals/Marinelife-card-img-1.jpg")}
            alt="Coral Reefs"
          />
          <p>
            Sri Lanka’s coral reefs are home to over 200 species of coral,
            supporting rich marine biodiversity and sustaining local fish
            populations.
          </p>
        </div>
        <div className="info-box">
          <img
            src={require("../../assets/images/corals/Marinelife-card-img-2.jpg")}
            alt="Divers"
          />
          <p>
            Coral reefs protect Sri Lanka’s coastline from erosion, safeguarding
            communities, and minimizing storm damage to over 1,000 km of
            shoreline.
          </p>
        </div>
        <div className="info-box">
          <img
            src={require("../../assets/images/corals/Marinelife-card-img-3.jpg")}
            alt="Coral Reefs"
          />
          <p>
            Tourism centered around coral reefs in Sri Lanka generates
            approximately $140 million per year, providing crucial income for
            local communities.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action" loading="lazy">
        <div className="d-flex half-section-para">
       <div className="physical-characteristics-section  col-6">
          <h2 style={{textAlign:"left"}}>Together, We Can Protect Coral Reefs for Future Generations</h2>
          <p style={{textAlign:"left", width:"80%"}}>
          The future of coral reefs depends on the actions we take today.
          Through innovative solutions, collective responsibility, and a shared
          commitment to conservation, we can safeguard these vital ecosystems
          and ensure they continue to thrive for generations to come. Join us in
          making a difference.
          </p>
        </div>
        <img className="col-6 Physical-img" style={{borderRadius:"8px"}}
            src={require("../../assets/images/corals/group-kids-friends.jpg")}
            alt="Physical Characteristics"
          />
       </div>
        
      </section>

      {/* Footer Section */}
      <footer>
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
