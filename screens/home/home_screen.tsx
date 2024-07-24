import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/header';
import ListCategory from './list_category';
import ListProduct from './list_product';

const HomeScreen = ({route}:any) => {

  // const {itemId, otherParams} = route.params

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <ListCategory />
        <ListProduct />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default HomeScreen;
