import firebase from "../config/firebase";
import data from "../data.json";

// Function to upload data to Firebase
const uploadDataToFirebase = async () => {
  try {
    const db = firebase.database();
    const dataRef = db.ref("data");

    // Loop through each item in the JSON data
    for (const item of data) {
      // Generate a unique key for each item
      const newItemRef = dataRef.push();
      
      // Set the item data using the generated key
      await newItemRef.set(item);
    }

    console.log("Data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
};

export default uploadDataToFirebase;
