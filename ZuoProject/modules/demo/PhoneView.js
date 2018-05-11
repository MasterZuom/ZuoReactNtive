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
    Modal,
    StatusBar,
    CameraRoll
} from 'react-native'

import {LoadingModal, AnimateLoadingModal} from '../app/common/components.js'
import {AlbumView} from 'teaset'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var dismissKeyboard = require('dismissKeyboard');

const isIPX = DeviceInfo.isIPhoneX_deprecated;

//npm install --save teaset


class PhoneView extends Component{

    constructor(props){
        super(props);
        this.state={
            albumModalVisible:false
        }
    }

    render() {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                <TouchableOpacity
                    onPress={()=>{
                        this.setState({
                            albumModalVisible:true
                        })
                    }}
                >
                    <Text>打开</Text>
                </TouchableOpacity>
                <AlbumModal
                    albumModalVisible={this.state.albumModalVisible}
                    defaultIndex={0}
                    images={
                        [
                            {uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=164709423,849496705&fm=27&gp=0.jpg'},
                            {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526037381895&di=2499ee0bb32e1d7ab99e091ae325d429&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20170920%2F20170920133202_88dac049c499919c0a3f95b1d086c05c_7.jpeg'},
                            {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526037381893&di=d5a0f99c953fa97721f551b3789a8ce3&imgtype=0&src=http%3A%2F%2Fimage.uczzd.cn%2F885724277583296487.jpeg%3Fid%3D0%26from%3Dexport'},
                            {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526037381893&di=f580fb99e8a523d2f695a5d288d4dd43&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fbaike%2Fs%3D500%2Fsign%3Dd04ab479ba7eca80160539e7a1229712%2Fae51f3deb48f8c54f6b5d77530292df5e0fe7f01.jpg'},
                        ]
                    }
                    close={()=>{
                        this.setState({
                            albumModalVisible:false
                        })
                    }}
                />
            </View>
        )
    }
}

class AlbumModal extends Component{

    constructor(props){
        super(props);

        this.state={
            showHeader:true,
            currentIndex:props.defaultIndex,
            successViewVisible:false
        }
    }

    toastSuccessView(){
        this.setState({successViewVisible:true})
        setTimeout(()=>{
            this.setState({
                successViewVisible:false
            })
        },2000)
    }

    saveImg(img) {
        let that = this
        var promise = CameraRoll.saveToCameraRoll(img)
        promise.then(function(result) {
            that.toastSuccessView()
        }).catch(function(error) {
            alert('保存失败！\n' + error);
        })
    }

    getAnimateHeader(){
        if(this.state.showHeader){
            return(
                <View style={{backgroundColor:'#000',paddingTop:20,position:'absolute',top:0,left:0,width:screenWidth,zIndex:10}}>
                    <StatusBar barStyle="light-content"/>
                    <View style={{height:44,backgroundColor:'#000',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>图片浏览</Text>
                        <TouchableOpacity
                            style={{position:'absolute',paddingLeft:10,height:44,left:0,top:0,justifyContent:'center',alignItems:'center'}}
                            onPress={()=>{
                                this.props.close()
                            }}
                        >
                            <Text style={{fontSize:14,color:'#fff'}}>关闭</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{position:'absolute',paddingRight:10,height:44,right:0,top:0,justifyContent:'center',alignItems:'center'}}
                            onPress={()=>{
                                this.saveImg(this.props.images[this.state.currentIndex].uri)
                            }}
                        >
                            <Text style={{fontSize:14,color:'#fff'}}>保存</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else{
            return null
        }
    }

    render() {
        return(
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={this.props.albumModalVisible}
                onRequestClose={()=>{}}
            >
                <View style={{flex:1,height:screenHeight,backgroundColor:'rgba(26,26,26,0.4)'}}>
                    {this.getAnimateHeader()}
                    <AlbumView
                        defaultIndex={this.props.defaultIndex}
                        style={{flex: 1}}
                        control={false}
                        images={this.props.images}
                        maxScale={3}
                        onWillChange={(index, newIndex)=>{
                            console.log(newIndex);
                            this.setState({
                                currentIndex:newIndex
                            })
                        }}
                        onPress={(index, event)=>{
                            this.setState({
                                showHeader:!this.state.showHeader
                            })
                        }}
                    />
                    <SuccessView
                        successViewVisible={this.state.successViewVisible}
                    />
                </View>
            </Modal>
        )
    }
}

class SuccessView extends Component{
    render(){
        var showView = null
        if(this.props.successViewVisible){
            showView=(
                <View style={{backgroundColor:'#000',width:150,height:44,position:'absolute',bottom:85,left:(screenWidth-150)/2,zIndex:10,borderRadius:4,justifyContent:'center',alignItems:'center',opacity:0.8}}>
                    <Text style={{color:'#fff',fontSize:14}}>保存成功</Text>
                </View>
            )
        }
        return showView
    }
}

export default PhoneView
