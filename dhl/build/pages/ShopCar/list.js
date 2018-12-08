import React, { Component } from "react";
import { View, Image, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import Fetch from "../../util/fetch";
import uuid from "uuid";
class List extends Component {
    constructor(props) {
        super(props);
        this.getList = () => {
            Fetch("/api/bd-marketing/api/activity/getProductList?activityId=1701031131360001&startNum=" + this.state.startNum + "&_t=1544011507333")
                .then((res) => {
                let new_list = [...this.state.list, ...res.data.list];
                this.setState({
                    list: new_list,
                    refreshing: false,
                    isShow: false,
                    startNum: this.state.startNum + 10
                });
            });
        };
        this.onEndfoot = () => {
            this.setState({ isShow: true });
            this.getList();
        };
        this._onRefresh = () => {
            this.setState({ refreshing: true });
            this.getList();
        };
        this.state = {
            list: [],
            refreshing: false,
            startNum: 0,
            isShow: true
        };
    }
    componentWillMount() {
        this.getList();
    }
    renderItem(prop) {
        let { item, index } = prop;
        return (React.createElement(View, { style: styles.List, key: index },
            React.createElement(Image, { source: { uri: item.itemLogoUrl }, style: styles.img }),
            React.createElement(View, null,
                React.createElement(Text, null, item.itemTitle),
                React.createElement(Text, { style: styles.text },
                    "\uFFE5",
                    item.salePrice))));
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(FlatList, { data: this.state.list, renderItem: this.renderItem, keyExtractor: (item, index) => uuid(), onEndReached: this.onEndfoot, onEndReachedThreshold: 0.1, refreshing: this.state.refreshing, onRefresh: this._onRefresh }),
            this.state.isShow ?
                React.createElement(View, { style: [styles.container, styles.horizontal] },
                    React.createElement(ActivityIndicator, { size: "small", color: "red" }))
                : React.createElement(Text, null)));
    }
}
export default List;
//# sourceMappingURL=list.js.map