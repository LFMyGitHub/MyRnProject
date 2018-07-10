import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'

/**
 * 骰子
 */
export default class Dice extends Component{
    render(){
        return(
            <View style={FlexDiceStyle.container}>
                <Text style={FlexDiceStyle.item1}>1</Text>
                <Text style={FlexDiceStyle.item2}>2</Text>
                <Text style={FlexDiceStyle.item3}>3</Text>
                <Text style={FlexDiceStyle.item4}>4</Text>
                <Text style={FlexDiceStyle.item5}>5</Text>
                <Text style={FlexDiceStyle.item6}>6</Text>
                <Text style={FlexDiceStyle.item7}>7</Text>
                <Text style={FlexDiceStyle.item8}>8</Text>
                <Text style={FlexDiceStyle.item9}>9</Text>
            </View>
        )
    }
}

const FlexDiceStyle= StyleSheet.create({
    container:{
        backgroundColor: "blue",
        height: 300,
        width: 300,
        justifyContent: "space-between",//用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式 http://www.runoob.com/cssref/css3-pr-justify-content.html
        flexWrap: "wrap",//规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向 http://www.runoob.com/cssref/css3-pr-flex-wrap.html
        flexDirection: "row",//规定灵活项目的方向 http://www.runoob.com/cssref/css3-pr-flex-direction.html
    },
    item1: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",//指定元素文本的水平对齐方式
        textAlignVertical: "center",//设置内容在元素框中的垂直对齐方式
        margin: 4,
    },
    item2: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item3: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item4: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
        alignSelf: "flex-end"//定义flex子项单独在侧轴（纵轴）方向上的对齐方式
    },
    item5: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item6: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item7: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item8: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item9: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    }
})

AppRegistry.registerComponent('Dice', () => Dice);