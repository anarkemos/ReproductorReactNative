import { Text, View, Image } from 'react-native'
import React, { component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import registerScreen from './screens/Auth/registerScreen';
import loginScreen from './screens/Auth/loginScreen';

const Stack = createNativeStackNavigator();


function customHeaderTitle(){
    return(
        <View>
            <Image ></Image>
        </View>
    );
};

function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="register" component={registerScreen} />
            <Stack.Screen name="login" component={loginScreen} options={{headerShown:false}} />
        </Stack.Navigator>
      );
    
};
   
export function Navigation(){
    return(<NavigationContainer>
        <MyStack></MyStack>
    </NavigationContainer>
    );
};

export default Navigation