import { observable,action, runInAction } from "mobx"
// import {Alert} from "react-native"
import Fetch from "../../util/fetch"
class Homedata{
    @observable Homelist:Array<any> = []
    @observable Homelunbo:Array<any> = []
    //获取首页的异步数据
    @action getHomeAsync () {
            Fetch("/api/bd-marketing/api/channel/getNewHeadPageData?_t=1543652309598")
            .then((result:any)=>{
                runInAction(()=>{
                    this.Homelist = result.data
                })
            })
    }
    //获取首页横向的轮播图
    @action getHomeLuboAsync () {
        Fetch("/api/bd-marketing/api/activity/querySeckillActivity?activityId=1706230925400028&_t=1543905866921")
        .then((result:any)=>{
            runInAction(()=>{
                this.Homelunbo = result.data.list
            })
        })
    }


}

export default new Homedata()