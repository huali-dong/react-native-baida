import {StyleSheet} from "react-native"
const styles = StyleSheet.create({
    box:{
        width:'100%',
        height:238
    },
    top:{
        height:40,
        width:'100%',
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: "center",
        backgroundColor:"#fff",
        borderColor:"#ccc",
        borderWidth:1,
        borderStyle:"solid"
    },
    wrapper:{
        width:"100%",
        height:220,
        backgroundColor:"#FFF"
    },
    swiperItem: {
        width:115,
        height:"100%"
    },
    swiperImage: {
        width: 95,
        height:95,
        padding:20,
        marginTop:20
    },
    swiperText:{
        width:"100%",
        height:20,
    },
    swiperPrice:{
        color:'#ef2b2f',
        justifyContent:'center',
        alignItems:"center"
    }

})
export default styles