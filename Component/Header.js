import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '../Style.css'
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  function goBack(){
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      console.warn("Cannot go back, already on the first screen");
    }
  }

  if(!navigation.canGoBack()){
    return (
      <div className='Header'>
        <div></div>
        <div className='Title'>
        <img src="../assets/LogoMopa.png" height={150} width={150} ></img>
        </div>
        <img src="../assets/reglages.png" height={15} width={15}></img>
      </div>
    );
  }


  return (
    <div className='Header'>
      <img src="../assets/fleche-gauche.png" height={15} width={15} onClick={goBack}></img>
      <div className='Title'>
      <img src="../assets/LogoMopa.png" height={150} width={150} ></img>
      </div>
      <img src="../assets/reglages.png" height={15} width={15}></img>
    </div>
  );
}

