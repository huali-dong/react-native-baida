import React,{Component} from "react"
import {View,Image} from "react-native"
import  styles from "./styles"
import {observer,inject} from "mobx-react"
interface Props{
    list1:Array<any>,
    list2:Array<any>
}
@inject("store")
@observer
class NavBox extends Component<Props>{
    constructor(props:any){
        super(props)
    }
    renderImg(){
        if(this.props.list1.length==0) return false;
        let { list1,list2 } = this.props
        // Alert.alert(JSON.stringify(this.state.list))
        return (
            <View style={styles.box}>
                <View style={styles.itembox}>
                    {
                        list1.map((item,i)=>(
                            <Image key={i} style={styles.img} source={{uri:item.bannerImg}}></Image> 
                        ))
                    }
                </View>
                <View style={styles.itembox}>
                    {
                        list2.map((item,i)=>(
                            <Image  key={i} style={styles.img} source={{uri:item.bannerImg}}></Image> 
                        ))
                    }
                </View>
            </View>
        )
    }
    render(){
        return(
            <View>
                 {this.renderImg()}
            </View>
        )
    }
}
export default NavBox