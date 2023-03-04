import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [setIsFont] = useState(false);

  // 폰트가 될때가 있고, 에러 날때가 있는데 질문드리기
  useEffect(async () => {
    await Font.loadAsync({
      "VT323Regular": require('./fonts/VT323-Regular.ttf'),
    });
    setIsFont(true);
  },[]);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'black', height:100, alignItems:'center', shadowColor: "#000000", shadowOpacity: 0.3, shadowOffset: { width: 15, height: 15 }}}>
        <Text style={{fontFamily: "VT323Regular",fontSize:22, color:'white', paddingTop:25, paddingLeft:15,paddingRight:15}}>🧑🏼‍🎤 Yujin's first react-native app 👩🏼‍🎤</Text>
        <Text style={{fontFamily: "VT323Regular",fontSize:19, color:"magenta", textAlignVertical:'center'}}>Succeed!</Text>
        <StatusBar style="auto" />
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
