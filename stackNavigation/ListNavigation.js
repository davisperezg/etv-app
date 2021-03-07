import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import MyListScreen from '../screen/MyListScreen';
import NotificationsScreen from '../screen/NotificationsScreen';

import {Logo} from '../components/Image';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import VideosScreen from '../screen/VideosScreen';

import {NavigationsContext} from '../context/AuthContext';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTransparent: true,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: 'white',
};

export const HomeNavigator = () => {
  const [isProfile, setViewProfile] = React.useContext(NavigationsContext);

  return (
    <Stack.Navigator
      screenOptions={{
        ...screenOptionStyle,
        headerTitle: () => <Logo props={styles.imageLogo} />,
      }}>
      <Stack.Screen
        name="Mi lista"
        component={VideosScreen}
        options={{
          headerRight: () => {
            return (
              <>
                <View style={styles.containerRight}>
                  <TouchableOpacity onPress={() => console.log('botate')}>
                    <Feather
                      style={{marginRight: 20}}
                      name="search"
                      size={25}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setViewProfile(true)}>
                    <Ionicons name="ios-person-sharp" size={25} color="#fff" />
                  </TouchableOpacity>
                </View>
              </>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export const MyListNavigation = ({navigation}) => {
  const [isProfile, setViewProfile] = React.useContext(NavigationsContext);

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Mi lista"
        component={MyListScreen}
        options={{
          headerRight: () => {
            return (
              <>
                <View style={styles.containerRight}>
                  <TouchableOpacity onPress={() => console.log('botate')}>
                    <Feather
                      style={{marginRight: 20}}
                      name="search"
                      size={25}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setViewProfile(true)}>
                    <Ionicons name="ios-person-sharp" size={25} color="#fff" />
                  </TouchableOpacity>
                </View>
              </>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
//#8E8E8F
export const NotifyNavigator = () => {
  const [isProfile, setViewProfile] = React.useContext(NavigationsContext);

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Notificaciones"
        component={NotificationsScreen}
        options={{
          headerRight: () => {
            return (
              <>
                <View style={styles.containerRight}>
                  <TouchableOpacity onPress={() => console.log('botate')}>
                    <Feather
                      style={{marginRight: 20}}
                      name="search"
                      size={25}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setViewProfile(true)}>
                    <Ionicons name="ios-person-sharp" size={25} color="#fff" />
                  </TouchableOpacity>
                </View>
              </>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  imageLogo: {resizeMode: 'contain', width: 50, height: 50},
  containerRight: {flexDirection: 'row', marginRight: 10},
});
