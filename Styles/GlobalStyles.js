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
    minHeight:'30%'   
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
// Home
home_container:{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
},
home_btn:{
    maxWidth: '40%',
    height: 100,
    backgroundColor: '#1E3A8A',
    margin: 20,
    marginTop: 50,
    borderRadius: 15,
    display: 'flex',
    flexBasis: '30%',
    justifyContent: 'center',
    alignItems: 'center',
},
home_btn_text:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,

},
// Profile  Screen
ProfileContainer:{
    display:'flex',
    alignItems:'center',
    minHeight: '100%',
    flex:1,

},
title_auth:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
},
bodyTopDashboard: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
},
textGeneral: {
    fontFamily: 'Sans-serif',
    fontSize: 17,
    color: '#222831',
    }, 
bodyBottom: {
    marginTop: 'auto',
    marginBottom: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    },
anchorLink: {
    textDecorationLine: 'underline',
    color: '#3FA2F6',
    cursor: 'pointer',
},    

});

export default GlobalStyles