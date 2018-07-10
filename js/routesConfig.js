import HelloWorld from './test/helloWorld'
import MyDimensions from './components/myDimensions'

export default Routes = [{
    message: '我的首页',//title
    index: 0,//索引
    component: HelloWorld//组件
}, {
    message: '新闻、财务、关于',
    index: 1,
    component: MyDimensions
}];