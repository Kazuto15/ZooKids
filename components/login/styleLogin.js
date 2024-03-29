import { StyleSheet } from 'react-native';
const styleLogin = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fundo:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height:'auto',
      width:'100%',
      zIndex:999
    },
    box:{
      borderWidth:1,
      borderColor:'black',
      borderRadius:15,
      width:'70%',
      backgroundColor:'#A7CF5D'
    },
    title:{
      fontSize:50,
      color:'white',
      fontFamily:'ComicNeue_700Bold',
      marginBottom:20,
      paddingTop:'7%',
      paddingLeft:'7%'
    },
    textInput:{
      height:35,
      borderRadius:5,
      backgroundColor:'white',
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
    cadBox:{
      justifyContent:'flex-end',
      alignItems:'center'
    },
    cad:{
      marginTop:40,
      width: 100,
      height:100,
      borderColor:"red",
    },
    boxEntrar:{
      alignItems:'center',
      paddingTop:20,
    },
    entrar:{
      color:'white',
      fontSize:30,
      fontFamily:'ComicNeue_400Regular'
    }
  });

  export default styleLogin