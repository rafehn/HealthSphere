import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../redux/actions/userActions";
import UserProfile from "../components/UserProfile";

const UserProfileScreen = ({ userProfile, getUserProfile }) => {
  useEffect(() => {
    // Fetch the user profile data
    getUserProfile();
  }, []);

  return <UserProfile profile={userProfile} />;
};

import firebase from "../firebase.js";

// Function to write data to Firebase
const writeDataToFirebase = () => {
  const newData = {
    // Data to be written to Firebase
  };

  firebase.database().ref("path/to/data").set(newData);
};

// Call the function to write data
writeDataToFirebase();


const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
});

const mapDispatchToProps = {
  getUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
