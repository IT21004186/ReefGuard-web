import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../assets/styles/../styles/newSpeciesPage.css"; // Update the CSS file reference
import staghornCoralImage from "../../assets/images/corals/staghorn-overview.jpg";
import staghornCoralImage2 from "../../assets/images/corals/staghorn-gallery-1.jpg";
import staghornCoralImage3 from "../../assets/images/corals/staghorn-gallery-2.jpg";
import staghornCoralImage4 from "../../assets/images/corals/staghorn-gallery-3.jpg";

const NewSpeciesPage = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <div className="new-species-page">
      {/* Banner Section */}
      <div className="banner-section">
      <h1 style={{ fontWeight: 'bold' }}>Staghorn Coral</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <button className="active-tab" onClick={() => handleNavigation("/stagHornCoralPage")}>
          Staghorn Coral
        </button>
        <button  onClick={() => handleNavigation("/newSpeciesPage")}>Cauliflower Coral</button>
        <button onClick={() => handleNavigation("/poritesCoralPage")}>Porites Coral</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Coral Image */}
        <div className="coral-image">
          <img src={staghornCoralImage} alt="Cauliflower Coral" />
        </div>

        {/* Overview Section */}
        <div className="overview-section">
          <h2 className="species-heading-h2">Overview</h2>
          <div className="overview-container">
            <p>
              Cauliflower coral, scientifically known as{" "}
             <a href="https://en.wikipedia.org/wiki/Pocillopora_meandrina"> <em>Pocillopora meandrina</em> </a>, is a species of reef-building
              coral that plays a vital role in marine ecosystems. It is commonly
              found in the Indo-Pacific region, including areas such as the
              Hawaiian Islands, the Red Sea, and the Great Barrier Reef. This
              coral species thrives in a variety of environments, from shallow
              reef flats to deeper reef slopes, often forming dense, bushy
              colonies. Named for its distinctive appearance,{" "}
              <em>Pocillopora meandrina</em> resembles the shape and texture of
              a cauliflower head, with its tightly packed, knobby branches. The
              colonies are usually green, pink, yellow, or brown, and the
              coloration is heavily influenced by the symbiotic algae
              (zooxanthellae) that live within the coral tissues. These algae
              provide the coral with energy through photosynthesis, giving the
              coral its vibrant hues and contributing to its overall health and
              resilience.
            </p>
            <p>
              Cauliflower coral is a hermaphroditic species, capable of both
              asexual and sexual reproduction. During its reproductive cycle,
              the coral releases eggs and sperm into the water, where external
              fertilization occurs. Once fertilized, the larvae settle on the
              reef and begin to grow, contributing to the formation and
              expansion of coral reefs. This coral species is particularly
              resilient, capable of withstanding variations in temperature and
              salinity, although it is still vulnerable to environmental
              stressors such as coral bleaching, pollution, and habitat
              destruction.
            </p>
            <p>
              Cauliflower coral serves as an important habitat for many marine
              species, offering shelter, food, and breeding grounds for fish,
              invertebrates, and other reef-dwelling organisms. In addition to
              its ecological importance, cauliflower coral is a popular species
              in the marine aquarium trade, admired for its unique shape and
              bright coloration. However, overharvesting and environmental
              degradation have placed pressure on wild populations, leading to
              concerns about the sustainability of this species in the wild.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <h2 className="species-heading">Gallery</h2>
          <div className="gallery">
            <img src={staghornCoralImage2} alt="Cauliflower Coral 1" />
            <img src={staghornCoralImage3} alt="Cauliflower Coral 2" />
            <img src={staghornCoralImage4} alt="Cauliflower Coral 3" />
          </div>
        </div>

        {/* Physical Characteristics Section */}
       <div className="d-flex half-section-para">
       <div className="physical-characteristics-section  col-6">
          <h2 className="species-heading">Physical Characteristics</h2>
          <p>
            Cauliflower coral forms compact, bushy colonies with tightly packed
            branches. These branches have knobby or rounded tips, giving the
            coral its characteristic cauliflower-like appearance. The branches
            are usually thick, with a rugged surface texture. The color of
            cauliflower coral varies widely, with hues ranging from pink,
            yellow, and brown to green. This coloration is influenced by the
            symbiotic zooxanthellae algae living within the coral tissues, which
            contribute to the coral's energy through photosynthesis.
          </p>
        </div>
        <img className="col-6 Physical-img"
            src={require("../../assets/images/corals/staghorn-physical-characteristics-1.jpg")}
            alt="Physical Characteristics"
          />
       </div>

        {/* Ecological Importance Section */}
        <div className="d-flex Ecological-section-para">
        <img className="col-6 Physical-img"
            src={require("../../assets/images/corals/staghorn-physical-characteristics-2.jpg")}
            alt="Ecological Importance"
          />
        <div className="ecological-importance-section col-6">
          <h2 className="species-heading-para">Ecological Importance</h2>
          <p>
            Like other coral species, cauliflower coral plays a crucial role in
            reef building and maintenance. Its dense, branching structure
            contributes to the physical complexity of coral reefs, providing
            habitat and shelter for a wide range of marine organisms, including
            fish, invertebrates, and other coral species. The complex,
            interlocking branches of cauliflower coral offer protection and
            breeding grounds for various marine species.
          </p>
        </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          
        </div>
      </footer>
    </div>
  );
};

export default NewSpeciesPage;
