import React from 'react';
import {View, Text} from 'react-native';

import VideosScreen from '../screen/VideosScreen';
import MyListScreen from '../screen/MyListScreen';
import NotificationsScreen from '../screen/NotificationsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HomeNavigator,
  MyListNavigation,
  NotifyNavigator,
} from '../stackNavigation/ListNavigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Footer = ({navigation}) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Videos"
        tabBarOptions={{
          activeTintColor: '#ffffff',
          style: {
            backgroundColor: '#181818',
            borderTopColor: '#181818',
            height: 60,
          },
          //activeBackgroundColor: '#000000',
        }}>
        <Tab.Screen
          name="Videos"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({color, size, focused}) => {
              if (focused) {
                return (
                  <Ionicons
                    style={{marginTop: 15}}
                    name="ios-home-sharp"
                    size={30}
                    color="#f4f4f4"
                  />
                );
              } else {
                return (
                  <Ionicons
                    style={{marginTop: 15}}
                    name="ios-home-outline"
                    size={30}
                    color="#8E8E8F"
                  />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="List"
          component={MyListNavigation}
          options={{
            tabBarLabel: 'Mi lista',
            tabBarIcon: ({color, size, focused}) => {
              if (focused) {
                return (
                  <Ionicons
                    style={{marginTop: 15}}
                    name="ios-list-sharp"
                    size={30}
                    color="#f4f4f4"
                  />
                );
              } else {
                return (
                  <Ionicons
                    style={{marginTop: 15}}
                    name="ios-list-outline"
                    size={30}
                    color="#8E8E8F"
                  />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotifyNavigator}
          options={{
            tabBarLabel: 'Notificaciones',
            tabBarIcon: ({color, size, focused}) => {
              if (focused) {
                return (
                  <Ionicons
                    style={{marginTop: 15}}
                    name="ios-play-circle-sharp"
                    size={30}
                    color="#f4f4f4"
                  />
                );
              } else {
                return (
                  <Ionicons
                    style={{marginTop: 15}}
                    name="ios-play-circle-outline"
                    size={30}
                    color="#8E8E8F"
                  />
                );
              }
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Footer;
