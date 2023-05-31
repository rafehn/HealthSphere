import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserProfile = () => {
  const navigation = useNavigation();

  const goToCaloriesScreen = () => {
    navigation.navigate("CaloriesScreen");
  };

  const goToHealthTrackerScreen = () => {
    navigation.navigate("HealthTrackerScreen");
  };

  const goToStepsScreen = () => {
    navigation.navigate("StepsScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Goals</Text>
        {/* goals */}
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>My Body</Text>
        {/* My Body */}
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Achievements</Text>
        {/* achievements */}
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Settings</Text>
        {/* settings */}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Calories Screen"
          onPress={goToCaloriesScreen}
        />
        <Button
          title="Go to Health Tracker Screen"
          onPress={goToHealthTrackerScreen}
        />
        <Button
          title="Go to Steps Screen"
          onPress={goToStepsScreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default UserProfile;
