import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import NutritionInfo from '../components/NutritionInfo';
import Button from '../components/Button';

export default function HomeScreen({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>HealthSphere</Text>
      <View style={styles.nutritionInfoContainer}>
        <NutritionInfo
          // label="Calories Burnt"
          title="Calories Burnt"
          value={23.2}
          // value={caloriesBurnt}
          unit="kcal"
          color="#f4511e"
        />
        <NutritionInfo
          title="Steps Walked"
          value={32.2}
          unit="steps"
          color="#8BC34A"
        />
        <NutritionInfo
          title="Diet Plan"
          value={23.4}
          unit=""
          color="#2196F3"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="View Calories"
          onPress={() => console.log('View Calories Pressed')}
          color="#f4511e"
        />
        <Button
          label="View Diet Plan"
          onPress={() => console.log('View Diet Plan Pressed')}
          color="#2196F3"
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  caloriesBurnt: state.caloriesBurnt,
  stepsWalked: state.stepsWalked,
  dietPlan: state.dietPlan,
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nutritionInfoContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
