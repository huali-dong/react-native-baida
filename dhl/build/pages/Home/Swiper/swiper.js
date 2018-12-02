import React, { Component } from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./style";
class SwiperBox extends Component {
    constructor(props) {
        super(props);
    }
    renderItem() {
        if (this.props.list.length == 0)
            return false;
        return (React.createElement(Swiper, null, this.props.list.map((item, i) => (React.createElement(View, { style: styles.swiperItem, key: i },
            React.createElement(Image, { style: styles.swiperImage, source: { uri: item.bannerImg } }))))));
    }
    render() {
        return (React.createElement(View, { style: { height: 183, marginTop: 84 } }, this.renderItem()));
    }
}
export default SwiperBox;
//# sourceMappingURL=swiper.js.map