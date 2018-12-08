var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight, ScrollView } from "react-native";
import styles from "./styles";
// import Swiper from "react-native-swiper"
import { inject, observer } from "mobx-react";
let Second = class Second extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // alert(JSON.stringify(this.props.store))
        this.props.store.Homedata.getHomeLuboAsync();
    }
    render() {
        return (React.createElement(View, { style: styles.box },
            React.createElement(View, { style: styles.top },
                React.createElement(Text, null, "\u9650\u65F6\u79D2\u6740"),
                React.createElement(Text, null, "\u66F4\u591A\u79D2\u6740")),
            React.createElement(View, { style: styles.wrapper },
                React.createElement(ScrollView, { horizontal: true }, this.props.store.Homedata.Homelunbo.map((item, i) => (React.createElement(TouchableHighlight, { key: i, onPress: () => {
                        this.props.store.Navigation.navigation.navigate('Detail');
                    } },
                    React.createElement(View, { style: styles.swiperItem },
                        React.createElement(Image, { style: styles.swiperImage, source: { uri: item.pLogo } }),
                        React.createElement(Text, { numberOfLines: 1, ellipsizeMode: "tail", style: styles.swiperText }, item.pName),
                        React.createElement(Text, { style: styles.swiperPrice },
                            "\uFFE5",
                            item.actPrice)))))))));
    }
};
Second = __decorate([
    inject("store"),
    observer
], Second);
export default Second;
//# sourceMappingURL=second.js.map