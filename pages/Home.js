import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Component/Header'
import React from 'react';

export default function Home({navigation}) {


  return (
    <div className='Home'>
        <Header></Header>
        <div className='container'>
        <button className='button-27' onClick={() => navigation.navigate('CreatAffair')} >Create my dream affair</button>
        </div>
    </div>
    
  );
}

