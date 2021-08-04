import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput,FlatList } from 'react-native';

export default function App() {
  const [people,setPeople]  = useState([
    {name:'ishan' , id : '1'},
    {name:'pramidu' , id : '2'},
    {name:'lasjn' , id : '3'},
    {name:'aa' , id : '4'},
    {name:'isddhan' , id : '5'},
    {name:'isdddwhan' , id : '6'},
    {name:'das' , id : '8'},
    {name:'das' , id : '9'},
    {name:'das' , id : '10'},

  ]);
 
  return (
  
    <View style={styles.container}>

    <FlatList
  S
      keyExtractor={(item) => item.id}
      data={people}
      renderItem ={({item}) => (
        <Text style={styles.item}>{item.name}</Text>
      )}
    
    
    />
    
    {/* <ScrollView>
    {people.map(item => (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
         
        
        </View>
        
      )
    )}
      </ScrollView> */}
    </View>
    
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
