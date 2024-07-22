import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import More from '../components/more';

const ListCategory = () => {

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
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
    </View>
  );

  return (
    <>
      <More title='Danh mục'/>
      <View style={styles.container}>
        <FlatList 
          horizontal={true}
          data={listTest}
          renderItem={renderItem}
        />
        {/* <View style={styles.item}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  item: {
    marginRight: 5,
    width: 80,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 80,
  },
});

export default ListCategory;
