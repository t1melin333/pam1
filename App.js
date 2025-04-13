import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from './component/Perfil';
import Galeria from './component/Galeria';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = ()=>{
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Galeria" component={Galeria} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
