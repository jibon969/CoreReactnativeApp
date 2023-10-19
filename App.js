import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome to React Native App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'red',
    padding: 10,
  },
});
