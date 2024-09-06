// CoralIdentification.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/CoralIdentification.css';
import { identifyCorals } from "../../services/coral-identification/CoralIdentification";

function CoralIdentification() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [predictedImage, setPredictedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleIdentifyCoral = async () => {
        if (selectedImage) {
            try {
                const response = await identifyCorals(selectedImage); // Call the service to predict corals
                setPredictedImage(`data:image/png;base64,${response.data}`); // Store the base64 image
            } catch (error) {
                console.error('Failed to identify corals:', error);
            }
        }
    };

    return (
        <div className="coral-identification">
            <h2>Coral Identification</h2>
            <p>
                Upload an image of coral to quickly identify its species. Our advanced model is trained
                to recognize various coral species with high accuracy, helping researchers, divers, and
                enthusiasts alike.
            </p>
            <div className="upload-box">
                <div className="upload-area">
                    <p style={{ color: 'GrayText' }}>
                        Drag and drop or click to upload your coral image. Our system will analyze it and
                        provide you with detailed information about the coral species.
                        <input type="file" accept="image/*" className="upload-box" onChange={handleImageChange} />
                    </p>
                </div>
            </div>
            <button className="upload-btn" onClick={handleIdentifyCoral}>Identify Coral</button>

            {predictedImage && (
                <div className="predicted-image">
                    <h3>Predicted Coral</h3>
                    <img src={predictedImage} alt="Predicted Coral" />
                </div>
            )}

            <ExploreCoralSpecies />
        </div>
    );
}

function ExploreCoralSpecies() {
    const navigate = useNavigate();

    const sections = [
        {
            title: 'About the Coral Species',
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

    const handleLearnMore = (link) => {
        if (link !== '#') {
            navigate(link); // Use react-router navigation
        }
    };

    return (
        <div className="explore-coral-species">
            {sections.map((section, index) => (
                <div key={index} className="coral-section">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                    <button onClick={() => handleLearnMore(section.link)} className="learn-more-btn">
                        Learn More
                    </button>
                </div>
            ))}
        </div>
    );
}

export default CoralIdentification;
