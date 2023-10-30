import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './views/Home';
import Header from './components/Header';
import Mangas from './views/Mangas';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// <View style={styles.container}>
//   <Header />
//   <Home />
//   <Mangas/>
// </View>

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        // title:'My App',
        // header:()=><Header/>
        // headerShown:false
      }}>
        <Stack.Screen name='Home' component={Home} options={{
          headerRight: () => <Image style={{ width: 20, height: 22, marginHorizontal:20 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }} />
        }} />
        <Stack.Screen name='Mangas' component={Mangas} options={{
          headerRight: () => <Image style={{ width: 20, height: 20, marginHorizontal:20 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2702/2702134.png' }} />
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

});
