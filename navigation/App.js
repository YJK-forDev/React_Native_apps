import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

var text_st = {backgroundColor:'pink', padding:10, margin:10};
var text_st_con = {padding:10, margin:10, fontWeight: 'bold'};
var text_st_button = {color: 'purple', padding:10, margin:10, fontWeight: 'bold'};
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Count" component={Counter}/>
        <Stack.Screen name="Gugudan" component={Gugudan}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


function HomeScreen({navigation}){

  return(

    <View>
      <Text style={text_st}>HomeScreen</Text>
      <Button title="About"
        onPress = {function() {navigation.navigate('About')}}/>
      <View style={{height:10}}></View>
      <Button title="Count" 
        onPress={function() {navigation.navigate('Count')}}
      />
      <View style={{height:10}}></View>
      <Button title="Gugudan" 
        onPress={function() {navigation.navigate('Gugudan')}}
      />
    </View>
  );
}

function About() {

  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'black', height:100, alignItems:'center', shadowColor: "#000000", shadowOpacity: 0.3, shadowOffset: { width: 15, height: 15 }}}>
        <Text style={{color:'white', paddingTop:25, paddingLeft:15,paddingRight:15}}>🧑🏼‍🎤 Yujin's first react-native app 👩🏼‍🎤</Text>
        <Text style={{color:"magenta", textAlignVertical:'center'}}>Succeed!</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}


function Counter() {
// counter App 
  const [val, setval] = useState(0);

  return (
    <View style={{paddingTop:30}}>
      <Text style={text_st}>
        {val}
      </Text>
      <Button title="Count Up" color="red" onPress={function() {setval(val+1)}}/>
      <View style={{height:10}}></View>
      <Button title="Count Down" color="red" onPress={function() {setval(val-1)}}/>
      

    </View>
  );
}

function Gugudan() {

  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <View style={{paddingTop:50}}>
      <View style={{flexDirection:"row"}}>
        <Text style={text_st}>
          {A}
        </Text>
        <Text style={text_st_con}>
          X
        </Text>
        <Text style={text_st}>
          {B}
        </Text>
        <Text style={text_st_con}>
          =
        </Text>
        <Text style={text_st}>
          {A*B}
        </Text>
      </View>

      <View style={{flexDirection:"row"}}>
        <Button title="    +     " type="outline" color= 'purple' onPress={function() {setA(A+1)}}/>
        <Button title="    +     " type="outline" color = "purple" style = {text_st_button} onPress={function() {setB(B+1)}}/>
      </View>

      <View style={{flexDirection:"row"}}>
        <Button title="    -     " color = "purple" style = {text_st_button} onPress={function() {setA(A-1)}}/>
        <Button title="    -     " color = "purple" style = {text_st_button} onPress={function() {setB(B-1)}}/>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
