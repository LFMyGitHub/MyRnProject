import React,{Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//首先要导入Dimensions包
var Dimensions = require('Dimensions');

class MyDimensions extends Component {
    render() {
        return (
            <View style={styles1.container}>
               {/*React Native中获取宽高及分辨率方法*/}
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的分辨率:{Dimensions.get('window').scale }</Text>
            </View>
        );
    }
}

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('MyDimensions',()=>MyDimensions);