import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';

export default function App() {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteTest : styles.darkTest}>
        Hello React World !
      </Text>
      <Text>Learn More ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteTest: {
    color: 'green',
  },
  darkTest: {
    color: 'red',
  },
});
