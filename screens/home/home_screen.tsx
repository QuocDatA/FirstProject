import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Header from "../components/header";
import ListCategory from "./list_category";
import ListProduct from "./list_product";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <ListCategory/>
            <ListProduct/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15
    }
})

export default HomeScreen;