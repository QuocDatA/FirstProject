import React from "react";
import More from "../components/more";
import { Image, StyleSheet, Text, View } from "react-native";

const ListProduct = ()=> {
    return (
        <>
            <More title={"Sản phẩm"} />
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.image}/>
                    <View style={styles.sale}>
                        <Text style={{color: 'white'}}>Sale 30%</Text>
                    </View>
                    <View style={styles.desc}>
                        <Text style={styles.desc_text}>Demo</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.image}/>
                    <View style={styles.desc}>
                        <Text style={styles.desc_text}>Demo</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.image}/>
                    <View style={styles.desc}>
                        <Text style={styles.desc_text}>Demo</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.image}/>
                    <View style={styles.desc}>
                        <Text style={styles.desc_text}>Demo</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    item: {
        width: '45%',
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: 150
    },
    desc: {
        backgroundColor: 'black',
        paddingVertical: 8
    },
    desc_text: {
        color: 'white',
        textAlign: 'center'
    },
    sale: {
        backgroundColor: 'grey',
        width: '50%',
        position: 'absolute',
        top: 10,
        right: 10,
        alignItems: 'center',
        padding: 7
    }
})

export default ListProduct;