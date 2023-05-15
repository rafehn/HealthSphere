import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NutritionInfo from '../components/NutritionInfo';
import ProgressBar from '../components/ProgressBar';

const StepsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Steps</Text>
      <View style={styles.progressContainer}>
        <ProgressBar progress={0.6} />
      </View>
      <NutritionInfo title="Steps Taken" value="6,500" unit="steps" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressContainer: {
    width: '80%',
    marginBottom: 20,
  },
});

export default StepsScreen;
