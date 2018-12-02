import React,{Component} from "react"
import {View,Text} from "react-native"
import styles from "./styles"
class Second extends Component{
    render(){
        return(
            <View style={styles.box}>
                <View style={styles.top}>
                    <Text>限时秒杀</Text>
                    <Text>更多秒杀</Text>
                </View>
                
            </View>
        )
    }
}
export default Second
