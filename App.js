/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ToastAndroid,
  StatusBar,
} from 'react-native';

import NavigationBar from 'react-native-navbar-color';

import {
  AuthContext,
  NavigationsContext,
  DataContext,
} from './context/AuthContext';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native-safe-area-context';

import SplashScreen from './screen/SplashScreen';
import SignInScreen from './screen/SignInScreen';
import HomeScreen from './screen/HomeScreen';

import axios from 'axios';

import * as authService from './services/authService';

const Stack = createStackNavigator();

const App: () => React$Node = ({navigation}) => {
  const [isProfile, setViewProfile] = React.useState(false);
  const [data, setData] = React.useState({});

  const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const unsubscribe = NetInfo.addEventListener((state) => {
    if (state.isConnected) {
      console.log('Está conectado a internet');
    } else {
      return showToastWithGravity('Sin conexión a internet.');
    }
  });

  const [loginState, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            token: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            token: action.token,
            refreshToken: action.refreshToken,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            token: null,
            refreshToken: null,
            username: null,
            isLoading: false,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      token: null,
    },
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        unsubscribe();
        try {
          const res = await authService.postLogin(data.username, data.password);
          await AsyncStorage.setItem('token', res.data.token);
          await AsyncStorage.setItem('refreshToken', res.data.refreshToken);
          let token = await AsyncStorage.getItem('token');
          let refresh = await AsyncStorage.getItem('refreshToken');
          try {
            const res = await authService.getData();
            setData(res.data);
            await AsyncStorage.setItem(
              'username',
              res.data.username.toLowerCase(),
            );

            dispatch({
              type: 'SIGN_IN',
              isSignout: false,
              token: token,
              refreshToken: refresh,
            });
          } catch (e) {
            console.log('erorr 1');
          }
        } catch (e) {
          console.log(e.request.status);
        }
      },
      signOut: async () => {
        try {
          dispatch({type: 'SIGN_OUT'});
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('refreshToken');
          await AsyncStorage.removeItem('username');
          setViewProfile(false);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    [],
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem('token');
        console.log('TOKEN ACTUAL WAAOOOO  ');
        console.log(await AsyncStorage.getItem('token'));
      } catch (e) {
        //console.log(e.response.status || e.response);
      }
      dispatch({
        type: 'RESTORE_TOKEN',
        token: token,
      });
    };

    bootstrapAsync();

    //FOOTER
    NavigationBar.setColor('#181818');
    //TOP
    //NavigationBar.setStatusBarColor('#ffffff', false);
    //THEME ICONS TEL
    //NavigationBar.setStatusBarTheme('light', true);
  }, []);

  if (loginState.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationsContext.Provider value={[isProfile, setViewProfile]}>
        <DataContext.Provider value={{data, setData}}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.body}>
              <NavigationContainer>
                <StatusBar
                  barStyle="light-content"
                  backgroundColor="transparent"
                  translucent
                />
                {loginState.token ? <HomeScreen /> : <SignInScreen />}
              </NavigationContainer>
            </SafeAreaView>
          </SafeAreaProvider>
        </DataContext.Provider>
      </NavigationsContext.Provider>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default App;
