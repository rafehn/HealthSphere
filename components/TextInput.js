import React from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <RNTextInput
        placeholderTextColor="#8F9BB3"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E2E8F0',
    padding: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#2D3748',
    fontFamily: 'Montserrat-Regular',
  },
});

export default TextInput;
