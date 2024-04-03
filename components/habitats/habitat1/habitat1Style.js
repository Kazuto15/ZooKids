import { StyleSheet, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');
const styleHabitat = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#007099',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
        width:430,
        height:60,
        backgroundColor:'#fff',
        position:'absolute',
        top:35,
    },
    backBtn:{
        position:'relative',
        top:15,
        left:5
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
      paddingVertical:8,
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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CCCCCC",
    },
    modalImageCont:{
        position:'absolute',
        top:29,
        width:480,
        paddingVertical:6,
        marginLeft:50,
        marginVertical:10,
        borderRadius:10
      },
    modalImage: {
        width:400,
        height:100,
        borderRadius: 15,
      },
    modalText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    closeButton: {
        marginTop:50,
        fontSize: 18,
        color: "white",
        backgroundColor: "blue",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
 
    })
    
  export default styleHabitat;