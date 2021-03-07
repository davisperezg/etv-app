import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const VivoItem = () => {
  return (
    <>
      <View style={styles.boxImage}>
        <Image source={{uri: video.image}} style={styles.imageCaratula} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boxImage: {
    backgroundColor: '#181818',
    width: 94,
    height: 150,
    borderRadius: 6,
    marginRight: 15,
    overflow: 'hidden',
  },
  imageCaratula: {flex: 1, resizeMode: 'cover'},
});
export default VivoItem;
