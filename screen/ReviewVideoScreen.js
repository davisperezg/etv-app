import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';

import {ViewVideoContext, VideoDataContext} from '../context/AuthContext';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TabsEpisodes from '../components/TabsEpisodes';

const {width, height} = Dimensions.get('window');

const ReviewVideoScreen = () => {
  const [isViewVideo, setViewPreviewVideo] = React.useContext(ViewVideoContext);

  const {videoData, setVideoData} = React.useContext(VideoDataContext);

  console.log('hola', videoData);
  /**
   * <TouchableNativeFeedback onPress={() => setViewPreviewVideo(false)}>
          <Text style={{color: '#fff'}}>ReviewVideo!</Text>
        </TouchableNativeFeedback>
   */
  return (
    <>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={{width: width, height: 300, resizeMode: 'cover'}}
          source={{
            uri:
              'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg',
          }}>
          <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <TouchableWithoutFeedback>
              <View>
                <FontAwesome
                  style={{opacity: 0.7, backgroundColor: 'transparent'}}
                  name="play-circle"
                  size={90}
                  color="#fff"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
        <View style={styles.descriptionContainer}>
          <View style={styles.subtitle}>
            <Text style={[styles.text, styles.subTitleText]}>2020</Text>
            <Text style={[styles.text, styles.subTitleText]}>20 Episodios</Text>
            <Text style={[styles.text, styles.subTitleText]}>1 Temporada</Text>
          </View>
          <View style={styles.description}>
            <Text style={[styles.text]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              pariatur molestiae sint, facilis quo aliquam natus blanditiis
              dolores odit praesentium, dicta doloremque assumenda cupiditate.
              Voluptates ullam non quibusdam fugiat quod!
            </Text>
          </View>
          <Text style={[styles.text]}>Cast: YO</Text>
          <Text style={[styles.text]}>Creador: YO</Text>
          <View style={styles.shareListIcons}>
            <View style={styles.myListIcon}>
              <Ionicons
                style={styles.listIcon}
                name="md-checkmark"
                color="grey"
                size={25}
              />
              <Text style={styles.text}>Mi lista</Text>
            </View>
            <View style={styles.myShareIcon}>
              <Ionicons
                style={styles.shareIcon}
                name="md-checkmark"
                color="grey"
                size={25}
              />
              <Text style={styles.text}>Compartir.</Text>
            </View>
          </View>
        </View>
        <TabsEpisodes />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    //backgroundColor: '#181818',
  },
  nameContainer: {
    backgroundColor: 'transparent',
  },
  header: {
    backgroundColor: '#181818',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 10,
    zIndex: 2,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  headerWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDown: {
    marginLeft: 5,
  },
  titleShow: {
    fontSize: 35,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'white',
  },

  thumbnail: {
    width: width,
    height: 300,
  },
  buttonPlay: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  iconPlay: {
    opacity: 0.7,
    backgroundColor: 'transparent',
  },
  descriptionContainer: {
    paddingHorizontal: 20,
  },
  subtitle: {
    flexDirection: 'row',
  },
  subTitleText: {
    marginRight: 20,
  },
  text: {
    color: '#b3b3b3',
    fontSize: 16,
  },
  shareListIcons: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  listIcon: {
    height: 25,
  },
  shareIcon: {
    height: 25,
  },
  myListIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
  },
  myShareIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginVertical: 10,
  },
  light: {
    fontWeight: '200',
  },
});

export default ReviewVideoScreen;
