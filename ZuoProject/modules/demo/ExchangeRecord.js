/**
 * Created by ZuoMao on 18/5/4.
 */
import React, {Component} from 'react'
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Alert,
    TouchableHighlight,
    TouchableNativeFeedback,
    Navigator,
    AsyncStorage,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Slider,
    ImageBackground,
    DeviceInfo,
    Platform,
    ImageStore,
    ImageEditor,
    Modal
} from 'react-native'

import {LoadingModal, AnimateLoadingModal} from '../app/common/components.js'
import {COLOR_PRIMARY, COLOR_CLICK, globleStyles, settingStyle} from '../app/common/styles.js'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var dismissKeyboard = require('dismissKeyboard');

const isIPX = DeviceInfo.isIPhoneX_deprecated;
const bottomTapHeight = 50;
const statusHeight = isIPX?44:20;
const headerHeight = statusHeight + 44;

//npm install react-native-syan-image-picker --save



export default class ExchangeRecord extends Component{

    constructor(props){
        super(props);

        this.state={
            currentIndex:null,
            componentsYValue:[],
            componentsHeightValue:[]
        }
    }

    componentWillUnmount() {

    }

    componentDidMount() {

    }

    getRecordList(){
        var records = [{'allExchange':[{'name':'天使之吻','price':'100','count':5},{'name':'尊尼获加','price':'100','count':1}],'time':'2018-03-18 10:20',price:'1500'},
                      {'allExchange':[{'name':'龙吐舌','price':'200','count':4},{'name':'天使之吻','price':'100','count':2}],'time':'2018-03-19 12:00',price:'1800'},
                      {'allExchange':[{'name':'天使之吻','price':'100','count':3},{'name':'尊尼获加','price':'600','count':3}],'time':'2018-03-20 16:40',price:'1900'},
                      {'allExchange':[{'name':'尊尼获加','price':'500','count':2},{'name':'可口可乐','price':'100','count':3},{'name':'天使之吻','price':'300','count':4}],'time':'2018-03-21 17:10',price:'2100'},
                      {'allExchange':[{'name':'天使之吻','price':'300','count':1},{'name':'尊尼获加','price':'400','count':5}],'time':'2018-03-22 19:30',price:'2700'}]

        var list = records.map((val,index)=>{
            var godList = null
            if(val.allExchange && val.allExchange.length>0){
                godList = val.allExchange.map((value,i)=>{
                    return(
                        <Text key={i} style={{marginTop:5}}>{value.name}￥{value.price} x {value.count}</Text>
                    )
                })
            }
            return(
                <View style={{padding:10,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.3)'}} key={index}>
                    <Image source={require('../images/change.jpeg')} style={{width:40,height:40}}/>
                    <View style={{marginLeft:20,flex:1}}>
                        <Text>兑换:</Text>
                        {godList}
                        <Text style={{marginTop:5,fontSize:13,color:'rgba(0,0,0,0.3)'}}>{val.time}</Text>
                    </View>
                    <View style={{marginRight:10,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:18,color:'#000'}}>￥ {val.price}</Text>
                    </View>
                </View>
            )
        })

        return(
            <View>
                {list}
            </View>
        )
    }

    render() {
        var price = 200000
        return(
            <View style={styles.container}>
                <View style={styles.header_wraper}>
                    <View style={styles.status}>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.title}>兑换记录</Text>
                    </View>
                </View>
                <ScrollView
                    style={styles.scrollWraper}
                >
                    <View style={styles.price_header}>
                        <Text style={styles.price_title}>已兑换</Text>
                        <Text style={styles.price}>￥ {price}</Text>
                    </View>
                    {this.getRecordList()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    status:{
        height:statusHeight,
        backgroundColor:'#fff',
    },
    title:{
        fontSize:16,
        color:'#000'
    },
    header:{
        height:44,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',

    },
    scrollWraper:{
        backgroundColor:'#fff',
    },
    price_header:{
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.3)',
        paddingTop:10,
        paddingLeft:10,
    },
    price_title:{
        color:'rgba(0,0,0,0.5)',
        fontSize:13
    },
    price:{
        fontSize:20,
        color:'#000',
        textAlign:'center',
        marginTop:15,
        marginBottom:30
    }

});
