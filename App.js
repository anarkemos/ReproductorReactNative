import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Navigation from './Navigation'

const App=()=>{
  
    return (
      <View style={{flex : 1}}>
        <Navigation></Navigation>
      </View>
    );
  };


export default App

// Navegación  Stack -> manual
// 4 Opciones ()
// Validación de los campos vacíos
// Registro