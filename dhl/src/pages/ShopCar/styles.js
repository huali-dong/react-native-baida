import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    List:{
        width:187,
        height:133,
        flexDirection: "row",
        // justifyContent: "center",
    },
    img:{
        width:132,
        height:132,
        padding:50
    },
    text:{
      color:"red"
    },
    container: {
        flex: 1,
        justifyContent: 'center'
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
})
export default styles