import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Component/Header'
import React from 'react';

export default function Affair({route}) {
    const { Text } = route.params;
  return (
    <View>
        <Header></Header>
        <div className='Affair'>
            <div className='TextAffair'>
            {Text}
            </div>
            <div className='ButtonFooter'>
                <button className='button-27'>Save</button>
                <button className='button-27'>Delete</button>
            </div>
        </div>
    </View>
    
  );
}

