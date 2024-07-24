import React from "react";
import HomeScreen from "./screens/home/home_screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AccountScreen from "./screens/account/account_screen";
import AccountStack from "./screens/stacks/account_stack";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName:string = ''
          if(route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline'
          }else if(route.name === 'account') {
            iconName = focused ? 'person-circle' : 'person-circle-outline'
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        }
      })}>
        <Tab.Screen name="home" component={HomeScreen} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="account" component={AccountStack} options={{headerShown: false}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;