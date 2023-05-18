// App.js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;