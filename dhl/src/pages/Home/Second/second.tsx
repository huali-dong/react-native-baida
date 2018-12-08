import React,{Component} from "react"
import {View,Text,Image,TouchableHighlight, ScrollView} from "react-native"
import styles from "./styles"
// import Swiper from "react-native-swiper"
import {inject,observer} from "mobx-react"

interface Props{
    store?:any,
}

@inject("store")
@observer
class Second extends Component<Props>{
    constructor(props:any){
        super(props)
    }
    componentDidMount(){
        // alert(JSON.stringify(this.props.store))
        this.props.store.Homedata.getHomeLuboAsync()
    }
    render(){
       
        return(
            <View style={styles.box}>
                <View style={styles.top}>
                    <Text>限时秒杀</Text>
                    <Text>更多秒杀</Text> 
                </View>
                <View style={styles.wrapper}>
                    <ScrollView
                        horizontal={true}
                    >
                            {
                                this.props.store.Homedata.Homelunbo.map((item:any,i:number)=>(
                                    <TouchableHighlight key={i}  onPress={()=>{
                                        this.props.store.Navigation.navigation.navigate('Detail')
                                    }}>
                                            <View style={styles.swiperItem} >
                                                <Image style={styles.swiperImage} source={{uri:item.pLogo}}></Image>
                                                <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.swiperText}>{item.pName}</Text>
                                                <Text style={styles.swiperPrice}>￥{item.actPrice}</Text>

                                            </View>    
                                    </TouchableHighlight>
                                   
                                ))
                            }
                           
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default Second
