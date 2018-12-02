import React,{Component} from "react"
import {View,Image, TextInput} from "react-native"
import styles from "./style"
const Left =require("../../../../assets/images/header-left.png") 
const Search = require("../../../../assets/images/search.png")
const Right = require("../../../../assets/images/header-right.png")
const Close = require("../../../../assets/images/cha.png")
class HeaderBox extends Component{
    render(){
        return(
            <View style={styles.box}>
                <View>
                     <Image style={styles.img} source={Left}></Image>
                </View>
                <View style={styles.center}>
                    <Image style={[styles.textimg,{marginLeft: 10,}]} source={Search}></Image>
                    <TextInput style={styles.input}></TextInput>
                    <Image style={styles.textimg} source={Close}></Image>
                </View>
                <View>
                    <Image style={styles.right} source={Right}></Image>
                </View>
            </View>
        )
    }
}
export default HeaderBox