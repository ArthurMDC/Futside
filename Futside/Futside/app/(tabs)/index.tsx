import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar, Linking } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { LinearGradient } from 'expo-linear-gradient';



const LogInUsurio = () => {
  const Bola: number = require('../../assets/Bola.png');
  const googleImg: number = require('../../assets/google.png');
  const faceImg: number = require('../../assets/facebook.png');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handlePress = async () => {
    const url = 'https://accounts.google.com/?hl=pt-br';

    
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Não é possível abrir o link");
      }
    } catch (error) {
      console.error("Erro ao abrir o link:", error);
    }
  };
  const handlePress2 = async () => {
    const url = 'https://en-gb.facebook.com/';

    
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Não é possível abrir o link");
      }
    } catch (error) {
      console.error("Erro ao abrir o link:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (

    <SafeAreaView style={styles.fundo}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Image style={{ height: 180, width: 220, alignSelf: "center", marginTop: 30, marginBottom: 20 }} resizeMode="cover" source={Bola} />
      </View>

      <View style={styles.container}>
        <View style={styles.ola}>
          <Text style={{ fontSize: 27, fontWeight: 600 }}>Olá,</Text>
          <Text style={{ color: '#639f7b', fontSize: 27, fontWeight: 600 }}> Jogador!</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <View style={{ width: '60%', }}>
            <Text style={{ fontSize: 25, alignSelf: 'flex-end', fontWeight: 600, }}>Entrar</Text>
          </View>

          <View style={{ width: '40%' }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: '#639f7b', alignSelf: 'flex-end' }}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View>
          <TextInput
            placeholder="Aaaaaaaaaaaa@gmail.com"
            style={styles.email}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <View style={{ width: '70%' }}>
            <TextInput
              placeholder="**********"
              secureTextEntry={!isPasswordVisible}
              style={styles.senha}
            />
          </View>
          <View style={styles.fundoMostrar}>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text style={{ color: '#639f7b' }}>Mostrar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 10}}>
          <Text style={{ color: '#639f7b' }}>Esqueceu a senha ?</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.entrar}>
          <LinearGradient colors={['#dfca4d', '#39a277']} style={styles.gradient}  start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
            <Text style={{color: 'white', fontWeight: 500, fontSize: 16}}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{ alignSelf: 'center', marginBottom: 10 }}>
          <Text style={{ color: '#639f7b', fontSize: 18 }}>Entre com</Text>
        </View>


        <View style={styles.botoes}>
          <TouchableOpacity style={styles.google} onPress={handlePress}>
            <Image source={googleImg} style={{ height: 20, width: 20 }} />
            <Text>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebook} onPress={handlePress2}>
            <Image source={faceImg} style={{ height: 20, width: 20 }} />
            <Text>Facebook</Text>
          </TouchableOpacity>
        </View>


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: 'white',
    flex: 1
  },
  container: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  ola: {
    flexDirection: 'row',
    marginBottom: 28
  },
  email: {
    backgroundColor: '#e5e5e5',
    color: 'black',
    height: 50,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 15
  },
  senha: {
    backgroundColor: '#e5e5e5',
    color: 'black',
    height: 50,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 15
  },
  fundoMostrar: {
    backgroundColor: '#e5e5e5',
    width: '30%',
    height: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entrar: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 15
  },
  botoes: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 20
  },
  google: {
    width: '40%',
    backgroundColor: '#e5e5e5',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 7
  },
  facebook: {
    width: '40%',
    height: 45,
    backgroundColor: '#e5e5e5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 7
  },
  gradient: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
});

export default LogInUsurio;