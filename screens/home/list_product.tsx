import React from 'react';
import More from '../components/more';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const ListProduct = () => {
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
      <View style={styles.desc}>
        <Text style={styles.desc_text}>Demo</Text>
      </View>
    </View>
  );

  return (
    <>
      <More title={'Sản phẩm'} />
      <View style={styles.container}>
        <FlatList
          columnWrapperStyle={styles.row}
          numColumns={2}
          scrollEnabled={false}
          data={listTest}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    width: '45%',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
  },
  desc: {
    backgroundColor: 'black',
    paddingVertical: 8,
  },
  desc_text: {
    color: 'white',
    textAlign: 'center',
  },
  sale: {
    backgroundColor: 'grey',
    width: '50%',
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
    padding: 7,
  },
});

export default ListProduct;
