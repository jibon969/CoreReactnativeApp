import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function app(){
  return(
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text>Hello React Native World !</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
