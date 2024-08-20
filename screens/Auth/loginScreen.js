import { View, Text, Image } from 'react-native'
import React from 'react'
import Navigation from '../../Navigation'

export const loginScreen = ({Navigation})=> {
  return (
    <View>
        <Image source={'../img/NASA_logo.svg.png'}/>
      <Text>loginScreen</Text>
    </View>
  )
}

export default loginScreen;