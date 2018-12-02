import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
class Before extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: styles.box },
            React.createElement(Image, { style: styles.imgbefore, source: { uri: this.props.list1[0].bannerImg } }),
            React.createElement(View, { style: styles.list }, this.props.list2.map((item, i) => (React.createElement(Image, { style: styles.img, key: i, source: { uri: item.bannerImg } }))))));
    }
}
export default Before;
//# sourceMappingURL=before.js.map