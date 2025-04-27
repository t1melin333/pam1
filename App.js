import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from './component/Perfil';
import Catalogo from './component/Catalogo';
import Pesquisar from './component/Pesquisar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Catalogo') {
              iconName = focused ? 'images' : 'images-outline';
            } else if (route.name === 'Pesquisar') {
              iconName = focused ? 'search' : 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={focused ? '#007AFF' : '#8e8e93'} />;
          },
        })}
      >
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Catalogo" component={Catalogo} />
        <Drawer.Screen name="Pesquisar" component={Pesquisar} />
      </Drawer.Navigator>

      <StatusBar style="auto" />
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
