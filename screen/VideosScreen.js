import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import * as videoService from '../services/videoService';
import {VideoDataContext, ViewVideoContext} from '../context/AuthContext';

import {createStackNavigator} from '@react-navigation/stack';

import MoviesItem from '../components/MoviesItem';

const Stack = createStackNavigator();

const VideosScreen = () => {
  const [favorite, setFavorite] = React.useState(false);
  const [isInfo, setInfo] = React.useState(false);
  const [isViewVideo, setViewPreviewVideo] = React.useContext(ViewVideoContext);
  const {videoData, setVideoData} = React.useContext(VideoDataContext);

  const [long, setLong] = React.useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.Qsdsaduam dolorum voluptatem cumque! Illo, inventore aspernaturveritatis itaque modi facilis?',
  );
  const [videos, setVideos] = React.useState([]);
  const [video, setVideo] = React.useState({});
  const [serie, setSerie] = React.useState({});

  const getVideoAndViewVideo = () => {
    setViewPreviewVideo(true);
    setVideoData(video);
  };

  const listVideoPeli = async () => {
    try {
      const res = await videoService.getVideos();
      setVideos(res.data);
    } catch (e) {
      console.log('unantharize');
    }
  };

  React.useEffect(() => {
    listVideoPeli();
  }, []);

  const image = {
    uri:
      'https://occ-0-812-1740.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc6_22HGgprWkFACrECzIDDnvByusP7wrFJ1mNqmw1S0Rp2-4z_kWEbkBtVme1ZPeRp40rj7L2H3dz_MkPuLdLP12qvk.webp?r=7db',
  };
  const image2 = {
    uri:
      'https://occ-0-812-1740.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc6_22HGgprWkFACrECzIDDnvByusP7wrFJ1mNqmw1S0Rp2-4z_kWEbkBtVme1ZPeRp40rj7L2H3dz_MkPuLdLP12qvk.webp?r=7db',
  };
  //source={require('../assets/elpatron.png')}
  return (
    <>
      {/**MOSTRAR CARATULA MÁS VISTA CON OPCIONES*/}
      <ScrollView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <TouchableWithoutFeedback onPress={() => setInfo(!isInfo)}>
            <LinearGradient
              style={styles.linearGradient}
              locations={[0, 0.2, 0.6, 0.93]}
              colors={[
                'rgba(0,0,0,0)',
                'rgba(0,0,0,0)',
                'rgba(0,0,0,0.5)',
                'rgba(0,0,0,1)',
              ]}>
              <View style={styles.containerTypeVideo}>
                <TouchableOpacity>
                  <Text style={styles.textTypeVideo}>Peliculas</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.textTypeVideo}> Series</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.textTypeVideo}>En vivo</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.containerGenres}>
                <View style={styles.genres}>
                  <Text style={styles.textTag}>Distopico</Text>
                  <View style={styles.separator} />
                  <Text style={styles.textTag}>Violento</Text>
                  <View style={styles.separator} />
                  <Text style={styles.textTag}>TV de ciencia ficcion</Text>
                  <View style={styles.separator} />
                  <Text style={styles.textTag}>Accion</Text>
                  <View style={styles.separator} />
                  <Text style={styles.textTag}>Terror</Text>
                  <View style={styles.separator} />
                  <Text style={styles.textTag}>Motivacioon</Text>
                </View>
              </View>
              <View style={styles.containerTagOptions}>
                <View style={styles.tagOptions}>
                  <View style={styles.optionsList}>
                    {favorite ? (
                      <TouchableNativeFeedback
                        onPress={() => setFavorite(false)}>
                        <View style={{marginBottom: 5}}>
                          <Ionicons
                            //style={{left: 10, padding: 10}}
                            name="checkmark-sharp"
                            color="#fff"
                            size={20}
                          />
                        </View>
                      </TouchableNativeFeedback>
                    ) : (
                      <TouchableNativeFeedback
                        onPress={() => setFavorite(true)}>
                        <View style={{marginBottom: 5}}>
                          <Entypo
                            //style={{left: 10, padding: 10}}
                            name="plus"
                            color="#fff"
                            size={20}
                          />
                        </View>
                      </TouchableNativeFeedback>
                    )}
                    <Text style={styles.textTagOptionList}>Mi lista</Text>
                  </View>
                  <TouchableNativeFeedback>
                    <View style={styles.buttonPlay}>
                      <FontAwesome5
                        style={{left: 5, padding: 10}}
                        name="play"
                        color="#000"
                        size={20}
                      />
                      <Text style={styles.textTagOptions}>Reproducir</Text>
                    </View>
                  </TouchableNativeFeedback>

                  <View style={styles.optionsInfo}>
                    <TouchableNativeFeedback onPress={() => setInfo(true)}>
                      <View style={{marginBottom: 5}}>
                        <MaterialIcons
                          //style={{left: 10, padding: 10}}
                          name="info-outline"
                          color="#fff"
                          size={25}
                        />
                      </View>
                    </TouchableNativeFeedback>
                    <Text style={styles.textTagOptionInfo}>Información</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </ImageBackground>
        {/**MOSTRAR CARATULAS PELICULAS*/}
        <View style={styles.containerVideos}>
          <Text style={{...styles.titleCaratula}}>Peliculas</Text>
          {/**INICIA IMAGENES PELICULAS*/}
          <View style={styles.directionHorizontal}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {videos.map((peli) => {
                return (
                  <MoviesItem
                    key={peli._id}
                    peli={peli}
                    setInfo={setInfo}
                    isInfo={isInfo}
                    setVideo={setVideo}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      {/**MOSTRAR INFO AL SELECCIONAR VIDEO */}
      {isInfo ? (
        <>
          <View style={styles.containerInfo}>
            <View style={styles.closeInfo}>
              <TouchableNativeFeedback onPress={() => setInfo(false)}>
                <EvilIcons name="close" color="#fff" size={30} />
              </TouchableNativeFeedback>
            </View>
            <TouchableNativeFeedback onPress={() => getVideoAndViewVideo()}>
              <View //CARATULA
                style={styles.caratula}>
                <Image
                  source={{uri: video.image}}
                  style={styles.imageCaratula}
                />
              </View>
            </TouchableNativeFeedback>
            <View style={styles.infoCaratula}>
              <TouchableWithoutFeedback onPress={() => getVideoAndViewVideo()}>
                <View style={styles.containerInfoCaratula}>
                  <Text style={styles.titleCaratula}>{video.title}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textInfoCaratula}>{video.year}</Text>
                    {/**MOSTRAR TEMPORADA SOLO PARA SERIES */}
                    {Object.entries(serie).length === 0 ? (
                      <></>
                    ) : (
                      <Text style={styles.textInfoCaratula}>
                        {serie.season.name}
                      </Text>
                    )}

                    <Text style={styles.textInfoCaratula}>
                      {video.duration}min
                    </Text>
                  </View>
                  <View style={styles.descriptionCaratula}>
                    <Text style={styles.textDescriptionCaratula}>
                      {video.description.length > 139
                        ? video.description.substring(120, 0) + '...'
                        : video.description}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>

            <View //INICIA BOTON
              style={styles.containerButtonVerCaratula}>
              <View style={styles.buttonVerCaratula}>
                <TouchableNativeFeedback>
                  <View style={styles.containerIconTextButtonCaratula}>
                    <FontAwesome5
                      style={{padding: 10}}
                      name="play"
                      color="#000"
                      size={20}
                    />
                    <Text style={styles.textButtonVerCaratula}>Ver</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerInfo: {
    backgroundColor: '#181818',
    position: 'absolute',
    width: '100%',
    height: 224,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },

  containerVideos: {flex: 1, marginHorizontal: 10, marginBottom: 30},
  directionHorizontal: {flexDirection: 'row', marginBottom: 20},
  containerInfoCaratula: {width: 200, height: 150},
  textButtonVerCaratula: {fontWeight: 'bold', fontSize: 25},
  containerIconTextButtonCaratula: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonVerCaratula: {
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 1,
  },
  containerButtonVerCaratula: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    padding: 10,
  },
  textDescriptionCaratula: {color: '#fff'},
  descriptionCaratula: {
    flex: 1,
    width: 240,
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textInfoCaratula: {color: '#777', fontSize: 13, marginRight: 20},
  titleCaratula: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoCaratula: {
    position: 'absolute',
    top: 10,
    left: '32%',
  },
  caratula: {
    borderRadius: 6,
    height: 150,
    marginTop: 10,
    marginLeft: 10,
    width: '25%',
    overflow: 'hidden',
  },
  imageCaratula: {flex: 1, resizeMode: 'cover'},
  closeInfo: {
    position: 'absolute',
    right: 5,
    top: 5,
    bottom: 0,
    height: 22,
    zIndex: 1,
  },
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  linearGradient: {
    height: '100%',
  },
  containerTypeVideo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    padding: 55,
  },
  textTypeVideo: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 0.1,
  },
  containerGenres: {
    flexDirection: 'row',
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 140,
  },
  genres: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  containerTagOptions: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 90,
  },
  tagOptions: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textTagOptions: {
    color: '#000',
    fontWeight: 'bold',
    padding: 8,
    fontSize: 18,
  },
  textTagOptionInfo: {
    color: '#fff',
    fontSize: 10,
  },
  textTagOptionList: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
  buttonPlay: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#000000',
    flexDirection: 'row',
    width: 150,
    left: 15,
  },
  optionsList: {
    left: 50,
    alignItems: 'center',
  },
  optionsInfo: {
    right: 25,
    alignItems: 'center',
  },
  separator: {
    width: 3,
    height: 3,
    backgroundColor: '#e8e8e8',
    marginTop: 15,
    borderRadius: 3,
  },
  textTag: {
    color: '#fff',
    padding: 8,
    fontSize: 13,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: (Dimensions.get('window').height * 81) / 110,
  },
});

export default VideosScreen;
