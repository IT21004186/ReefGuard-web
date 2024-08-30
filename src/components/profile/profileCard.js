import React from 'react';
import '../../assets/styles/userProfile/ProfileCard.css';

const ProfileCard = ({ userDetails, onLogout }) => {

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <img src={userDetails?.photo || 'https://placehold.co/100x100'} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <h2 className="profile-name">{userDetails?.firstName || 'User Name'}</h2>
          <p className="profile-title">{userDetails?.position || 'Software Engineer'}</p>
        </div>
      </div>
      <div className="profile-details">
        <p><strong>First Name:</strong> {userDetails?.firstName}</p>
        <p><strong>Last Name:</strong> {userDetails?.lastName}</p>
        <p><strong>Email:</strong> {userDetails?.email}</p>
      </div>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default ProfileCard;