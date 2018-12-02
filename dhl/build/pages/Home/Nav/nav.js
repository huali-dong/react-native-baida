import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
class NavBox extends Component {
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
}
export default NavBox;
//# sourceMappingURL=nav.js.map