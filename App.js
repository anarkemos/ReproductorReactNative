import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import Navigation from './Navigation';

const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation/>
    </GestureHandlerRootView>
    );
  };

export default App

// Navegación  Stack -> manual
// 4 Opciones 
// (-Perfil, Fotos(tomar videos), videos, audios)
// Validación de los campos vacíos
// Registro