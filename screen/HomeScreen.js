import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  AuthContext,
  NavigationsContext,
  VideoDataContext,
  ViewVideoContext,
} from '../context/AuthContext';

import {useNetInfo} from '@react-native-community/netinfo';
import {createStackNavigator} from '@react-navigation/stack';

import Footer from '../components/Footer';

import ProfileScreen from './ProfileScreen';
import AccountScreen from './AccountScreen';

import VideoPlayer from 'react-native-video-controls';
import ReviewVideoScreen from './ReviewVideoScreen';
import VideoPlayerScreen from './VideoPlayerScreen';

const Home = createStackNavigator();

const screenOptionStyle = {
  headerTransparent: true,
  headerShown: false,
};

const HomeScreen = () => {
  const netInfo = useNetInfo();
  const [isProfile] = React.useContext(NavigationsContext);
  const [isViewVideo, setViewPreviewVideo] = React.useState(false);
  const [videoData, setVideoData] = React.useState({});
  /*
  *<View>
          <Text>Signed in!</Text>
          <Button title="Sign out" onPress={signOut} />
        </View>
   */

  return (
    <>
      <ViewVideoContext.Provider value={[isViewVideo, setViewPreviewVideo]}>
        <VideoDataContext.Provider value={{videoData, setVideoData}}>
          {isProfile ? (
            <>
              <Home.Navigator screenOptions={screenOptionStyle}>
                <Home.Screen name="ProfileAndMore" component={ProfileScreen} />
                <Home.Screen name="Account" component={AccountScreen} />
              </Home.Navigator>
            </>
          ) : (
            <>
              {isViewVideo ? (
                <>
                  <Home.Navigator screenOptions={screenOptionStyle}>
                    <Home.Screen
                      name="ViewVideo"
                      component={ReviewVideoScreen}
                    />
                    <Home.Screen
                      name="VideoPlayer"
                      component={VideoPlayerScreen}
                    />
                  </Home.Navigator>
                </>
              ) : (
                <>
                  <Footer />
                </>
              )}
            </>
          )}
        </VideoDataContext.Provider>
      </ViewVideoContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    color: '#fff',
  },
  containerTitle: {flexDirection: 'row', marginRight: 10},
});

export default HomeScreen;
