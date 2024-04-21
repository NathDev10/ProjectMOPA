import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Affair from './pages/Affair'; // Importez vos pages
import CreatAffair from './pages/CreatAffair';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function App() {
  return (        
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreatAffair" component={CreatAffair} />
        <Stack.Screen name="Affair" component={Affair} />
    </Stack.Navigator>
  </NavigationContainer>   
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
