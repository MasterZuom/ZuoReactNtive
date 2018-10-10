/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 //  npm i autoresponsive-react-native --save

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Modal
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import SYImagePicker from 'react-native-syan-image-picker'


export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            inputString:null,
            consumption:null,
            showComment:false,
            keyboardHeight:-500,
            grade:0,
            imageData:[],
        }
    }

    componentWillMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow',(e)=>{
            this._keyboardDidShow(e)
        });
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide',(e)=>{
            this._keyboardDidHide(e)
        });
    }

    componentWillUmmount(){
        this.keyboardWillShowListener.remove();
        this.keyboardWillHideListener.remove();
    }

    _keyboardDidShow(e){
        this.key=e.endCoordinates.height;
        this.setState({
            keyboardHeight:e.endCoordinates.height,
            showComment:true
        })
    }

    _keyboardDidHide(e){
        this.key=e.startCoordinates.height;
        // this.setState({
        //     showComment:false
        // })
    }

    getGradeButton(index){
        var star = (
            <View style={{width:15,height:15,justifyContent:'center',alignItems:'center',backgroundColor:'gray'}}>
            </View>
        )

        if(this.state.grade>index){
            star = (
                <View style={{width:15,height:15,justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}>
                </View>
            )
        }

        return (
            <TouchableOpacity
                style={{marginLeft:8}}
                activeOpacity={0.8}
                onPress={()=>{
                    this.setState({
                        grade:index+1
                    })
                    this.setState({
                        inputString:this.state.inputString + '👌'
                    })
                }}
            >
                {star}
            </TouchableOpacity>
        )
    }

    getPhotos(){
        var images = null

        if(this.state.imageData.length>0){
            images = this.state.imageData.map((value,index)=>{
                return(
                    <View key={index} style={styles.littleImagesWrapper}>
                        <Image  source={{uri:value.uri}} style={styles.images}/>
                        <TouchableOpacity
                            style={styles.removeIconTouchable}
                            onPress={()=>{
                                var currentImages = this.state.imageData.concat()
                                currentImages.splice(index,1)
                                this.setState({
                                    imageData:currentImages,
                                    showComment:true
                                })
                            }}
                        >
                            <Image source={require('../images/channelRemoveIcon.png')} style={styles.removeIcon}/>
                        </TouchableOpacity>
                    </View>
                )
            })
        }
        return(
            <View style={styles.imageWrapper}>
                {images}
                <TouchableOpacity activeOpacity={0.7} style={styles.addiconWrapper}
                    onPress={()=>{
                        if(this.state.imageData.length >=4 ){
                            return
                        }
                        var maxImageNumber = 4 - this.state.imageData.length
                        var options = {
                                imageCount: maxImageNumber,
                                isCamera: true,
                                isCrop: false,
                                CropW: 0,
                                CropH: 0,
                                isGif: false,
                                showCropCircle: false,
                                circleCropRadius: 0,
                                showCropFrame: true,
                                showCropGrid: false,
                                quality: 30
                            }

                        SYImagePicker.showImagePicker(options, (err, selectedPhotos) => {
                            if (err) {
                                return;
                            }
                            var currentImages = this.state.imageData.concat()
                            currentImages = currentImages.concat(selectedPhotos)
                            console.log('sbt   ');
                            this.setState({
                                imageData:currentImages,
                                showComment:true
                            })
                        })

                    }}
                >
                    <Image source={require('../images/add_icon.png')} style={styles.addicon}/>
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        var commentView = null
        if(this.state.showComment){
            commentView = (
                <View style={{backgroundColor:'rgba(0,0,0,0.5)',height:SCREEN_HEIGHT,width:SCREEN_WIDTH,position:'absolute'}}>
                    <View style={{backgroundColor:'#fff',zIndex:100,width:'100%',position:'absolute',padding:10,bottom:this.state.keyboardHeight}}>
                        <View style={{height:25}}>
                            <TouchableOpacity
                                style={{position:'absolute',right:0,top:0,paddingRight:5,paddingLeft:10,paddingBottom:5}}
                                onPress={()=>{
                                    //this.setState({showComment:false})
                                    Keyboard.dismiss()
                                }}
                            >
                                <Text>关闭</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
                            <Text>评分:</Text>
                            {this.getGradeButton(1)}
                            {this.getGradeButton(2)}
                            {this.getGradeButton(3)}
                            {this.getGradeButton(4)}
                            {this.getGradeButton(5)}
                            <Text style={{marginLeft:10}}>人均消费</Text>
                            <TextInput
                                defaultValue={this.state.consumption}
                                style={{width:50,height:20,borderBottomWidth:1,borderColor:'rgba(0,0,0,0.3)',textAlign:'center'}}
                                keyboardType={'numeric'}
                                onChangeText={(text)=>{
                                    this.setState({consumption:text})
                                }}
                            />
                            <Text>元</Text>
                        </View>
                        <View style={styles.inputWraper}>
                            <TextInput
                                defaultValue={this.state.inputString}
                                value={this.state.inputString}
                                style={styles.input}
                                multiline={true}
                                blurOnSubmit={true}
                                autoFocus={true}
                                returnKeyType={'send'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text)=>{
                                    this.setState({inputString:text})
                                }}
                                onSubmitEditing={(text)=>{
                                    console.log('sbt  '+this.state.inputString+this.state.consumption);
                                    //清空所有评论数据
                                    this.setState({
                                        inputString:null,
                                        consumption:null,
                                        grade:0,
                                        imageData:[]
                                    })
                                }}
                            />
                            {this.getPhotos()}
                        </View>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{marginTop:50,marginLeft:50,height:40,width:40}}
                    onPress={()=>{
                        this.setState({
                            showComment:true
                        })
                    }}
                >
                    <Text>出来</Text>
                </TouchableOpacity>

                {commentView}
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    inputWraper:{
        backgroundColor:'#F9F9F9',
        borderColor:'#e5e5e5',
        borderWidth:1,
        borderRadius:4,
        marginTop:10,
    },
    input: {
        height:80,
        padding:10,
        fontSize:14,
        color:'#666'
    },
    imageWrapper:{
      flexDirection:'row',
      marginTop:20,
      alignItems:'center',
      marginLeft:10,
      paddingBottom:10
    },
    addiconWrapper:{
      width:30,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#e5e5e5',
      borderRadius:4,
      marginLeft:5
    },
    addicon:{
      width:20,
      height:20
    },
    littleImagesWrapper:{
      width:30,
      height:30,
      marginRight:10
    },
    images:{
      width:30,
      height:30,
    },
    removeIconTouchable:{
      position:'absolute',
      width:17,
      height:17,
      top:-8,
      right:-8
    },
    removeIcon:{
      width:17,
      height:17,
    }
});
