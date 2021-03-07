import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MoviesItem = ({peli, setInfo, isInfo, setVideo}) => {
  const showInfoMoreData = () => {
    setInfo(!isInfo);
    setVideo(peli);
  };

  return (
    <>
      <TouchableWithoutFeedback
        key={peli._id}
        onPress={() => showInfoMoreData()}>
        <View style={styles.boxImage}>
          <Image source={{uri: peli.image}} style={styles.imageCaratula} />
        </View>
      </TouchableWithoutFeedback>
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

export default MoviesItem;
