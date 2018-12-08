var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import { observer, inject } from "mobx-react";
let NavBox = class NavBox extends Component {
    constructor(props) {
        super(props);
    }
    renderImg() {
        if (this.props.list1.length == 0)
            return false;
        let { list1, list2 } = this.props;
        // Alert.alert(JSON.stringify(this.state.list))
        return (React.createElement(View, { style: styles.box },
            React.createElement(View, { style: styles.itembox }, list1.map((item, i) => (React.createElement(Image, { key: i, style: styles.img, source: { uri: item.bannerImg } })))),
            React.createElement(View, { style: styles.itembox }, list2.map((item, i) => (React.createElement(Image, { key: i, style: styles.img, source: { uri: item.bannerImg } }))))));
    }
    render() {
        return (React.createElement(View, null, this.renderImg()));
    }
};
NavBox = __decorate([
    inject("store"),
    observer
], NavBox);
export default NavBox;
//# sourceMappingURL=nav.js.map