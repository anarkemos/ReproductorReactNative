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
// 4 Opciones ()
// Validación de los campos vacíos
// Registro