import React from 'react';
import { auth } from '../components/firebase'; // Adjust the path as needed
import { toast } from 'react-toastify';
import '../styles/Auth.css'; // Import the CSS file

const ProfilePage = () => {
  const handleLogout = () => {
    // Handle user logout
    auth.signOut()
      .then(() => {
        toast.success("Logged out successfully", { position: "top-center" });
        window.location.href = "/signin"; // Redirect to Sign In page
      })
      .catch((error) => {
        toast.error(error.message, { position: "bottom-center" });
      });
  };

  return (
    <div className="profile-container">
      <h1>Welcome to Your Profile</h1>
      <p>Email: {auth.currentUser?.email}</p>
      <p>First Name: {auth.currentUser?.displayName || "N/A"}</p>
      <p>Last Name: {auth.currentUser?.photoURL || "N/A"}</p>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default ProfilePage;
