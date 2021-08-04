import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView } from 'react-native';

export default function App() {
  const [people,setPeople]  = useState([
    {name:'ishan' , key : '1'},
    {name:'pramidu' , key : '2'},
    {name:'lasjn' , key : '3'},
    {name:'aa' , key : '4'},
    {name:'isddhan' , key : '5'},
    {name:'isdddwhan' , key : '6'},
    {name:'das' , key : '8'},
    {name:'das' , key : '9'},
    {name:'das' , key : '10'},

  ]);
 
  return (
    <ScrollView>
    <View style={styles.container}>
    
   
    {people.map(item => (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
         
        
        </View>
        
      )
    )}
      
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop:25,
    padding:30,
    backgroundColor:'pink',
    fontSize:20,
    borderRadius:10


  }


});
