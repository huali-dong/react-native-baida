import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import Swiper from "./Swiper/swiper";
import Header from "./Header/Header";
import Nav from "./Nav/nav";
import Before from "./before/before";
import Second from "./Second/second";
import Fetch from "../../util/fetch";
class HomeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list0: [],
            list1: [],
            list2: [],
            list3: [],
            list4: []
        };
    }
    componentWillMount() {
        Fetch("/api/bd-marketing/api/channel/getNewHeadPageData?_t=1543652309598")
            .then((result) => {
            this.setState({
                list0: result.data.list[0].list,
                list1: result.data.list[1].list,
                list2: result.data.list[2].list,
                list3: result.data.list[5].list,
                list4: result.data.list[6].list,
            });
        });
    }
    renderBox() {
        if (this.state.list0.length == 0)
            return false;
        return (React.createElement(View, { style: { flex: 1, position: 'relative' } },
            React.createElement(Header, null),
            React.createElement(Swiper, { list: this.state.list0 }),
            React.createElement(Nav, { list1: this.state.list1, list2: this.state.list2 }),
            React.createElement(Before, { list1: this.state.list3, list2: this.state.list4 }),
            React.createElement(Second, null)));
    }
    render() {
        return (React.createElement(ScrollView, null, this.renderBox()));
    }
}
export default HomeBox;
//# sourceMappingURL=index.js.map