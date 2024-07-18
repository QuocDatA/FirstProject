import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const TestFlatList = () => {
  const listTest = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
  ];

  const renderItem = ({}) => (
    <View style={styles.item}>
      <Image source={require('../assets/images/logo.png')}></Image>
      <Text>AAA</Text>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList 
        data={listTest} 
        renderItem={renderItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  item: {
    height: 200,
    width: 100
  },
  title: {

  }
});

export default TestFlatList;
