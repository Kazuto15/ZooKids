import{StyleSheet, Dimensions} from 'react-native'
const {height, width} = Dimensions.get(`window`)
const styleProfile = StyleSheet.create({
    container:{

    },
    imgPerfil:{   
        width:500,
        height:`auto`
    },
    imgContainer:{
        flex:1,
        justifyContent:`center`,
        alignItems:`center`,
        marginBottom:`40%`
    },
    headerUser: {
        position: "relative",
        top: height *0.10,
    },
    inputContainer:{
        alignItems:`center`,
    },
    textInput:{
        height: height * 0.04,
        width: width * 0.80,
        borderRadius:5,
        backgroundColor:'#fff',
        margin:'10px',
        paddingLeft:'10px',
    },
    boxBtn:{
        justifyContent:`center`,
        alignItems:'center',
        marginLeft: width *0.10,
        marginRight: width *0.10,
        marginTop: height *.05,
        marginBottom:10,
        backgroundColor:`#3cabb0`,
        borderRadius: 5
      },
      btnText:{
        color:`white`,
        fontFamily:'ComicNeue_400Regular',
        fontSize:25,
      },
});

export default styleProfile;