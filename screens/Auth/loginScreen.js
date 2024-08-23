import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export const loginScreen = ({navigation})=> {
  return (
    <View>
        {/* <Image source={'../img/NASA_logo.svg.png'}/> */}
      <TouchableOpacity onPress={()=>navigation.navigate('registerScreen')}>
      <Text>LoginScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default loginScreen;