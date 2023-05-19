import React from "react";

import { View, Text, StyleSheet } from "react-native";

const StepCounter = ({ steps }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{steps} Steps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    borderRadius: 10,

    padding: 10,

    alignItems: "center",

    justifyContent: "center",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.25,

    shadowRadius: 3.84,

    elevation: 5,
  },

  text: {
    fontSize: 20,

    fontWeight: "bold",
  },
});

export default StepCounter;
