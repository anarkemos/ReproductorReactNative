// Importaciones escenciales

import { View, Text, Image,TouchableOpacity,ScrollView,TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../Styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const RegisterScreen = ({navigation}) => {
  
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [confirmPassword, setConfirmPassword]=useState("");
  const [email, setEmail ]=useState("");


  const handleRegister = async ()=>{
    if(!username){
      window.alert(
        "Error, el campo de 'nombre' es obligatorio"
      );
      return;
    }
    else if(!email){
      window.alert(
        "Error, el campo de correo es obligatorio"
      );
      return;
    }
    else if(!password){
      window.alert(
        "Error, el campo de contraseña es obligatorio"
      );
      return;
    }
    else if(password!==confirmPassword){
      window.alert(
        "Error, el campo de  confirmar la contraseña es obligatorio"
      );
      return;
    }
  
  try {
    let localStorage=[];

    localStorage.push({username, email, password});
    const localStorageToString=JSON.stringify(localStorage);
    await AsyncStorage.setItem("RegisterData", localStorageToString);
    navigation.navigate('LoginScreen');
  }catch(error){
    window.alert(
      "Error, hubo un problema al registrar el usuario"
    );
  };
  };

  return(

    

    <ScrollView>
      <View style={GlobalStyles.generalContainer}>
        <View style={GlobalStyles.background_logo_auth}>
        <Text style={GlobalStyles.title_auth}>REGISTRARME</Text>
        <Image
          source={require('../../img/logo.png')}
          style={GlobalStyles.logo_auth}
        />
        </View>
        <TextInput
          placeholder="Nombre Completo"
          maxLength={25}
          value={username}  
          style={GlobalStyles.input_auth}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Correo"
          keyboardType="email-address"
          autoCapitalize="none"
          maxLength={50}
          value={email}
          style={GlobalStyles.input_auth}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Contraseña"
          maxLength={25}
          secureTextEntry={true}
          value={password}
          style={GlobalStyles.input_auth}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Repetir Contraseña"
          maxLength={25}
          secureTextEntry={true}
          value={confirmPassword}
          style={GlobalStyles.input_auth}
          onChangeText={setConfirmPassword}
        />
        <Text style={GlobalStyles.authText}>
          Ya tengo cuenta
          <Text
            onPress={()=>navigation.navigate('LoginScreen')}
            style={GlobalStyles.textlink_auth}
          >
            {" "}
            Ingresar
          </Text>
        </Text>
        <TouchableOpacity
          onPress={handleRegister}
          style={GlobalStyles.auth_btn}
        >
          <Text style={GlobalStyles.authText_btn}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;