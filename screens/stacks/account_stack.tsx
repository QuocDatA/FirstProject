import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../login/login_screen";
import RegisterScreen from "../register/register_screen";
import AccountScreen from "../account/account_screen";

const Stack = createNativeStackNavigator();

const AccountStack = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen name="acc" component={AccountScreen} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="login" component={LoginScreen} options={{headerTitle: ''}}></Stack.Screen>
            <Stack.Screen name="register" component={RegisterScreen} options={{headerTitle: ''}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AccountStack;