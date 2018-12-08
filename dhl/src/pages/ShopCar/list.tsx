import React,{Component} from "react"
import {View,Image,Text,FlatList} from "react-native"
import styles from "./styles"
const Close = require("../../../assets/images/cha.png")
import Fetch from "../../util/fetch"

interface Props{

}
interface State{
    startNum:Number,
    list:Array<any>
}
class List extends Component<Props,State>{
    constructor(props:any){
        super(props)
        this.state={
            list:[],
            startNum:10,
        }
    }
    componentWillMount(){
        Fetch("/api/bd-marketing/api/activity/getProductList?activityId=1701031131360001&startNum=10&_t=1544011507333")
            .then((res:any)=>{
                this.setState({
                    list:res.data.list
                })
            })
    }
    renderItem =()=>{
        let   list  = this.state.list
        return (
            list.map((item:any)=>(
                <View style={styles.List}>
                    <Image source={item.itemLogoUrl} style={styles.img}></Image>
                    <Text>item.itemTitle</Text>
                    <Text style={styles.text}>Hello World</Text>
                </View>
            ))
            
        )   
   }
    render(){
        return(
            <FlatList

                renderItem={this.renderItem}
            />
        )
    }
}
export default List
