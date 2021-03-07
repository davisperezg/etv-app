import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotificationsScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>NOTIFY!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default NotificationsScreen;
