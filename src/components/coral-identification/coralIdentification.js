import React from 'react';
import '../../assets/styles/CoralIdentification.css';

function CoralIdentification() {
  return (
      <div className="coral-identification">
        <h2>Coral identification</h2>
        <p>
          Upload an image of coral to quickly identify its species. Our advanced model is trained
          to recognize various coral species with high accuracy, helping researchers, divers, and
          enthusiasts alike.
        </p>
        <div className="upload-box">
          <div className="upload-area">
            <p style={{color:'GrayText'}}> 
              Drag and drop or click to upload your coral image. Our system will analyze it and
              provide you with detailed information about the coral species.<input type='file' accept="image/*" className="upload-box"></input>
            </p>
           
          </div>
        </div>
        <button className="upload-btn">Identify Coral</button>
        <ExploreCoralSpecies />
      </div>
  );
}

function ExploreCoralSpecies() {
  const sections = [
    {
      title: 'Discover New Species',
      description:
        'Explore and learn about the vast diversity of coral species from around the world. Our database is continuously updated to include newly discovered species.',
      link: '/newSpeciesPage',
    },
    {
      title: 'Understand Coral Ecosystems',
      description:
        'Gain insights into coral ecosystems, their roles in marine environments, and why protecting them is vital for our planet’s health.',
      link: '#',
    },
    {
      title: 'Support Coral Conservation',
      description:
        'Join global efforts in coral conservation by contributing your data and supporting initiatives that protect these vital marine organisms.',
      link: '#',
    },
  ];

  return (
    <div className="explore-coral-species">
      {sections.map((section, index) => (
        <div key={index} className="coral-section">
          <h3>{section.title}</h3>
          <p>{section.description}</p>
          <a href={section.link} className="learn-more-btn">
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
}

export default CoralIdentification;
