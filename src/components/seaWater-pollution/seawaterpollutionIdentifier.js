import React from "react";
import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/Header";
import "../../assets/styles/seawaterpollutionIdentifier.css";

function PollutionPredictor(){
  return (
    <div className="coral-identification-page">
      <Header />
      <div className="coral-identification-container">
        <Sidebar />
      </div>
    </div>
  );
}

export default PollutionPredictor;
