import { StyleSheet, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');
const styleHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A97555',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      width: width * 0.48, 
      height: width * 0.28, 
      position:'relative',
      left:'20%',
      top:'-2% '
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
      alignItems:'center',
      justifyContent:'center'
    },
    fundoHabitat:{
      width:350,
      paddingVertical:6,
      alignItems:'center',
      marginVertical:10,
      borderRadius:10
    },
    habitatImage: {
      width:300,
      height:100,
      borderRadius: 15,
    },
    habitatTxtCont: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingHorizontal: 10,
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