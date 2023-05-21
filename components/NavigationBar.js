import React, { useState } from "react";
import { MaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

const NavigationBar = () => {
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
          title: "Profile",
          icon: "ios-person",
          index: 1,
        },
        {
          title: "Settings",
          icon: "ios-settings",
          index: 2,
        },
      ]}
    >
      <HomeScreen />
      <ProfileScreen />
      <SettingsScreen />
    </MaterialBottomTabNavigator>
  );
};

export default NavigationBar;
