var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import Swiper from "./Swiper/swiper";
import Nav from "./Nav/nav";
import Before from "./before/before";
import Second from "./Second/second";
import Fetch from "../../util/fetch";
import { inject, observer } from "mobx-react";
//将mobx中store的数据注入进来
let HomeBox = class HomeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list0: [],
            list1: [],
            list2: [],
            list3: [],
            list4: [],
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.props.store.Homedata.getHomeAsync();
            // Alert.alert(JSON.stringify(this.props.store.Homedata))
        });
    }
    componentWillMount() {
        Fetch("/api/bd-marketing/api/channel/getNewHeadPageData?_t=1543652309598")
            .then((result) => {
            this.setState({
                list0: result.data.list[0].list,
                list1: result.data.list[1].list,
                list2: result.data.list[2].list,
                list3: result.data.list[5].list,
                list4: result.data.list[6].list,
            });
        });
    }
    renderBox() {
        if (this.state.list0.length == 0)
            return false;
        return (React.createElement(View, { style: { flex: 1, position: 'relative' } },
            React.createElement(Swiper, { list: this.state.list0 }),
            React.createElement(Nav, { list1: this.state.list1, list2: this.state.list2 }),
            React.createElement(Before, { list1: this.state.list3, list2: this.state.list4 }),
            React.createElement(Second, null)));
    }
    render() {
        return (React.createElement(ScrollView, null, this.renderBox()));
    }
};
HomeBox = __decorate([
    inject("store"),
    observer
], HomeBox);
export default HomeBox;
//# sourceMappingURL=index.js.map