import React,{Component} from "react"
import {View,Image} from "react-native"
const detail = require( "../../../../assets/images/detail.jpg")
class Header extends Component{
    render(){
        return(
            <View>
                <Image source={{uri:detail}}></Image>
            </View>
        )
    }
}
export default Header