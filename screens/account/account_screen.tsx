import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AccountScreen = ({navigation}:any) => {
    return (
        <>
            <SafeAreaView>
                <View style={styles.containerHead}>
                    <TouchableOpacity style={styles.contentHead} onPress={()=>navigation.navigate('login')}><Text>Login</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.contentHead} onPress={()=>navigation.navigate('register')}><Text>Register</Text></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity><Text>History</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Waiting payment</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Waiting transport</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Order</Text></TouchableOpacity>   
                    <TouchableOpacity><Text>Deliveried</Text></TouchableOpacity>   
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    containerHead: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        marginBottom: 20
    },
    contentHead: {
        padding: 15,
        backgroundColor: '#27B7C0',
        borderRadius: 10
    }
})

export default AccountScreen;