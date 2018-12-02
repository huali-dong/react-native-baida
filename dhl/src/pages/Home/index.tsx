import React,{Component} from "react"
import {View, ScrollView} from "react-native"
import Swiper from "./Swiper/swiper"
import Header from "./Header/Header"
import Nav from "./Nav/nav"
import Before from "./before/before"
import Second from "./Second/second"
import Fetch from "../../util/fetch"

interface Props{

}
interface State{
    list0:Array<any>,
    list1:Array<any>,
    list2:Array<any>,
    list3:Array<any>,
    list4:Array<any>,
}

class HomeBox extends Component<Props,State>{
    constructor(props:any){
        super(props)
        this.state={
            list0:[],
            list1:[],
            list2:[],
            list3:[],
            list4:[]
        }
    }
    componentWillMount(){
        Fetch("/api/bd-marketing/api/channel/getNewHeadPageData?_t=1543652309598")
        .then((result:any)=>{
            this.setState({
                list0:result.data.list[0].list,//轮播图
                list1:result.data.list[1].list,//nav
                list2:result.data.list[2].list,//nav
                list3:result.data.list[5].list,//提前抢购
                list4:result.data.list[6].list,
            })
        })
    }
    renderBox(){
        if(this.state.list0.length==0) return false;
        return (
            <View style={{flex:1,position:'relative'}}>
                <Header/>  
                <Swiper list={this.state.list0}/>
                <Nav list1= {this.state.list1} list2={this.state.list2}/>
                <Before list1={this.state.list3} list2 ={this.state.list4}></Before>
                <Second></Second>
            </View>
        )
    }
    render(){
        return(
            <ScrollView>
                {this.renderBox()}
            </ScrollView>
        )
    }

}

export default HomeBox