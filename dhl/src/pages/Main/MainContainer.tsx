import React, {Component} from "react"
import TabNavigator from 'react-native-tab-navigator'
import {View,Image,Text} from "react-native"
import styles from "./style"
import HomeBox from "../Home/index"
import uuid from "uuid"
const Home = require( "../../../assets/images/Home.png")
const HomeActive = require("../../../assets/images/HomeActive.png")
const Classfy = require( "../../../assets/images/Classfy.png")
const  ClassfyActive = require( "../../../assets/images/ClassfyActive.png")
const Car = require( "../../../assets/images/Car.png")
const  CarActive = require( "../../../assets/images/CarActive.png")
const mine = require("../../../assets/images/Mine.png")
const mineActive = require("../../../assets/images/MineActive.png")
interface State {
    selectedTab:string,
    items:Array<any>
}
interface Props{

}
class Maincontanier extends Component<Props,State>{
    constructor(props:any){
        super(props)
        this.state={
            selectedTab:"/home",
            items:[
                {id:uuid, title :"首页",component:<HomeBox/>, icon:{default : Home,active :HomeActive},select:"/home"},
                {id:uuid, title :"分类",component:<Text>classfy</Text>, icon:{default : Classfy,active :ClassfyActive},select:"/classfy" },
                {id:uuid, title :"购物车",component:<Text>car</Text>,icon:{default : Car,active :CarActive},select:"/car" },
                {id:uuid, title :"我的",component:<Text>mine</Text>,icon:{default : mine,active : mineActive},select:"/mine" }
            ]
        }
    }
    renderItem(){
        let {items} = this.state;
        return items.map((item,index)=>(
                <TabNavigator.Item
                key={index}
                selected={this.state.selectedTab === item.select}
                title={item.title}
                renderIcon={() => <Image style={styles.icon} source={item.icon.default} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={item.icon.active} />}
                onPress={() => this.setState({ selectedTab: item.select })}>
                    {item.component}
            </TabNavigator.Item>
            ))
        
    }
    render(){
        return(
            <View style={styles.mainbox}>
                <TabNavigator >
                   {this.renderItem()}
                </TabNavigator>
            </View>
        )
    }
}
export default Maincontanier