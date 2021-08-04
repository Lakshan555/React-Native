import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.hedar}>
        <Text style={styles.boldText}>Hello,APP</Text>
      </View>
      <View style={styles.body}>
      <Text style={styles.boldText}>Lorem ipum adwda dfscs</Text>
      <Text>Lorem ipum adwda dfscs</Text>
      <Text>Lorem ipum adwda dfscs</Text>
      <Text>Lorem ipum adwda dfscs</Text>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hedar: {
    backgroundColor:'green',
    padding:20,
   
    
  },
  boldText:{
    fontWeight:'bold',
   
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
    marginTop:10,
  }
});

