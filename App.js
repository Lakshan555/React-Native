import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [name,setName] = useState('.......');
  const [age,setage] = useState('23');


  const clickHandler = () => {
    alert('done');
  }
 
  return (
    <View style={styles.container}>
    
     <Text>My name is {name}</Text>
     <Text>my age is {age}</Text>

     
     <TextInput 
     style={styles.input}
     placeholder='Name'
     multiline
     onChangeText={(value) => setName(value)}/>

    <TextInput 
     style={styles.input}
     placeholder='Age'
     keyboardType = 'numeric'
     onChangeText={(value) => setage(value)}/>
    
     
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
    
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200

  }

});
