import React, { useState } from "react";
import styles from "./styles";
import HomeScreen from "./screens/HomeScreen";
import DietPlans from "./screens/DietPlans";
import HealthTracker from "./screens/HealthTracker";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const onTabPress = (index) => {
    setCurrentScreen(index);
  };

  return (
    <MaterialBottomTabNavigator
      initialRouteName="home"
      onTabPress={onTabPress}
      tabs={[
        {
          title: "Home",
          icon: "ios-home",
          index: 0,
        },
        {
          title: "Diet Plans",
          icon: "ios-list",
          index: 1,
        },
        {
          title: "Health Tracker",
          icon: "ios-heart",
          index: 2,
        },
      ]}
    >
      <HomeScreen />
    </MaterialBottomTabNavigator>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    margin: 10,
  },
  list: {
    margin: 10,
  },
  item: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "lightgray",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  calories: {
    fontSize: 14,
    color: "black",
  },
  fat: {
    fontSize: 14,
    color: "black",
  },
  carbohydrates: {
    fontSize: 14,
    color: "black",
  },
  protein: {
    fontSize: 14,
    color: "black",
  },
  removeButton: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  addButton: {
    backgroundColor: "green",
    color: "white",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

export default App;
