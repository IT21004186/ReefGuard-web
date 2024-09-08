// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../assets/styles/CoralIdentification.css";
// import { identifyCorals } from "../../services/coral-species-identification/CoralSpecies";

// function CoralIdentification() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [imageResult, setImageResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [cancelled, setCancelled] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showImageAfterCancel, setShowImageAfterCancel] = useState(false);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     setErrorMessage("");

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }

//     setShowImageAfterCancel(false);
//     setCancelled(false);
//     setLoading(false);
//   };

//   const handleCancelIdentification = () => {
//     setLoading(false);

//     setTimeout(() => {
//       setCancelled(true);
//       setShowImageAfterCancel(true);
//       setErrorMessage("No corals detected.");
//     }, 5000);
//   };

//   const handleIdentifyCoral = async () => {
//     if (!selectedFile) {
//       alert("Please upload an image.");
//       return;
//     }

//     setLoading(true);
//     setCancelled(false);
//     setShowImageAfterCancel(false);

//     setTimeout(async () => {
//       if (!cancelled) {
//         try {
//           const result = await identifyCorals(selectedFile);
//           setImageResult(result.image);
//         } catch (error) {
//           console.error("Error identifying coral:", error);
//           setErrorMessage("Error identifying coral.");
//         } finally {
//           setLoading(false);
//         }
//       }
//     }, 5000);
//   };

//   return (
//     <div className="coral-identification">
//       <div className="banner-section-1">
//         <h1 style={{ fontWeight: "bold" }}>Coral Identification</h1>
//       </div>

//       <div className="rules-section">
//         <h2>
//           Before You Upload an Image for Identification, Please Follow These
//           Rules:
//         </h2>
//         <div className="rules-set-paragraph">
//         <ul>
//           <li>
//             File Format: Only upload images in{" "}
//             <strong>.jpg, .jpeg, or .png</strong> formats.
//           </li>
//           <li>
//             File Size: Ensure the image is less than <strong>5 MB</strong>.
//           </li>
//           <li>
//             Image Quality: Use <strong>high-quality images</strong> with clear
//             details.
//           </li>
//           <li>
//             Focus on Subject: The coral should be{" "}
//             <strong>clearly visible</strong> and centered in the image.
//           </li>
//           <li>
//             No Watermarks or Text: Avoid images with watermarks, logos, or added
//             text.
//           </li>
//           <li>
//             Lighting and Contrast: Ensure the image is <strong>well-lit</strong>{" "}
//             and has good contrast.
//           </li>
//           <li>
//             No Multiple Subjects: Upload an image with{" "}
//             <strong>only one coral</strong> or object.
//           </li>
//           <li>
//             Legal Compliance: Make sure the image complies with{" "}
//             <strong>copyright laws</strong>.
//           </li>
//           <li>
//             Proper Angle: Take the image at a good angle displaying{" "}
//             <strong>key characteristics</strong> of the coral.
//           </li>
//           <li>
//             No Obstructions: Ensure the image is free from obstructions like
//             hands or shadows.
//           </li>
//         </ul>
//         </div>
//       </div>

//       <div className="section-1">
//         <div className="upload-box">
//           <h2 style={{ fontWeight: "bold", color: "white" }}>
//             How to Identify corals?
//           </h2>
//           <p style={{ color: "white", padding: "20px" }}>
//             Upload an image of coral to quickly identify its species. Our
//             advanced model is trained to recognize various coral species with
//             high accuracy, helping researchers, divers, and enthusiasts alike.
//           </p>
//           <div className="upload-area">
//             <p style={{ color: "white" }}>
//               Drag and drop or click to upload your coral image. Our system will
//               analyze it and provide you with detailed information about the
//               coral species.
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="upload-box"
//                 onChange={handleFileChange}
//               />
//             </p>
//           </div>
//         </div>

//         <div className="upload-btn-section">
//           <button
//             className="upload-btn"
//             onClick={handleIdentifyCoral}
//             disabled={loading}
//           >
//             {loading ? "Identifying..." : "Identify Coral"}
//           </button>

