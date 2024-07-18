import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import More from '../components/more';

const ListCategory = () => {
  return (
    <>
      <More title='Danh mục'/>
      <View style={styles.container}>
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
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: '20%',
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
