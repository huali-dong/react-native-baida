import React, { Component } from "react";
import { View, Image } from "react-native";
const detail = require("../../../../assets/images/detail.jpg");
class Header extends Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(Image, { source: { uri: detail } })));
    }
}
export default Header;
//# sourceMappingURL=header.js.map