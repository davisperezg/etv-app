import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyListScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Hi!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default MyListScreen;
