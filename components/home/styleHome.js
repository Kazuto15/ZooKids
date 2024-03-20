import { StyleSheet } from 'react-native';
const styleHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      position:'relative',
      width: '100%',
      height: '100%'
    },
    titleText:{
      fontSize: 40,
      position: 'absolute', 
      top: 20, 
      left: 20 
    },
    btn:{
      alignItems:'center',
      backgroundColor: 'green',
      padding:'10px',
      margin: '10px'
    },
  
    })
    
  export default styleHome;