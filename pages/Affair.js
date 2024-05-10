import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactAudioPlayer from 'react-audio-player';
import Header from '../Component/Header'
import React from 'react';

export default function Affair({route}) {
    const { Text } = route.params;
  return (
      <View>
          <Header></Header>
            <div className='Affair'>
            <ReactAudioPlayer  src="../assets/VERSE.mp3"  autoPlay  controls/>
                <div className='TextAffair'>
                  {Text}
                  </div>
            </div>
      </View>
  );
}

