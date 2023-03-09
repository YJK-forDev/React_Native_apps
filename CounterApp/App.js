import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


var text_st = {fontsize:30, backgroundColor:'pink', padding:10, margin:10};

export default function App() {

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

