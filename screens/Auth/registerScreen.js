// Importaicones escenciales

import { View, Text, Image,TouchableOpacity,ScrollView,TextInput, } from 'react-native'
import React from 'react'
import GlobalStyles from '../../Styles/GlobalStyles';


export const registerScreen = ({navigation}) => {
  return (

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
          // value={username}
          style={GlobalStyles.input_auth}
          // onChangeText={setUsername}
        />
        <TextInput
          placeholder="Correo"
          keyboardType="email-address"
          autoCapitalize="none"
          maxLength={50}
          // value={email}
          style={GlobalStyles.input_auth}
          // onChangeText={setEmail}
        />
        <TextInput
          placeholder="Contraseña"
          maxLength={25}
          secureTextEntry={true}
          // value={password}
          style={GlobalStyles.input_auth}
          // onChangeText={setPassword}
        />
        <TextInput
          placeholder="Repetir Contraseña"
          maxLength={25}
          secureTextEntry={true}
          // value={confirmPassword}
          style={GlobalStyles.input_auth}
          // onChangeText={setConfirmPassword}
        />
        <Text style={GlobalStyles.authText}>
          Ya tengo cuenta
          <Text
            onPress={()=>navigation.navigate('loginScreen')}
            style={GlobalStyles.textlink_auth}
          >
            {" "}
            Ingresar
          </Text>
        </Text>
        <TouchableOpacity
          // onPress={handleRegister}
          style={GlobalStyles.auth_btn}
        >
          <Text style={GlobalStyles.authText_btn}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default registerScreen;