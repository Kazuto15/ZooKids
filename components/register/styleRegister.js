import { StyleSheet } from 'react-native';
const styleCadastro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fundo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:'auto',
    width:'auto'
  },
  box:{
    width:'70%',
    height:'40%',
    backgroundColor:'#A7CF5D',
    borderWidth:2,
    borderColor: 'black',
    borderRadius:7,
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
    height:'35px',
    borderRadius:5,
    backgroundColor:'#fff',
    margin:'10px',
    paddingLeft:'10px',
  },
  boxBtn:{
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
  },
  btnText:{
    color:'white',
    fontFamily:'ComicNeue_400Regular',
    fontSize:25,
  },
  cad:{
    marginTop: 200,
    alignItems:'center',
    width: 100,
    height:100,
    borderColor:"red",
  }
})

export default styleCadastro