var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, runInAction } from "mobx";
// import {Alert} from "react-native"
import Fetch from "../../util/fetch";
class Homedata {
    constructor() {
        this.Homelist = [];
        this.Homelunbo = [];
    }
    //获取首页的异步数据
    getHomeAsync() {
        Fetch("/api/bd-marketing/api/channel/getNewHeadPageData?_t=1543652309598")
            .then((result) => {
            runInAction(() => {
                this.Homelist = result.data;
            });
        });
    }
    //获取首页横向的轮播图
    getHomeLuboAsync() {
        Fetch("/api/bd-marketing/api/activity/querySeckillActivity?activityId=1706230925400028&_t=1543905866921")
            .then((result) => {
            runInAction(() => {
                this.Homelunbo = result.data.list;
            });
        });
    }
}
__decorate([
    observable
], Homedata.prototype, "Homelist", void 0);
__decorate([
    observable
], Homedata.prototype, "Homelunbo", void 0);
__decorate([
    action
], Homedata.prototype, "getHomeAsync", null);
__decorate([
    action
], Homedata.prototype, "getHomeLuboAsync", null);
export default new Homedata();
//# sourceMappingURL=home.js.map