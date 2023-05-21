// HealthTracker.js
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HealthTracker = () => {
  const [steps, setSteps] = useState(0);

  const incrementSteps = () => {
    setSteps(steps + 1);
  };

  const decrementSteps = () => {
    setSteps(steps - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Health Tracker</Text>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.name}>{steps}</Text>
          <Button
            title="Increment Steps"
            style={styles.removeButton}
            onPress={incrementSteps}
          />
          <Button
            title="Decrement Steps"
            style={styles.addButton}
            onPress={decrementSteps}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "#D3D3D3",
  },  
  name: {
    fontSize: 16,
    fontWeight: "bold",
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

export default HealthTracker;
