// Importaciones escenciales

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import GlobalStyles from './Styles/GlobalStyles'
import { Text, View, Image } from 'react-native'

// importaciones de pantallas
import registerScreen from './screens/Auth/registerScreen';
import loginScreen from './screens/Auth/loginScreen';
import homeScreen from './screens/main/homeScreen'

// Importaciones de logos/imágenes

// Constantes para la navegación
const Stack = createNativeStackNavigator();

// Navegación entre pantallas
function NavigationScreens(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="loginScreen" component={loginScreen} options={{headerShown:false}} />
            <Stack.Screen name="registerScreen" component={registerScreen} options={{headerShown:false}} />
            <Stack.Screen name="homeScreen" component={homeScreen} options={
                {headerShown:true, 
                headerStyle:{backgroundColor: '#1E3A8A'}, 
                headerTintColor:'#fff', 
                headerTitle: '夢 DREAM', 
                headerTitleAlign:'center'}
                } />
        </Stack.Navigator>
      );
    
};
   

const Navigation= ()=> {
    
    return(
    <NavigationContainer>
        <NavigationScreens></NavigationScreens>
    </NavigationContainer>
    );
};

// Exportación para utilizar en otros componentes

export default Navigation