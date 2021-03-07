import React from 'react';
import {Image} from 'react-native';

export const Logo = ({props}) => {
  return (
    <>
      <Image style={props} source={require('../assets/splash.png')} />
    </>
  );
};
