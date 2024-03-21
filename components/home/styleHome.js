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
      top:-20,
      width: 450,
      height: 100,
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
      paddingTop:10,
      paddingLeft:20
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
    habitatImage: {
      width: 300,
      height: 200,
      borderRadius: 15,
    },
    habitatTxtCont: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderBottomRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    nomeHabitat:{
      color: '#fff',
      fontSize: 20,
      justifyContent:'flex-end'
    },
 
    })
    
  export default styleHome;