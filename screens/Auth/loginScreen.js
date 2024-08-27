import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import GlobalStyles from '../../Styles/GlobalStyles'

export const loginScreen = ({navigation})=> {
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
        
        <Text style={GlobalStyles.authText}>
          Aún no tengo una cuenta
          <Text
            onPress={()=>navigation.navigate('registerScreen')}
            style={GlobalStyles.textlink_auth}
          >
            {" "}
            Registrarme
          </Text>
        </Text>
        <TouchableOpacity
          // onPress={handleRegister}
          style={GlobalStyles.auth_btn}
        >
          <Text style={GlobalStyles.authText_btn}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default loginScreen;