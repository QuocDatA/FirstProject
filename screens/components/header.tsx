import React from "react";
import { Image, StyleSheet, Text, View } from "react-native"

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>MoSoftVN</Text>
            </View>
            <View>
                <Image source={require('../../assets/images/logo.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: 'red',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase'
    }
})

export default Header;