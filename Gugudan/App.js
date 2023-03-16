import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


var text_st = {fontSize:30, backgroundColor:'pink', padding:10, margin:10};
var text_st_con = {fontSize:30, padding:10, margin:10, fontWeight: 'bold'};
var text_st_button = {fontSize:50, color: 'purple', padding:10, margin:10, fontWeight: 'bold'};

export default function App() {

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

