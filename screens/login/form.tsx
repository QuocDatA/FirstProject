import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
const Form = ()=> {

    const [isCheck,setIsCheck] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [checkEmail,setCheckEmail] = useState(false);
    const [errorPassword,setErrorPassword] = useState('');

    const onSubmit = ()=> {
        let formData = {
            _email: email,
            _password: password,
            _isCheck: isCheck
        }

        let regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regexEmail.test(formData._email)) {
            setCheckEmail(false)
        }else {
            setCheckEmail(true)
        }

        formData._password === '' ? setErrorPassword('Password is not empty') : setErrorPassword('')
    }

    return (
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

                <View style={styles.group1}>
                    <View style={styles.groupCheckbox}>
                        <CheckBox 
                            disabled={false}
                            value={isCheck}
                            onValueChange={() => setIsCheck(!isCheck)} />
                        <Text>Remember me</Text>
                    </View>
                    <TouchableOpacity onPress={()=>Alert.alert('Navigation After')}>
                        <Text style={{color: 'blue'}}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>onSubmit()} style={styles.btn}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
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
    groupCheckbox: {
        flexDirection: 'row',
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

export default Form;