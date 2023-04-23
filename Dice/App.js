import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

function Circle(){
  return <View style={styles.circle}/>;
}

function Blank(){
  return <View style={ [styles.circle, {backgroundColor: undefined, borderWidth: 0}] }/>;
}

function Dice(props){
  if (props.num==1){
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:"row"}}><Blank/><Blank/><Blank/></View>
        <View style={{flexDirection:"row"}}><Blank/><Circle/><Blank/></View>
        <View style={{flexDirection:"row"}}><Blank/><Blank/><Blank/></View>
      </View>
    );
  }
  else if (props.num==2){
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:"row"}}><Circle/><Blank/><Blank/></View>
        <View style={{flexDirection:"row"}}><Blank/><Blank/><Blank/></View>
        <View style={{flexDirection:"row"}}><Blank/><Blank/><Circle/></View>
      </View>
    );
  }
  else if (props.num==3){
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:"row"}}><Circle/><Blank/><Blank/></View>
        <View style={{flexDirection:"row"}}><Blank/><Circle/><Blank/></View>
        <View style={{flexDirection:"row"}}><Blank/><Blank/><Circle/></View>
      </View>
    );
  }
  else if (props.num==4){
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:"row"}}><Circle/><Blank/><Circle/></View>
        <View style={{flexDirection:"row"}}><Blank/><Blank/><Blank/></View>
        <View style={{flexDirection:"row"}}><Circle/><Blank/><Circle/></View>
      </View>
    );
  }
  else if (props.num==5){
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:"row"}}><Circle/><Blank/><Circle/></View>
        <View style={{flexDirection:"row"}}><Blank/><Circle/><Blank/></View>
        <View style={{flexDirection:"row"}}><Circle/><Blank/><Circle/></View>
      </View>
    );
  }
  else{
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:"row"}}><Circle/><Blank/><Circle/></View>
        <View style={{flexDirection:"row"}}><Circle/><Blank/><Circle/></View>
        <View style={{flexDirection:"row"}}><Circle/><Blank/><Circle/></View>
      </View>
    );
  }
  
}

export default function App() {
  
  const [N, setN] = useState(1)
  const [S, setS] = useState(1)
  
  return (
    <View style={{backgroundColor:"pink", flex:1, marginTop:50, alignItems:"center", justifyContent:"space-around"}}>
      
      <Text style={[styles.text,{shadowColor: "#000", shadowOffset: {width: 8, height: 8}, shadowOpacity: 0.22, shadowRadius: 0.55}]}>🎲 Double Dice! 🎲</Text>
      
      
      <Text style={[styles.text, {color:"black", fontWeight: 'bold', shadowColor: "#000", shadowOffset: {width: 8, height: 8}, shadowOpacity: 0.22, shadowRadius: 0.55}]}>{N+S}</Text>
      <View style={{flexDirection:'row', alignItems:"center", justifyContent:'space-evenly'}}>
        <Dice num={N} />
        <View style={{margin:10}}/>
        <Dice num={S}/>
      </View>
      <View style={{marginHorizontal:100, marginVertical:30}}>
        <Button title = "Roll" onPress={
          function() {setN(Math.floor(Math.random()*6 +1)); setS(Math.floor(Math.random()*6 +1));}
        }/>


      </View>  
      
    </View>
  );
}

const styles = StyleSheet.create({
  circle:{
    width: 40,
    height: 40, 
    backgroundColor : "black",
    borderRadius:20,
    borderWidth:20,
    margin:2,
  },

  

  dice:{
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
     width: 8,
     height: 8,
    },
    shadowOpacity: 0.22,
    shadowRadius: 0.55
  },

  text:{
    color: "black",
    fontSize : 30,
    fontWeight: 'bold',
    alignItems: "center"
  }

  
  
  
});
