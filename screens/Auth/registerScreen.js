import { View, Text, Image } from 'react-native'
import React from 'react'
import globalStyles from '../../Styles/GlobalStyles';

export const registerScreen=()=> {
  return (
    <View style={globalStyles.authContainer}>
    <Image  style={globalStyles.authImgScreen} source={'../img/logo.png'}/>
    <Text>registerScreen</Text>
    </View>
  );
};

export default registerScreen;