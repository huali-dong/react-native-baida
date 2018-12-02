import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
class Second extends Component {
    render() {
        return (React.createElement(View, { style: styles.box },
            React.createElement(View, { style: styles.top },
                React.createElement(Text, null, "\u9650\u65F6\u79D2\u6740"),
                React.createElement(Text, null, "\u66F4\u591A\u79D2\u6740"))));
    }
}
export default Second;
//# sourceMappingURL=second.js.map