import React from "react";
import { SafeAreaView, StatusBar, StyleSheet} from "react-native";
import Title from "./title";
import Form from "./form";

const LoginScreen = ({navigation}:any)=> {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'}></StatusBar>
            <Title/>
            <Form navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingTop: 50
    }
})

export default LoginScreen;