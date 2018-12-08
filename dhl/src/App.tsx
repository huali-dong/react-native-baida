import React, {Component} from "react"
import MainContanier from "./pages/Main/MainContainer"
import DetailContainer from "./pages/Detail/index"
import {Provider} from "mobx-react"
import store from "./store/index"
import { createStackNavigator} from "react-navigation";
const AppNavigator = createStackNavigator({
    Home: {
        screen: MainContanier
    },
    Detail: {
        screen: DetailContainer
    },
    initialRouteName: 'Home'
})
class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <AppNavigator></AppNavigator>
            </Provider>
        )
    }
}
export default App