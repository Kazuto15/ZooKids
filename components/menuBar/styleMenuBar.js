// styleMenuBar.js
import { StyleSheet } from 'react-native';

const styleMenuBar = StyleSheet.create({
  menuContainer:{
    position:'relative',
    backgroundColor: 'green',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    padding:10,
    width:'100%'
  },
  menuBar:{
    flexDirection: 'row',
  },
  buttonHome:{
    padding: 5,
  },
  buttonImage: {
    width: 44,
    height: 44,
    marginHorizontal: 5,
  },
});

export default styleMenuBar;
