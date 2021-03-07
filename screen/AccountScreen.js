import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  AuthContext,
  NavigationsContext,
  DataContext,
} from '../context/AuthContext';

import * as authService from '../services/authService';

import moment from 'moment';
import 'moment/locale/es';
import 'moment-duration-format';
moment.locale('es');

const AccountScreen = ({navigation}) => {
  const [isProfile, setViewProfile] = React.useContext(NavigationsContext);
  const {signOut} = React.useContext(AuthContext);
  const {data, setData} = React.useContext(DataContext);

  const [time, setTime] = React.useState('');
  const [usuario, setUsuario] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const calculaDiferenciaDias = async () => {
    try {
      const res = await authService.getInfoXData(data.id);
      setUsuario(res.data);
      setLoading(false);
      if (res.data.terminaPlan) {
        let ini = moment().format('YYYY-MM-DD HH:mm:ss');
        let fin = moment(res.data.terminaPlan).format('YYYY-MM-DD HH:mm:ss');
        if (moment(ini).isSameOrAfter(fin)) {
          return setTime('Culminado');
        }
        let fecha1 = moment(ini);
        let fecha2 = moment(fin);
        let duration = moment.duration(fecha2.diff(fecha1));
        setTime(duration.format('D[d], H[h] m[m] s[s]'));
      }
    } catch (e) {
      //console.log(e.request);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(calculaDiferenciaDias, 1000);
    return () => clearInterval(interval);
  }, [usuario]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileAndMore')}>
            <AntDesign
              style={styles.iconLeft}
              name="arrowleft"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Cuenta</Text>
        </View>

        <View style={styles.containerOptions}>
          <View style={styles.containerOptionText}>
            <Text style={styles.textOptions}>Bienvenido {data.username}</Text>
          </View>
          {loading ? (
            <>
              <View style={styles.containerOptionText}>
                <Text style={styles.textOptions}>Cargando...</Text>
              </View>
            </>
          ) : (
            <>
              <View style={styles.containerOptionText}>
                {usuario.terminaPlan ? (
                  <>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.textOptions}>Termina en </Text>
                      <Text
                        style={{
                          ...styles.textOptions,
                          color: '#fff',
                          fontWeight: 'bold',
                        }}>
                        {time}
                      </Text>
                    </View>
                  </>
                ) : (
                  <Text></Text>
                )}
              </View>
              <View style={styles.containerOptionText}>
                {usuario.terminaPlan ? (
                  <>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.textOptions}>Tipo </Text>
                      <Text
                        style={{
                          ...styles.textOptions,
                          color: 'red',
                          fontWeight: 'bold',
                        }}>
                        {usuario.timeExpiration.name}
                      </Text>
                    </View>
                  </>
                ) : (
                  <Text></Text>
                )}
              </View>
            </>
          )}
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

export default AccountScreen;
