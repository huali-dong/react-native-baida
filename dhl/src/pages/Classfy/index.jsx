import React,{Component} from "react"
import {View,WebView} from "react-native"
class Classfy extends Component{
    render(){
        return(
                <WebView
                        source={{uri: 'https://github.com/facebook/react-native'}}
                    />
        )
    }
}
export default Classfy

