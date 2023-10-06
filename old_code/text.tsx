import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const text = () => {
  return (
    <View style={styles.container}>
      <Text>text</Text>
    </View>
  );
};

export default text;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
