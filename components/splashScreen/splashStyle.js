import { StyleSheet, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');
const styleSplash = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#7BC67B',
    },
    fundo:{
        flex: 1,
        position:'absolute',
        alignItems:'center',
        justifyContent:`center`,
        height:'auto',
        width:'100%',
        zIndex:999
      },
    titulo: {
        width: width * 0.68, 
        height: width * 0.68, 
        position: 'relative',
        justifyContent:`center`,
        left: width * 0.15
    },
    imgCarregamento: {
        alignItems: 'center',
    },
    gif: {
        position:`relative`,
        top: height *0.35,
        width: width * 0.23,
        height: width * 0.23,
    }
})

export default styleSplash