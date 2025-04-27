import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from './component/Perfil';
import Pesquisar from './component/Pesquisar';
import { createStackNavigator } from '@react-navigation/stack';
import Catalogo from './component/Catalogo';

const Stack = createStackNavigator();

const App = ()=>{
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Catalogo" component={Catalogo} />
      <Stack.Screen name="Pesquisar" component={Pesquisar} />
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
