import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.title_text}>Login</Text>
      <Text>By signing in you are agreeing</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>our </Text>
        <TouchableOpacity onPress={() => Alert.alert('Navigation After')}>
          <Text style={{color: 'blue'}}>Term and privacy policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        alignItems: 'center'
    },
    title_text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20
    },
});

export default Title;
