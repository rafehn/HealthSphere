import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

const DietPlans = () => {
  const [dietPlans, setDietPlans] = useState([]);

  const addDietPlan = () => {
    const newDietPlan = {
      name: "",
      calories: 0,
      fat: 0,
      carbohydrates: 0,
      protein: 0,
    };

    setDietPlans([...dietPlans, newDietPlan]);
  };

  const removeDietPlan = (index) => {
    setDietPlans(dietPlans.filter((dietPlan, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Diet Plans</Text>
      <View style={styles.list}>
        {dietPlans.map((dietPlan, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.name}>{dietPlan.name}</Text>
            <Text style={styles.calories}>{dietPlan.calories}</Text>
            <Text style={styles.fat}>{dietPlan.fat}</Text>
            <Text style={styles.carbohydrates}>{dietPlan.carbohydrates}</Text>
            <Text style={styles.protein}>{dietPlan.protein}</Text>
            <Button
              title="Remove"
              style={styles.removeButton}
              onPress={() => removeDietPlan(i)}
            />
          </View>
        ))}
      </View>
      <Button
        title="Add Diet Plan"
        style={styles.addButton}
        onPress={addDietPlan}
      />
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
    backgroundColor: "D3D3D3",
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

export default DietPlans;