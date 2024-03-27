import { StyleSheet } from 'react-native';
const styleLogin = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box:{
      borderWidth:1,
      borderColor:'black',
      borderRadius:15,
      padding:20
    },
    title:{
      fontSize:50,
      marginBottom:'50px'

    },
    textInput:{
      height:35,
      borderRadius:5,
      backgroundColor:'#b4f288',
      margin:10,
      padding:20,
      marginTop:10,
    },
    btn:{
      alignItems:'center',
      backgroundColor: 'green',
      padding:'10px',
      margin: '10px'
    },
    vLogar:{
      
    },
    btnLogar:{
      marginTop:'20px',
      fontSize:'15px',
      textAlign:'center',
    },
    img:{
      width: 300,
      height:50,
      borderColor:"red",
      alignItems:'center',
      marginTop:40,
      marginBottom: 40
    },
    cad:{
      marginTop:100,
      width: 100,
      height:100,
      borderColor:"red",

    },
    logar:{
      flex:1,
      fontSize:35,
      color:'#fe3r4'
    }
  });

  export default styleLogin