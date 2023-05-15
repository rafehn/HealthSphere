import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { setDietPlan } from '../redux/store/actions/dietPlanActions';

const DietPlanScreen = ({ dietPlan, setDietPlan }) => {
  const [diet, setDiet] = React.useState(dietPlan);

  const handleSaveDietPlan = () => {
    setDietPlan(diet);
  };

  return (
    <View style={styles.container}>
      <Header title="Diet Plan" />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Your Diet Plan:</Text>
          <TextInput
            value={diet}
            onChangeText={setDiet}
            placeholder="e.g. Low carbs, High protein, Vegan"
          />
        </View>
        <Button label="Save" onPress={handleSaveDietPlan} />
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
  dietPlan: state.dietPlan,
});

const mapDispatchToProps = {
  setDietPlan,
};

export default connect(mapStateToProps, mapDispatchToProps)(DietPlanScreen);

