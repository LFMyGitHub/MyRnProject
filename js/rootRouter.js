import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
    Dimensions
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components'
import Routes from './routesConfig'

export default class Root extends Component {
    _routesLen = Number(Routes.length - 1); //路由长度，索引从0开始

    render() {
        const routes = Routes;
        return (
            <Navigator
                initialRoute={routes[1]}//默认第一个索引，可以认为是首页
                initialRouteStack={routes}//栈
                renderScene={(route, navigator) =>
                    <route.component route={route} navigator={navigator} routes={routes}/>
                }
                style={
                    styles.navigator
                }
                configureScene={
                    (route) => {
                        if (route.index) {
                            return Navigator.SceneConfig.PushFromRight;
                        }
                    }
                }
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{//导航栏路由映射器, 设置左键LeftButton, 右键RightButton, 标题Title.
                            //左键
                            LeftButton: (route, navigator, index, navState) => {
                                if (route.index === 0) {
                                    return null;
                                } else {
                                    return (
                                        <TouchableHighlight onPress={() => {
                                            navigator.jumpBack()//不能是当前栈里面的第一个页面
                                        }}>
                                            <Text style={[styles.titleBar, {left: 0}]}>返回</Text>
                                        </TouchableHighlight>
                                    )
                                }
                            },
                            // 右键
                            RightButton: (route, navigator, index, navState) => {
                                if (route.index === this._routesLen) {
                                    return null;
                                } else {
                                    return (
                                        <TouchableHighlight onPress={() => {
                                            let routes = navigator.getCurrentRoutes()
                                            if (routes.length < 1) {
                                                return;
                                            }
                                            if (routes.pop().index !== route.index) {
                                                navigator.jumpForward() //不能是当前栈里面的最后一个页面
                                            }
                                        }}>
                                            <Text style={[styles.titleBar, {right: 0}]}>下一步</Text>
                                        </TouchableHighlight>)
                                }
                            },
                            Title: (route, navigator, index, navState) => {
                                return (<Text style={styles.TitleCont}>{route.message}</Text>);
                            },
                        }
                        }
                        style={styles.titleBarBg}
                    />
                }
            >
            </Navigator>
        )
    }
}

const styles = StyleSheet.create({
    navigator: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#999999',
        paddingTop: 55,
        flex: 1,
    },
    titleBarBg: {
        backgroundColor: '#008dfd',
    },
    TitleCont: {
        fontSize: 18,
        color: '#FFFFFF',
        alignItems: "center",
        width: 210,
        marginTop: 16,
        textAlign: 'center',
        justifyContent: "center",

    },
    titleBar: {
        fontSize: 14,
        color: '#ffffff',
        position: "relative",
        top: 16,
        width: 54,
        height: 55,
        paddingLeft: 5
    }
})

AppRegistry.registerComponent('Root', () => Root);