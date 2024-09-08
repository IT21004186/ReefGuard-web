import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/CoralIdentification.css";
import { identifyCorals } from "../../services/coral-species-identification/CoralSpecies";

function CoralIdentification() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageResult, setImageResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showImageAfterCancel, setShowImageAfterCancel] = useState(false);

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

  const handleCancelIdentification = () => {
    setLoading(false);

    
    setTimeout(() => {
      setCancelled(true);
      setShowImageAfterCancel(true); 
      setErrorMessage("No corals detected.");
    }, 5000); // 5-second delay
  };

  const handleIdentifyCoral = async () => {
    if (!selectedFile) {
      alert("Please upload an image.");
      return;
    }

    setLoading(true);
    setCancelled(false);
    setShowImageAfterCancel(false); 

   
    setTimeout(async () => {
      if (!cancelled) {
        try {
          const result = await identifyCorals(selectedFile);
          setImageResult(result.image); 
        } catch (error) {
          console.error("Error identifying coral:", error);
          setErrorMessage("Error identifying coral.");
        } finally {
          setLoading(false);
        }
      }
    }, 5000);
  };

  return (
    <div className="coral-identification">
      <div className="banner-section-1">
        <h1 style={{ fontWeight: "bold" }}>Coral Identification</h1>
      </div>

      <div className="section-1">
        <div className="upload-box">
          <h2 style={{ fontWeight: "bold", color: "white" }}>
            How to Identify corals?
          </h2>
          <p style={{ color: "white", padding: "20px" }}>
            Upload an image of coral to quickly identify its species. Our
            advanced model is trained to recognize various coral species with
            high accuracy, helping researchers, divers, and enthusiasts alike.
          </p>
          <div className="upload-area">
            <p style={{ color: "white" }}>
              Drag and drop or click to upload your coral image. Our system will
              analyze it and provide you with detailed information about the
              coral species.
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
          <button className="upload-btn" onClick={handleIdentifyCoral} disabled={loading}>
            {loading ? "Identifying..." : "Identify Coral"}
          </button>

          {loading && (
            <button className="cancel-btn" onClick={handleCancelIdentification}>
              Stop and Show Image
            </button>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-center">
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












// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../assets/styles/CoralIdentification.css";
// import { identifyCorals } from "../../services/coral-species-identification/CoralSpecies";

// function CoralIdentification() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imageResult, setImageResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleIdentifyCoral = async () => {
//     if (!selectedFile) {
//       alert("Please upload an image.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const result = await identifyCorals(selectedFile);
//       setImageResult(result.image); // Assuming result.image is the base64 image string
//     } catch (error) {
//       console.error("Error identifying coral:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="coral-identification">
//       <div className="banner-section-1">
//         <h1 style={{ fontWeight: "bold" }}>Coral Identification</h1>
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
//         <button className="upload-btn" onClick={handleIdentifyCoral}>
//           {loading ? "Identifying..." : "Identify Coral"}
//         </button>
//       </div>

//       <div className="d-flex justify-content-center">
//         <div className="output-area">
//           <h3 style={{ textAlign: "left", margin: "50px", color: "#bcdbff" }}>
//             Result
//           </h3>
//           {imageResult && (
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
//       navigate(link); // Use react-router navigation
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














