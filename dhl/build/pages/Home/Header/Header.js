import React, { Component } from "react";
import { View, Image, TextInput } from "react-native";
import styles from "./style";
const Left = require("../../../../assets/images/header-left.png");
const Search = require("../../../../assets/images/search.png");
const Right = require("../../../../assets/images/header-right.png");
const Close = require("../../../../assets/images/cha.png");
class HeaderBox extends Component {
    render() {
        return (React.createElement(View, { style: styles.box },
            React.createElement(View, null,
                React.createElement(Image, { style: styles.img, source: Left })),
            React.createElement(View, { style: styles.center },
                React.createElement(Image, { style: [styles.textimg, { marginLeft: 10, }], source: Search }),
                React.createElement(TextInput, { style: styles.input }),
                React.createElement(Image, { style: styles.textimg, source: Close })),
            React.createElement(View, null,
                React.createElement(Image, { style: styles.right, source: Right }))));
    }
}
export default HeaderBox;
//# sourceMappingURL=Header.js.map