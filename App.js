import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name,setName] = useState('.......');
  const [detils,setDetils] = useState({email:'ishan@gmail.com' , age: 40});

  const clickHandler = () => {
    setName('ishanka');
  }

  return (
    <View style={styles.container}>
    
     <Text>My name is {name}</Text>
     <Text>My Mail is {detils.email} and my age is {detils.age}</Text>
     
     <View style={styles.buttonContainer}>
        <Button  title = 'Update State' onPress={clickHandler}/>
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
  buttonContainer:{
    marginTop:20,
    
  }
});
