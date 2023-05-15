import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NutritionInfo = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#2C3E50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    color: '#2980B9',
    fontSize: 16,
  },
});

export default NutritionInfo;
