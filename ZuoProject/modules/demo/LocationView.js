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
import SYImagePicker from 'react-native-syan-image-picker'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var dismissKeyboard = require('dismissKeyboard');

const isIPX = DeviceInfo.isIPhoneX_deprecated;

//npm install react-native-syan-image-picker --save


class LocationView extends Component{

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

    loactionTo(index){
        this.setState({
            currentIndex:index
        })
        //console.log('sbt  '+this.state.componentsYValue + 'height :' + this.state.componentsHeightValue);
        var h = 0
        for(var i=index ; i<this.state.componentsHeightValue.length ; i++ ){
            h+=this.state.componentsHeightValue[i]
        }
        if(h > screenHeight-50-64){
            this.refs.scroll.scrollTo({x: 0, y: this.state.componentsYValue[index], animated: true})
        }else{
            this.refs.scroll.scrollToEnd()
        }
    }

    setComponentLoaction(e,index){
        let {x, y, width, height} = e.nativeEvent.layout
        var valueY = this.state.componentsYValue.concat()
        var valueHeight = this.state.componentsHeightValue.concat()
        valueY[index]=y
        valueHeight[index]=height
        this.setState({
            componentsYValue:valueY,
            componentsHeightValue:valueHeight
        })
    }

    render() {

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                </View>
                <ScrollView
                    style={styles.scrollWraper}
                    ref='scroll'
                >
                    <View
                        style={{height:300,backgroundColor:'yellow'}}
                    >
                  </View>
                    <View
                        style={{height:230,backgroundColor:'green'}}
                        onLayout={(event)=>{
                            this.setComponentLoaction(event,0)
                        }}
                    >
                        <Text>0</Text>
                    </View>
                    <View
                        style={{height:230,backgroundColor:'blue'}}
                        onLayout={(event)=>{
                            this.setComponentLoaction(event,1)
                        }}
                    >
                        <Text>1</Text>
                    </View>
                    <View
                        style={{height:230,backgroundColor:'#fff'}}
                        onLayout={(event)=>{
                            this.setComponentLoaction(event,2)
                        }}
                    >
                        <Text>2</Text>
                    </View>
                    <View
                        onLayout={(event)=>{
                            this.setComponentLoaction(event,3)
                        }}
                    >
                        <View style={{height:235,backgroundColor:'pink'}}>
                            <Text>哈哈哈</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        style={[styles.locationTouchable,{backgroundColor:this.state.currentIndex==0?'pink':'#fff'}]}
                        onPress={()=>{
                            this.loactionTo(0)
                        }}
                    >
                    </TouchableOpacity>
                    <View style={styles.separatorLine}/>
                    <TouchableOpacity
                        style={[styles.locationTouchable,{backgroundColor:this.state.currentIndex==1?'pink':'#fff'}]}
                        onPress={()=>{
                            this.loactionTo(1)
                        }}
                    >
                    </TouchableOpacity>
                    <View style={styles.separatorLine}/>
                    <TouchableOpacity
                        style={[styles.locationTouchable,{backgroundColor:this.state.currentIndex==2?'pink':'#fff'}]}
                        onPress={()=>{
                            this.loactionTo(2)
                        }}
                    >
                    </TouchableOpacity>
                    <View style={styles.separatorLine}/>
                    <TouchableOpacity
                        style={[styles.locationTouchable,{backgroundColor:this.state.currentIndex==3?'pink':'#fff'}]}
                        onPress={()=>{
                            this.loactionTo(3)
                        }}
                    >
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header:{
        height:44+20,
        backgroundColor:'#fff'
    },
    scrollWraper:{
        backgroundColor:'#fff',
        marginBottom:50
    },
    bottomView:{
        position:'absolute',
        height:50,
        width:'100%',
        left:0,
        bottom:0,
        borderTopWidth:1,
        borderTopColor:'#000',
        zIndex:10,
        flexDirection:'row'
    },
    locationTouchable:{
        flex:1
    },
    separatorLine:{
        height:50,
        width:1,
        backgroundColor:'#000'
    }

});

export default LocationView
