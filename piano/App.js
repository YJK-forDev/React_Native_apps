import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Audio } from 'expo-av';
import { ImageBackground } from 'react-native';
import { useState } from 'react';


key_st = {flex:1, margin:5, backgroundColor:'rgb(100,100,100)'};

async function play00(){ 
  // async는 function 앞에 붙이는데, 미 누르면서 동시에 솔 눌러도 소리가 둘다 나게 할 수 있게 함 
  // 만약 async 를 안써주면, 해당 function이 다 끝나야만 다른 function이 수행될 수 있음 
  console.log("Loading Sound");
  // m4a 파일을 로드할 때 createAsync를 수행함
  // await는 뒤의 createasync function 에서 해당 파일 로드를 끝낼 때 까지 기다렸다가 코드 다음 줄을 실행하라는 뜻임
  // 만약 로드를 다 하지 않고 (await 없이) 코드를 실행하면, 해당 파일을 다 로드하지 않은 상태에서 play를 명령하기 때문에 에러가 날 수 있음
  // async 방식은 쓰레드를 하나 더 두는 방식처럼 동작해서, 한 번에 여러개의 async functiondmf tngodgkf tn dlTdma
  
  // await는 무조건 async funtion 안에서만 쓸 수 있음
  var s = await Audio.Sound.createAsync(require('piano/assets/note00.m4a'));

  console.log('Playing Sound');
  // 만약 playAsync 앞에 await를 두면, 화음 (두 음을 동시에 play 하는 것)을 못하게 되겠지.
  s.sound.playAsync();
}

async function play02(){
  var s = await Audio.Sound.createAsync(require('piano/assets/note02.m4a'));
  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play04(){
  var s = await Audio.Sound.createAsync(require('piano/assets/note04.m4a'));
  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play05(){
  var s = await Audio.Sound.createAsync(require('piano/assets/note05.m4a'));
  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play07(){
  var s = await Audio.Sound.createAsync(require('piano/assets/note07.m4a'));
  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play09(){
  var s = await Audio.Sound.createAsync(require('piano/assets/note09.m4a'));
  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play11(){
  var s = await Audio.Sound.createAsync(require('piano/assets/note11.m4a'));
  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play12(){
  var s = await Audio.Sound.createAsync(require('piano/assets/note12.m4a'));
  console.log('Playing Sound');
  s.sound.playAsync();
}


export default function App() {

  const [k1, setk1] = useState(0);
  const [k2, setk2] = useState(0);
  const [k3, setk3] = useState(0);
  const [k4, setk4] = useState(0);
  const [k5, setk5] = useState(0);
  const [k6, setk6] = useState(0);
  const [k7, setk7] = useState(0);
  const [k8, setk8] = useState(0);


  return (
    
    <View style={{flex:1, marginTop:50}}>
      <ImageBackground style={{height:'100%', width:'100%'}} resizeMode="stretch" source={require('piano/assets/keyboard.png')}>
        <View onTouchStart={ function() {play00(); setk1(0.2) }} onTouchEnd={ function() { setk1(0) }} style={ key_st } opacity={k1}>
        
        </View>

        <View onTouchStart={ function() {play02(); setk2(0.2) }} onTouchEnd={ function() { setk2(0) }} style={ key_st } opacity={k2}>
        
        </View>

        <View onTouchStart={ function() {play04(); setk3(0.2) }} onTouchEnd={ function() { setk3(0) }} style={ key_st } opacity={k3}>
        
        </View>

        <View onTouchStart={ function() {play05(); setk4(0.2) }} onTouchEnd={ function() { setk4(0) }} style={ key_st } opacity={k4}>
        
        </View>

        <View onTouchStart={ function() {play07(); setk5(0.2) }} onTouchEnd={ function() { setk5(0) }} style={ key_st } opacity={k5}>
        
        </View>

        <View onTouchStart={ function() {play09(); setk6(0.2) }} onTouchEnd={ function() { setk6(0) }} style={ key_st } opacity={k6}>
        
        </View>

        <View onTouchStart={ function() {play11(); setk7(0.2) }} onTouchEnd={ function() { setk7(0) }} style={ key_st } opacity={k7}>
        
        </View>

        <View onTouchStart={ function() {play12(); setk8(0.2) }} onTouchEnd={ function() { setk8(0) }} style={ key_st } opacity={k8}>
        
        </View>
      </ImageBackground>
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









// ***자연스러운 피아노 앱을 만들기 위해서 누를 때 함수가 수행되도록 고침***
// ==> 뷰를 통해서 터치되는 순간 함수가 수행될 수 있게 함 (버튼을 뷰로 구현한 버전)
// flex는 남는 공간을 해당 비율로 나누어 준다는 점에서 그냥 width 비율을 %로 나타낸 것과는 다름
// (5주차 11페이지 그림 참조하기) 
// view 젤 위에 flex : 1 빼면 안에 있는 view들에 적용한 flex들은 모두 높이가 0으로 생성되어서 우리가 봤을 때 안만들어진 것처럼 보임,,
// 그래서 전체 view 자체에 flex : 1을 넣어야 남는 공간에 전체를 의미하기 때문에, 해당 공간을 다시 세부 flex 들로 나눌 수가 있게 됨
// view 자체는 최대한 필요한 공간만 차지하려고 하기 때문에 전체 view에 안써주면 flex가 찌부됨,,
// export default function App() {
//   return (
//     <View style={{paddingTop:50}}>
//       <View onTouchStart={ play00 }>
//         <Text style={{fontSize:30}}>
//           Do
//         </Text>
//       </View>

//       <View onTouchStart={ play02 }>
//         <Text style={{fontSize:30}}>
//           Re
//         </Text>
//       </View>

//       <View onTouchStart={ play04 }>
//         <Text style={{fontSize:30}}>
//           Mi
//         </Text>
//       </View>

//       <View onTouchStart={ play05 }>
//         <Text style={{fontSize:30}}>
//           Fa
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });






// ***아래 함수에서 버튼은 손을 떼는 순간에 함수가 수행됨***
// export default function App() {
//   return (
//     <View style={{paddingTop:50}}>
//       <Button title = "Play sound" onPress={play00}/>
//       <Button title = "Play sound" onPress={play02}/>
//       <Button title = "Play sound" onPress={play04}/>
//       <Button title = "Play sound" onPress={play05}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
