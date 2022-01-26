import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

import bgImage from './assets/loginBackground.jpg';
import logo from './assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: WIDTH } = Dimensions.get('window')
const myColors = {
  primary: 'rgba(0,0,0,0.8)',
  secondary: 'rgba(255,255,255, 0.30)',
  btn1: 'rgba(230, 9, 101, 0.9)'
}

export default function App() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <TextInput style={styles.logoText}>Wedding Invitation</TextInput>
      </View>

      <View style={styles.inputContainer}>
        <Icon
          name={'user-circle'}
          size={25}
          color={myColors.primary}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={myColors.primary}
          underlineColorAndroid='transparent' />
      </View>

      <View style={styles.inputContainer}>
        <Icon
          name={'key'}
          size={25}
          color={myColors.primary}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={myColors.primary}
          underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.btnEye}>
          <Icon name={'eye'}
            size={25}
            color={myColors.primary} />
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Login</Text>
      </TouchableOpacity>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: 'center'
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    opacity: 0.6
  },
  input: {
    width: WIDTH - 60,
    height: 50,
    borderRadius: 25,
    fontSize: 15,
    paddingLeft: 45,
    backgroundColor: myColors.secondary,
    color: myColors.primary,
    marginHorizontal: 25

  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 38
  },
  inputContainer: {
    marginTop: 15
  },
  btnEye: {
    position: 'absolute',
    top: 10,
    right: 50
  },
  btnLogin: {
    width: WIDTH - 60,
    height: 45,
    borderRadius: 25,
    backgroundColor: myColors.btn1,
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 25
  },
  txtLogin: {
    color: myColors.primary,
    fontSize: 18,
    textAlign: 'center',
  }

});
