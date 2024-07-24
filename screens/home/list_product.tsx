import React, {useEffect, useState} from 'react';
import More from '../components/more';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import Waiting from '../components/waiting';

const ListProduct = () => {
  const [games, setGames] = useState();
  const [isLoading, setLoading] = useState(true);

  const getApi = async () => {
    try {
      const response = await fetch(
        'https://66a0a96b7053166bcabc32a4.mockapi.io/product',
      );
      const data = await response.json();
      setGames(data);
      console.log(data[0].avatar);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <FastImage source={{uri: item.avatar}} style={styles.image} />
      <View style={styles.desc}>
        <Text style={styles.desc_text}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <>
      <More title={'Sản phẩm'} />
      <View style={styles.container}>
        {isLoading ? (
          <Waiting />
        ) : (
          <FlatList
            columnWrapperStyle={styles.row}
            numColumns={2}
            scrollEnabled={false}
            data={games}
            renderItem={renderItem}
          />
        )}
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
