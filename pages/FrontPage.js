import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Component/Header'
import React from 'react';

export default function FrontPage({navigation}) {

    const enterSite = () => {
        navigation.navigate('NewHome')
    };

  return (
    <div className="FrontPage">
        <h1 className="title">SayMyStory</h1>
        <p className="subtitle">Votre histoire telle que vous l'avez toujours rêvée...</p>
        <button className="enter-button" onClick={enterSite}>Entrer</button>
        <p className="confirmation">Je confirme que j'ai plus de 18 ans</p>
  </div>
  );
}


