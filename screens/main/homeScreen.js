import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from '../../Styles/GlobalStyles';

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HomeScreen =({navigation})=>{
  
  return (   
      <View style={GlobalStyles.home_container}>
          <TouchableOpacity style={GlobalStyles.home_btn} onPress={()=>navigation.navigate('ProfileScreen')}>
            <Text style={GlobalStyles.home_btn_text}>
              Perfil
            </Text>
            <Text>
            <AntDesign name="profile" size={34} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.home_btn} onPress={()=>navigation.navigate('ImagesScreen')}>
            <Text style={GlobalStyles.home_btn_text}>
              Imagenes
            </Text>
            <Text>
            <Entypo name="folder-images" size={34} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.home_btn}>
            <Text style={GlobalStyles.home_btn_text}>
              Videos
            </Text>
            <Text>
            <AntDesign name="videocamera" size={34} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.home_btn}>
            <Text style={GlobalStyles.home_btn_text}>
              Audios
            </Text>
            <Text>
            <MaterialIcons name="audiotrack" size={34} color="white" />
            </Text>
          </TouchableOpacity>
      </View>
      
   
  );
};

export default HomeScreen