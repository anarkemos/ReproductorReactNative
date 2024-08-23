import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    // generalContainer

generalContainer:{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
},
    // authScreen
headerStyle:{
    minWidth: '100%',
    height: 70,
},
 
authContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minheight: '100%',
},
// authImgScreen
authImgScreen:{
    width:'50%',
    height: 200,  
    borderColor: 'red',
    borderWidth: 2, 
},


});

export default GlobalStyles