import { StyleSheet } from 'react-native';
const styleHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer:{
      position:'relative',
      top:-15,
      width: 410,
      height: 50,
      marginTop: 20,
      marginBottom: 50,
      borderBottomWidth:2,
      borderBottomColor:'black',
      shadowColor:'black',
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2
    },
    titleText:{
      fontSize: 40,
      paddingLeft:10
    },
    habitat:{
      backgroundColor:'black',
      width: 300,
      height:100,
      borderRadius:15,
      marginVertical:10,
      alignItems:'center',
      justifyContent:'center'
    },
    nomeHabitat:{
      color: '#fff',
      fontSize: 20,
    },
 
    })
    
  export default styleHome;