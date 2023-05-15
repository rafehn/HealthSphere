import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from './redux/store/store';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </Provider>
  );
}
