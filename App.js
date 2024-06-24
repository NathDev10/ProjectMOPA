import React from 'react';
import './Style.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from './pages/FrontPage';
import NewHome from './pages/NewHome';
import MyStory from './pages/MyStory';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FrontPage" component={FrontPage} />
          <Stack.Screen name="NewHome" component={NewHome} />
          <Stack.Screen name="MyStory" component={MyStory} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}