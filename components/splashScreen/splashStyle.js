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
        height:932,
        width:'100%',
        zIndex:999
      },
    titulo: {
        width: width * 0.68, 
        height: width * 0.68, 
        position: 'absolute',
        bottom: height * 0.47,
    },
    imgCarregamento: {
        alignItems: 'center',
    },
    gif: {
        marginTop: height * 0.7,
        width: width * 0.23,
        height: width * 0.23,
    }
})

export default styleSplash