// Importaciones escenciales

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


// importaciones de pantallas
import RegisterScreen from './screens/Auth/RegisterScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import HomeScreen from './screens/main/HomeScreen'
import TakeCameraScreen from './screens/Functions/TakeCameraScreen'
import ProfileScreen from './screens/Functions/ProfileScreen';

// Importaciones de logos/imágenes

// Constantes para la navegación
const Stack = createNativeStackNavigator();

// Navegación entre pantallas
function NavigationScreens(){
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}} /> */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={
            {headerShown:true, 
                headerStyle:{backgroundColor: '#1E3A8A'}, 
                headerTintColor:'#fff', 
                headerTitle: '夢 DREAM', 
                headerTitleAlign:'center'}
                } />
            <Stack.Screen name='ImagesScreen' component={TakeCameraScreen} options={
             {headerShown:true, 
                headerStyle:{backgroundColor: '#1E3A8A'}, 
                headerTintColor:'#fff', 
                headerTitle: '夢 DREAM', 
                headerTitleAlign:'center'}   
            }/>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={
                {headerShown:true,
                    headerStyle:{backgroundColor: '#1E3A8A'}, 
                headerTintColor:'#fff', 
                headerTitle: '夢 DREAM', 
                headerTitleAlign:'center'
                }
            }/>
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