import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  InteractionManager,
  Keyboard,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {AuthContext} from '../context/AuthContext';

import {SafeAreaView} from 'react-native-safe-area-context';

const SignInScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const inputRef = React.createRef();

  const {signIn} = React.useContext(AuthContext);

  const focusInput = () => {
    InteractionManager.runAfterInteractions(() => {
      inputRef.current.focus();
    });
  };

  const loginUser = (username, password) => {
    Keyboard.dismiss();
    signIn(username, password);
  };

  React.useEffect(() => {
    focusInput();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxImage}>
          <Image
            style={styles.image}
            source={require('../assets/splash.png')}
          />
        </View>
        <View style={styles.boxInput}>
          <TextInput
            ref={inputRef}
            autoFocus
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#f4f4f4"
          />
        </View>
        <View style={styles.boxInput}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#f4f4f4"
            secureTextEntry
          />
        </View>

        <View>
          <Button
            onPress={() => loginUser({username, password})}
            type="outline"
            buttonStyle={styles.button}
            titleStyle={styles.textButton}
            title="Iniciar sesión"
          />
        </View>
        <View style={styles.footer}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000',
  },
  footer: {
    flex: 1,
    //backgroundColor: 'red',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 30,
  },
  boxImage: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 30,
  },
  image: {
    marginTop: 20,
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  boxInput: {
    marginBottom: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#181818',
    paddingLeft: 30,
    height: 75,
    fontSize: 25,
    color: '#f4f4f4',
  },
  textButton: {
    color: '#ffffff',
    fontSize: 27,
    marginVertical: 10,
  },
  button: {
    borderRadius: 8,
    marginTop: 0,
    borderColor: '#f6f6f6',
    //backgroundColor: '#bf050e',
  },
});

export default SignInScreen;
