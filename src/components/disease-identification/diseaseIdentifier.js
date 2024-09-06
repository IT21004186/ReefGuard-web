import React, { useState } from "react";
import { predict } from "../../services/coral-disease-identification/CoralDisease";

function DiseaseIdentifier() {

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const response = await predict(file);
                console.log('Successfully predicted:', response);
            } catch (error) {
                console.error('Failed to predict image:', error);
            }
        }
    };

    return (
        <div>
            <div>
                <h1>Upload an Image To Detect an Coral Disease</h1>
                <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
        </div>
    );

}

export default DiseaseIdentifier;