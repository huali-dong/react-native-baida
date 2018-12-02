import React, { Component } from "react";
import TabNavigator from 'react-native-tab-navigator';
import { View, Image, Text } from "react-native";
import styles from "./style";
import HomeBox from "../Home/index";
import uuid from "uuid";
const Home = require("../../../assets/images/Home.png");
const HomeActive = require("../../../assets/images/HomeActive.png");
const Classfy = require("../../../assets/images/Classfy.png");
const ClassfyActive = require("../../../assets/images/ClassfyActive.png");
const Car = require("../../../assets/images/Car.png");
const CarActive = require("../../../assets/images/CarActive.png");
const mine = require("../../../assets/images/Mine.png");
const mineActive = require("../../../assets/images/MineActive.png");
class Maincontanier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "/home",
            items: [
                { id: uuid, title: "首页", component: React.createElement(HomeBox, null), icon: { default: Home, active: HomeActive }, select: "/home" },
                { id: uuid, title: "分类", component: React.createElement(Text, null, "classfy"), icon: { default: Classfy, active: ClassfyActive }, select: "/classfy" },
                { id: uuid, title: "购物车", component: React.createElement(Text, null, "car"), icon: { default: Car, active: CarActive }, select: "/car" },
                { id: uuid, title: "我的", component: React.createElement(Text, null, "mine"), icon: { default: mine, active: mineActive }, select: "/mine" }
            ]
        };
    }
    renderItem() {
        let { items } = this.state;
        return items.map((item, index) => (React.createElement(TabNavigator.Item, { key: index, selected: this.state.selectedTab === item.select, title: item.title, renderIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon.default }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon.active }), onPress: () => this.setState({ selectedTab: item.select }) }, item.component)));
    }
    render() {
        return (React.createElement(View, { style: styles.mainbox },
            React.createElement(TabNavigator, null, this.renderItem())));
    }
}
export default Maincontanier;
//# sourceMappingURL=MainContainer.js.map