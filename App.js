import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteTest : styles.darkTest}>
        Hello React World !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteTest: {
    color: '#FFFFFF',
  },
  darkTest: {
    color: 'red',
  },
});
