import React, { useState } from "react";
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import axios from 'axios';
const RegisterScreen = ({navigation}:any)=> {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [checkEmail,setCheckEmail] = useState(false);
    const [errorPassword,setErrorPassword] = useState('');

    const onSubmit = ()=> {
        let formData = {
            email: email,
            password: password
        }

        let regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regexEmail.test(formData.email)) {
            setCheckEmail(false)
            axios.post('https://66a0a96b7053166bcabc32a4.mockapi.io/account', formData).then((response)=> {
                if(response.data) {
                    Alert.alert('Register Successfully! Please move to Login page!')
                    navigation.navigate('login')
                }
            }).catch((err)=>{
                console.log(err)
            })
        }else {
            setCheckEmail(true)
        }

        formData.password === '' ? setErrorPassword('Password is not empty') : setErrorPassword('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'}></StatusBar>
            <View style={styles.ctnTxtReg}>
                <Text style={styles.txtReg}>REGISTER</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.group}>
                    <Icon name="email" style={styles.icon} />
                    <TextInput placeholder='Email Address' style={styles.ip} onChangeText={(value)=>setEmail(value)} />
                    <Text style={{color: 'red'}}>{checkEmail ? 'Format email is wrong' : ''}</Text>
                </View>

                <View style={styles.group}>
                    <Icon name="locked" style={styles.icon} />
                    <TextInput placeholder='Password' style={styles.ip} secureTextEntry={true} onChangeText={(value)=>setPassword(value)}/>
                    <Text style={{color: 'red'}}>{errorPassword}</Text>
                </View>
                <TouchableOpacity onPress={()=> onSubmit()} style={styles.btn}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingTop: 50
    },
    ctnTxtReg: {
        alignItems: 'center'
    },
    txtReg: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 50,
        color: 'black',
        fontWeight: 'bold'
    },
    form: {
        marginTop: 20
    },
    group: {
        marginTop: 15
    },
    ip: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingLeft: 35
    },
    icon: {
        fontSize: 25,
        position: 'absolute',
        top: 10
    },
    group1: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        marginTop: 30,
        backgroundColor: 'blue', 
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10
    }
})

export default RegisterScreen;