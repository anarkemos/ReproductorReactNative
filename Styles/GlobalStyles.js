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
 
authContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minHeight: '100%',

},
title_auth:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    color: 'white',
},
background_logo_auth:{
    backgroundColor: '#1E3A8A',
    width: '100%',
    height: 350,
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
},

logo_auth:{
    minHeight:'70%'   
},

input_auth:{
    width: '80%',
    height: 30,
    color: 'gray',
    borderBottomColor: 'black',
    borderBottomWidth: 1, 
    marginBottom: 10,
    fontSize: 15
},
authText:{
    fontSize:20,
    marginBottom:10,
},
textlink_auth:{
    color: '#0000ff',
},

auth_btn:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:'80%',
    height: 'auto',
    backgroundColor: '#38BDF8',
    padding: 5,
    textAlign:'center',
    borderRadius: 5,
    fontSize:20,
    marginBottom:20,
},
authText_btn:{
    fontSize: 30,
    color:'white',
    height: 'auto',
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