//           {loading && (
//             <button className="cancel-btn" onClick={handleCancelIdentification}>
//               Stop and Show Image
//             </button>
//           )}
//         </div>
//       </div>

      

//       <div className="result-section d-flex justify-content-center">
//         <div className="output-area">
//           <h3 style={{ textAlign: "left", margin: "5px", color: "#bcdbff" }}>
//             Result
//           </h3>

//           {showImageAfterCancel && (
//             <>
//               {imagePreview && (
//                 <img
//                   src={imagePreview}
//                   alt="Uploaded Coral"
//                   style={{ maxWidth: "100%", margin: "20px" }}
//                 />
//               )}
//               {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//             </>
//           )}

//           {imageResult && !loading && !cancelled && (
//             <img
//               src={`data:image/jpeg;base64,${imageResult}`}
//               alt="Identified Coral"
//               style={{ maxWidth: "100%", margin: "20px" }}
//             />
//           )}
//         </div>
//       </div>

//       <ExploreCoralSpecies />
//     </div>
//   );
// }

// function ExploreCoralSpecies() {
//   const navigate = useNavigate();

//   const sections = [
//     {
//       title: "About the Coral Species",
//       description:
//         "Explore and learn about the vast diversity of coral species from around the world. Our database is continuously updated to include newly discovered species.",
//       link: "/newSpeciesPage",
//     },
//     {
//       title: "Understand Coral Ecosystems",
//       description:
//         "Gain insights into coral ecosystems, their roles in marine environments, and why protecting them is vital for our planet’s health.",
//       link: "#",
//     },
//     {
//       title: "Support Coral Conservation",
//       description:
//         "Join global efforts in coral conservation by contributing your data and supporting initiatives that protect these vital marine organisms.",
//       link: "#",
//     },
//   ];

//   const handleLearnMore = (link) => {
//     if (link !== "#") {
//       navigate(link);
//     }
//   };

//   return (
//     <div className="explore-coral-species">
//       {sections.map((section, index) => (
//         <div key={index} className="coral-section">
//           <h3>{section.title}</h3>
//           <p>{section.description}</p>
//           <button
//             onClick={() => handleLearnMore(section.link)}
//             className="learn-more-btn"
//           >
//             Learn More
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CoralIdentification;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/CoralIdentification.css";
import { identifyCorals } from "../../services/coral-species-identification/CoralSpecies";
import { storage, db, auth } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, Timestamp, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";

