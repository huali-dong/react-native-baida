import React,{Component} from "react"
import {View,Image} from "react-native"
import Swiper from "react-native-swiper"
import styles from "./style"
interface Props{
    list:Array<any>
}
class SwiperBox extends Component<Props>{
    constructor(props:any){
        super(props)
    }
    renderItem(){
        if(this.props.list.length==0) return false;
        return (
            <Swiper>
               {
                this.props.list.map((item,i)=>(
                    <View style={styles.swiperItem} key={i}>
                        <Image style={styles.swiperImage} source={{uri:item.bannerImg}}></Image>
                    </View>
                ))
               }
            </Swiper>
        )
    }
    render(){
        return(
            <View style={{height:183}}>  
                 {this.renderItem()}
            </View>
        )
    }

}

export default SwiperBox