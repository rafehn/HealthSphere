import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addSteps } from '../redux/store/actions/stepsActions';

export default function ExerciseScreen() {
  const [steps, setSteps] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (steps) {
      dispatch(addSteps(parseInt(steps)));
      setSteps('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Exercise</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Steps"
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Steps</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