function CoralIdentification() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageResult, setImageResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showImageAfterCancel, setShowImageAfterCancel] = useState(false);
  
  const [userDetails, setUserDetails] = useState(null);
  const [user, setUser] = useState(null);

  // Step 1: Get authenticated user and user details
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
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User data not found");
        }
      }
    };
    fetchUserData();
  }, [user]);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setErrorMessage("");

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }

    setShowImageAfterCancel(false);
    setCancelled(false);
    setLoading(false);
  };

  // Cancel identification
  const handleCancelIdentification = () => {
    setLoading(false);

    setTimeout(() => {
      setCancelled(true);
      setShowImageAfterCancel(true);
      setErrorMessage("No corals detected.");
    }, 5000);
  };

  // Step 2: Handle coral identification and upload to Firebase
  const handleIdentifyCoral = async () => {
    if (!selectedFile) {
      alert("Please upload an image.");
      return;
    }

    setLoading(true);
    setCancelled(false);
    setShowImageAfterCancel(false);

    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `coral-images/${user.uid}/${selectedFile.name}`);
      const snapshot = await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Identify coral (keeping your existing coral identification logic)
      const result = await identifyCorals(selectedFile);

      if (!cancelled) {
        // Display the identified coral image (from the server)
        setImageResult(result.image);

        // Step 3: Store the data in Firestore
        await addDoc(collection(db, "coral-species-identified"), {
          imageUrl: downloadURL,
          createdAt: Timestamp.now(),
          userName: userDetails?.firstName || "Anonymous",
          userId: user.uid,
        });
      }

    } catch (error) {
      console.error("Error uploading and identifying coral:", error);
      setErrorMessage("Error identifying coral.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="coral-identification">
      <div className="banner-section-1">
        <h1 style={{ fontWeight: "bold" }}>Coral Identification</h1>
      </div>

      <div className="rules-section">
        <h2>
          Before You Upload an Image for Identification, Please Follow These
          Rules:
        </h2>
        <div className="rules-set-paragraph">
          <ul>
            <li>
              File Format: Only upload images in <strong>.jpg, .jpeg, or .png</strong> formats.
            </li>
            <li>
              File Size: Ensure the image is less than <strong>5 MB</strong>.
            </li>
            <li>
              Image Quality: Use <strong>high-quality images</strong> with clear details.
            </li>
            <li>
              Focus on Subject: The coral should be <strong>clearly visible</strong> and centered in the image.
            </li>
            <li>
              No Watermarks or Text: Avoid images with watermarks, logos, or added text.
            </li>
            <li>
              Lighting and Contrast: Ensure the image is <strong>well-lit</strong> and has good contrast.
            </li>
            <li>
              No Multiple Subjects: Upload an image with <strong>only one coral</strong> or object.
            </li>
            <li>
              Legal Compliance: Make sure the image complies with <strong>copyright laws</strong>.
            </li>
            <li>
              Proper Angle: Take the image at a good angle displaying <strong>key characteristics</strong> of the coral.
            </li>
            <li>
              No Obstructions: Ensure the image is free from obstructions like hands or shadows.
            </li>
          </ul>
        </div>
      </div>

      <div className="section-1">
        <div className="upload-box">
          <h2 style={{ fontWeight: "bold", color: "white" }}>How to Identify corals?</h2>
          <p style={{ color: "white", padding: "20px" }}>
            Upload an image of coral to quickly identify its species. Our advanced model is trained to recognize various coral species with high accuracy, helping researchers, divers, and enthusiasts alike.
          </p>
          <div className="upload-area">
            <p style={{ color: "white" }}>
              Drag and drop or click to upload your coral image. Our system will analyze it and provide you with detailed information about the coral species.
              <input
                type="file"
                accept="image/*"
                className="upload-box"
                onChange={handleFileChange}
              />
            </p>
          </div>
        </div>

        <div className="upload-btn-section">
          <button
            className="upload-btn"
            onClick={handleIdentifyCoral}
            disabled={loading}
          >
            {loading ? "Identifying..." : "Identify Coral"}
          </button>

          {loading && (
            <button className="cancel-btn" onClick={handleCancelIdentification}>
              Stop and Show Image
            </button>
          )}
        </div>
      </div>

      <div className="result-section d-flex justify-content-center">
        <div className="output-area">
          <h3 style={{ textAlign: "left", margin: "5px", color: "#bcdbff" }}>
            Result
          </h3>

          {showImageAfterCancel && (
            <>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Uploaded Coral"
                  style={{ maxWidth: "100%", margin: "20px" }}
                />
              )}
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </>
          )}

          {imageResult && !loading && !cancelled && (
            <img
              src={`data:image/jpeg;base64,${imageResult}`}
              alt="Identified Coral"
              style={{ maxWidth: "100%", margin: "20px" }}
            />
          )}
        </div>
      </div>

      <ExploreCoralSpecies />
    </div>
  );
}

function ExploreCoralSpecies() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "About the Coral Species",
      description:
        "Explore and learn about the vast diversity of coral species from around the world. Our database is continuously updated to include newly discovered species.",
      link: "/newSpeciesPage",
    },
    {
      title: "Understand Coral Ecosystems",
      description:
        "Gain insights into coral ecosystems, their roles in marine environments, and why protecting them is vital for our planet’s health.",
      link: "#",
    },
    {
      title: "Support Coral Conservation",
      description:
        "Join global efforts in coral conservation by contributing your data and supporting initiatives that protect these vital marine organisms.",
      link: "#",
    },
  ];

  const handleLearnMore = (link) => {
    if (link !== "#") {
      navigate(link);
    }
  };

  return (
    <div className="explore-coral-species">
      {sections.map((section, index) => (
        <div key={index} className="coral-section">
          <h3>{section.title}</h3>
          <p>{section.description}</p>
          <button
            onClick={() => handleLearnMore(section.link)}
            className="learn-more-btn"
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}

export default CoralIdentification;