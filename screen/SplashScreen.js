import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const SplashScreen = () => {
  return (
    <>
      <View style={styles.center}>
        <Image style={styles.image} source={require('../assets/splash.png')} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 250,
    height: 130,
  },
});

export default SplashScreen;
