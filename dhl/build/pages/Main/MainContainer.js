var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from "react";
import TabNavigator from 'react-native-tab-navigator';
import { View, Image } from "react-native";
import styles from "./style";
import HomeBox from "../Home/index";
import Mine from "../Mine/index";
import ShopCar from "../ShopCar/list";
import ClassfyBox from "../Classfy/index";
import uuid from "uuid";
const Home = require("../../../assets/images/Home.png");
const HomeActive = require("../../../assets/images/HomeActive.png");
const Classfy = require("../../../assets/images/Classfy.png");
const ClassfyActive = require("../../../assets/images/ClassfyActive.png");
const Car = require("../../../assets/images/Car.png");
const CarActive = require("../../../assets/images/CarActive.png");
const mine = require("../../../assets/images/Mine.png");
const mineActive = require("../../../assets/images/MineActive.png");
import { inject, observer } from "mobx-react";
import HomeTitle from "../Home/Header/Header";
let Maincontanier = class Maincontanier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowHead: false,
            selectedTab: "/home",
            items: [
                { id: uuid, title: "首页", component: React.createElement(HomeBox, null), icon: { default: Home, active: HomeActive }, select: "/home" },
                { id: uuid, title: "分类", component: React.createElement(ClassfyBox, null), icon: { default: Classfy, active: ClassfyActive }, select: "/classfy" },
                { id: uuid, title: "购物车", component: React.createElement(ShopCar, null), icon: { default: Car, active: CarActive }, select: "/car" },
                { id: uuid, title: "我的", component: React.createElement(Mine, null), icon: { default: mine, active: mineActive }, select: "/mine" }
            ]
        };
    }
    renderItem() {
        let { items } = this.state;
        return items.map((item, index) => (React.createElement(TabNavigator.Item, { key: index, selected: this.state.selectedTab === item.select, title: item.title, renderIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon.default }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon.active }), onPress: () => this.setState({ selectedTab: item.select }) }, item.component)));
    }
    componentWillMount() {
        this.props.store.Navigation.setNavigation(this.props.navigation);
    }
    componentDidMount() {
        // alert(this.props)
    }
    render() {
        return (React.createElement(View, { style: styles.mainbox },
            React.createElement(TabNavigator, null, this.renderItem())));
    }
};
Maincontanier.navigationOptions = {
    headerTitle: React.createElement(HomeTitle, null)
};
Maincontanier = __decorate([
    inject("store"),
    observer
], Maincontanier);
export default Maincontanier;
//# sourceMappingURL=MainContainer.js.map