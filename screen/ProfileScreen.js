import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext, NavigationsContext} from '../context/AuthContext';

import * as authService from '../services/authService';

const ProfileScreen = ({navigation}) => {
  const [isProfile, setViewProfile] = React.useContext(NavigationsContext);
  const {signOut} = React.useContext(AuthContext);

  React.useEffect(() => {
    //getDataUser();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <TouchableOpacity onPress={() => setViewProfile(false)}>
            <AntDesign
              style={styles.iconLeft}
              name="arrowleft"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Perfil y más</Text>
        </View>

        <View style={styles.containerOptions}>
          <View style={styles.containerOptionText}>
            <TouchableOpacity
              onPress={() => {
                //setViewProfile(false);
                setViewProfile(false);
              }}>
              <Text style={styles.textOptions}>Mi lista</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOptionText}>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
              <Text style={styles.textOptions}>Cuenta</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOptionText}>
            <TouchableOpacity onPress={() => signOut()}>
              <Text style={styles.textOptions}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containerTitle: {
    flexDirection: 'row',
  },
  iconLeft: {
    marginLeft: 20,
    marginTop: 20,
  },
  textTitle: {
    marginLeft: 35,
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  textOptions: {
    color: '#f4f4f4',
    fontSize: 25,
  },
  containerOptions: {
    marginLeft: 20,
    marginTop: 30,
  },
  containerOptionText: {
    marginBottom: 10,
  },
});

export default ProfileScreen;
