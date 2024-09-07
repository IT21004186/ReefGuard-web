import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './profileCard';
import AccountSettings from './accountSettings';
import coverImage from "../../assets/images/bg/profile-background2.png";
import '../../assets/styles/userProfile/UserProfile.css';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

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
  
    const handleLogout = async () => {
      try {
        await auth.signOut();
        navigate("/login");
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    };
  
    return (
      <div className="user-profile-container">
        <img src={coverImage} alt="Cover" className="cover-image" />
        <div className="user-profile-content">
          <ProfileCard userDetails={userDetails} onLogout={handleLogout} />
          <AccountSettings userDetails={userDetails} setUserDetails={setUserDetails} />
        </div>
      </div>
    );
};
  
export default Profile;