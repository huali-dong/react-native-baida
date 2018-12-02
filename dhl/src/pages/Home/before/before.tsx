import React,{Component} from "react"
import {View,Image} from "react-native"
import styles from "./styles"
interface Props{
    list1:Array<any>
    list2:Array<any>
}
class Before extends Component<Props>{
    constructor(props:any){
        super(props)
    }
    render(){
        return(
            <View style={styles.box}>
                <Image style={styles.imgbefore} source={{uri:this.props.list1[0].bannerImg}}></Image>
                <View style={styles.list}>
                    {
                        this.props.list2.map((item,i)=>(
                             <Image style={styles.img} key={i} source={{uri:item.bannerImg}}></Image> 
                        ))
                    }
                </View>
            </View>
        )
    }
}
export default Before