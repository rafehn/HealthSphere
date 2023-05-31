import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
import { connect } from "react-redux";
import { setDietPlan } from "./redux/store/actions/dietPlanActions";
import { setHealthData } from "./redux/store/actions/healthDataActions";
import * as Location from "expo-location";
import Header from "./components/Header";
import DietPlans from "./screens/DietPlanScreen";
import HealthTracker from "./screens/HealthTrackerScreen";
import UserProfile from "./screens/UserProfileScreen";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  const onTabPress = (index) => {
    setCurrentScreen(index);
  };

  return (
    <View style={styles.container}>
      <Header title="HealthSphere" />
      <View style={styles.content}>
        <View style={styles.tabBar}>
          {/* ... */}
        </View>
        <ScrollView>
          {currentScreen === "home" && (
            <View style={styles.home}>
              {/* Home screen content */}
              <Text>Latitude: {location?.coords.latitude}</Text>
              <Text>Longitude: {location?.coords.longitude}</Text>
              {errorMsg && <Text>Error: {errorMsg}</Text>}
            </View>
          )}
          {/* ... */}
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    height: 50,
    backgroundColor: "#2A9DF4",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});


export default App;
