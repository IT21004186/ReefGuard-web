import React from "react";
import { useEffect, useState } from "react";
import { predict } from "../../services/coral-disease-identification/CoralDisease";
import '../../assets/styles/diseaseIdentifier.css';
import { storage, db, auth } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, Timestamp, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";

function DiseaseIdentifier() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [file, setFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [user, setUser] = useState(null);

    // Get the authenticated user
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                console.log("No user logged in");
            }
        });
    }, []);

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

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); // Show image preview
            setFile(file); // Save the file to be submitted later
        }
    };

    const handleIdentifyCoral = async () => {
        if (file && user) {
            try {
                // Step 1: Upload image to Firebase Storage
                const storageRef = ref(storage, `coral-images/${file.name}`);
                const snapshot = await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(snapshot.ref); // Get the file URL

                // Step 2: Send the image to the prediction API
                const response = await predict(file);
                setPrediction(response.data.predict);

                // Step 3: Store prediction details in Firestore
                await addDoc(collection(db, "coral-predictions"), {
                    imageUrl: downloadURL,
                    prediction: response.data.predict,
                    createdAt: Timestamp.now(),
                    userName: userDetails.firstName || "Anonymous",
                    userId: user.uid,
                });

                console.log('Prediction data saved to Firestore');
            } catch (error) {
                console.error('Failed to predict or save data:', error);
                setPrediction('Error in predicting the disease');
            }
        } else {
            console.log("No image or user found");
        }
    };

    return (
        <div className="disease-identify-container">
            <h2 className="disease-identify-header">Coral Disease Identification</h2>
            <p className="disease-identify-description">
                Upload an image of coral to determine whether it is healthy or affected by diseases such as white band, red band, or yellow band disease.
                Our advanced AI model, powered by Vision Transformer, offers highly accurate coral disease identification to assist researchers, divers, and enthusiasts.
            </p>
            <div className="disease-identify-image-upload-section">
                <input type="file" id="file-upload" accept="image/*" onChange={handleImageChange} hidden />
                <label htmlFor="file-upload" className="file-upload-label">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Selected Coral" className="disease-identify-upload-box-image-preview" />
                    ) : (
                        <div className="disease-identify-upload-box">Drag and drop or click to upload your coral image.</div>
                    )}
                </label>
                <button className="disease-identify-submit-btn" onClick={handleIdentifyCoral}>Identify Coral</button>
            </div>

            {/* Conditionally render the prediction result */}
            {prediction && (
                <div className="coral-disease-prediction-result">
                    <h3>Prediction Result:</h3>
                    <p>{prediction}</p>
                </div>
            )}
        </div>
    );
}

export default DiseaseIdentifier;