import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/Screens/home";
import Plants from './src/Screens/plants'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon:({})=>(
          <Entypo name="home" size={24} color="black" />
        )
      }}/>
      <Tab.Screen name="Plants" component={Plants} options={{
        tabBarIcon:({})=>(
          <FontAwesome6 name="plant-wilt" size={24} color="black" />
        )
      }} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"white",
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
