// styleMenuBar.js
import { StyleSheet } from 'react-native';

const styleMenuBar = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  menuContainer:{
    backgroundColor: 'green',
    flexDirection:'row',
    padding:10,
  },
  buttonImage: {
    width: 44,
    height: 44,
    marginHorizontal: 5,
  },
});

export default styleMenuBar;
