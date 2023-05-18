// App.js
import React, { useState } from "react";
import DietPlans from "./components/DietPlans";
import HealthTracker from "./components/HealthTracker";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

const App = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://api.github.com/users/bard");
    const json = await response.json();
    setData(json.name);
  };

  const saveData = async () => {
    await AsyncStorage.setItem("name", data);
  };

  const loadData = async () => {
    const name = await AsyncStorage.getItem("name");
    setData(name);
  };

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
      <Text>Hello, world!</Text>
      <TextInput
        placeholder="Enter your name"
        onChangeText={text => setData(text)}
      />
      <Button
        title="Fetch Data"
        onPress={fetchData}
      />
      <Button
        title="Save Data"
        onPress={saveData}
      />
      <Button
        title="Load Data"
        onPress={loadData}
      />
      <Text>{data}</Text>
      <HealthTracker />
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
