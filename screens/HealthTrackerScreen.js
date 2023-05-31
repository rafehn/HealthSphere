import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { setHealthData } from '../redux/store/actions/healthDataActions';

const HealthTrackerScreen = ({ healthData, setHealthData }) => {
  const [health, setHealth] = React.useState(healthData);

  const handleSaveHealthData = () => {
    setHealthData(health);
  };

  return (
    <View style={styles.container}>
      <Header title="Health Tracker" />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Your Health Data:</Text>
          <TextInput
            value={health}
            onChangeText={setHealth}
            placeholder="e.g. Weight, Blood Pressure, Cholesterol"
          />
        </View>
        <Button label="Save" onPress={handleSaveHealthData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  healthData: state.healthData,
});

const mapDispatchToProps = {
  setHealthData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HealthTrackerScreen);
