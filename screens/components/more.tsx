import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type MoreProps = {
    title:string
}

const More = ({title}: MoreProps) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.txtLeft}>{title}</Text>
        </View>
        <View>
          <Text style={styles.txtRight}>Xem thêm</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtLeft: {
        color: 'red',
        fontWeight: 'bold'
    },
    txtRight: {
        color: 'black',
        fontWeight: 'bold'
    },
})

export default More;
