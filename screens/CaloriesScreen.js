import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import NutritionInfo from '../components/NutritionInfo';
import Button from '../components/Button';

const CaloriesScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Calories" />
      <View style={styles.content}>
        <ProgressBar progress={0.7} />
        <NutritionInfo label="Calories Burnt" value="250" />
        <NutritionInfo label="Steps Walked" value="5000" />
        <NutritionInfo label="Calories Consumed" value="1500" />
        <NutritionInfo label="Calories Remaining" value="1000" />
        <Button label="Add Meal" onPress={() => console.log("Add Meal pressed")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
});

export default CaloriesScreen;
