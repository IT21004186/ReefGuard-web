import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import '../../assets/styles/userProfile/AccountSettings.css';

const AccountSettings = ({ userDetails, setUserDetails }) => {
  const [uid, setUid] = useState(localStorage.getItem("uid") || '');
  const [firstName, setFirstName] = useState(userDetails?.firstName || '');
  const [lastName, setLastName] = useState(userDetails?.lastName || '');
  const [email, setEmail] = useState(userDetails?.email || '');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadCompleted, setUploadCompleted] = useState(false);
 
  useEffect(() => {

    setFirstName(userDetails?.firstName || '');
    setLastName(userDetails?.lastName || '');
    setEmail(userDetails?.email || '');
  }, [userDetails]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `profileImages/${auth.currentUser.uid}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setUploading(true);
      setUploadCompleted(false);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error('Error uploading image:', error.message);
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          try {
            const userRef = doc(db, 'Users', uid);
            await setDoc(userRef, { photo: downloadURL }, { merge: true });
            setUserDetails((prevDetails) => ({ ...prevDetails, photo: downloadURL }));
            setUploading(false);
            setUploadCompleted(true); // Set upload completion state
          } catch (error) {
            console.error('Error saving profile picture URL:', error.message);
            setUploading(false);
          }
        }
      );
    }
  };

  const handleUpdate = async () => {
    try {
      const userRef = doc(db, 'Users', uid);
      const updatedData = { firstName, lastName, email};
      await setDoc(userRef, updatedData, { merge: true });
      setUserDetails(updatedData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div className="account-settings">
      <h3 className="account-settings-title">Account Settings</h3>
      <div className="form-group">
        <label>Profile Picture</label>
        <input type="file" onChange={handleImageChange} />
        {uploading && <p>Uploading... {uploadProgress.toFixed(2)}%</p>}
        {!uploading && uploadCompleted && <p>Upload completed successfully!</p>}
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button className="update-btn" onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default AccountSettings;