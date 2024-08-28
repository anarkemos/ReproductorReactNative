import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import GlobalStyles from '../../Styles/GlobalStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const LoginScreen = ({navigation})=> {
  
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const handleLogin= async () => {
    try{
      const storedData = await AsyncStorage.getItem("RegisterData");

      if (storedData !==null){
        const storedDataArray = JSON.parse(storedData);
        const userFound = storedDataArray.find(
          user=> user.email === email && user.password===password
        );
        if(userFound){
          navigation.navigate('HomeScreen');
        }else{
          window.alert(
            "Error. Hubo un problema al intentar iniciar sesión"
          )
          console.log("no funkó ja, ja")
        }
      }
    } catch(error){
      window.alert(
        "Error. Hubo un problema al intentar iniciar sesión"
      )
    }
  }


  
  return (
    <ScrollView>
      <View style={GlobalStyles.generalContainer}>
        <View style={GlobalStyles.background_logo_auth}>
        <Text style={GlobalStyles.title_auth}>INICIAR SESIÓN</Text>
        <Image
          source={require('../../img/logo.png')}
          style={GlobalStyles.logo_auth}
        />
        </View>
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
        
        <Text style={GlobalStyles.authText}>
          Aún no tengo una cuenta
          <Text
            onPress={()=>navigation.navigate('RegisterScreen')}
            style={GlobalStyles.textlink_auth}
          >
            {" "} Registrarme
          </Text>
        </Text>
        <TouchableOpacity
          onPress={handleLogin}
          style={GlobalStyles.auth_btn}
        >
          <Text style={GlobalStyles.authText_btn}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default LoginScreen;