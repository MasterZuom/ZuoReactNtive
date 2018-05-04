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


class UserFeedback extends Component{

    constructor(props){
        super(props);

        this.state={
            feedbackText:null,
            imageData:[],
            isSubmitting:false,
            isShowSuccess:false
        }
    }

    getImages(){
        var images = null

        if(this.state.imageData.length>0){
            images = this.state.imageData.map((value,index)=>{
                return(
                    <View key={index} style={userFeedbackStyle.littleImagesWrapper}>
                        <Image  source={{uri:value.uri}} style={userFeedbackStyle.images}/>
                        <TouchableOpacity
                            style={userFeedbackStyle.removeIconTouchable}
                            onPress={()=>{
                                var currentImages = this.state.imageData.concat()
                                currentImages.splice(index,1)
                                this.setState({
                                    imageData:currentImages
                                })
                            }}
                        >
                            <Image source={require('../images/channelRemoveIcon.png')} style={userFeedbackStyle.removeIcon}/>
                        </TouchableOpacity>
                    </View>
                )
            })
        }
        return(
            <View style={userFeedbackStyle.imageWrapper}>
                {images}
                <TouchableOpacity activeOpacity={0.7} style={userFeedbackStyle.addiconWrapper}
                    onPress={()=>{
                        if(this.state.imageData.length >=3 ){
                            return
                        }
                        var maxImageNumber = 3 - this.state.imageData.length
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
                            this.setState({
                                imageData:currentImages
                            })
                        })

                    }}
                >
                    <Image source={require('../images/add_icon.png')} style={userFeedbackStyle.addicon}/>
                </TouchableOpacity>
            </View>
        )
    }

    getSubmitBtn(){
        return(
            <TouchableOpacity activeOpacity={0.7} style={userFeedbackStyle.submitBtnTouchablbe}
                onPress={()=>{
                    if(!this.state.feedbackText){
                        Alert.alert('请输入您的反馈意见')
                        return
                    }
                    this.setState({isSubmitting:true})

                    var files = {}
                    let formData = new FormData()
                    for (var index in this.state.imageData) {
                        var file = {uri: this.state.imageData[index].uri,name: index + '.jpg', type: 'image/jpeg'}
                        formData.append("user_voice[pictures][]",file)
                    }
                    formData.append("user_voice[description]",this.state.feedbackText)

                    //上传图片
                    // window.network.fetchData('/api/v5/user_voices',null, "POST",{'Content-Type':'multipart/form-data'},formData)
                    // .then((res) => {
                    //     console.log('反馈数据是否提交成功'+JSON.stringify(res));
                    //     if(res.ok){
                    //         this.setState({isSubmitting:false},()=>{
                    //             this.setState({isShowSuccess:true},()=>{
                    //                 setTimeout(()=>{
                    //                     this.setState({isShowSuccess:false})
                    //                     this.props.navigation.goBack()
                    //                 },1000)
                    //             })
                    //         })
                    //     }else{
                    //         Alert.alert('错误',"提交反馈失败，请稍后重试",
                    //             [
                    //                 {text:'确定',onPress:()=>{this.setState({isSubmitting:false})}},
                    //             ])
                    //     }
                    // })
                    // .catch((err)=>{
                    //     Alert.alert('错误',"提交反馈失败，请稍后重试",
                    //         [
                    //             {text:'确定',onPress:()=>{this.setState({isSubmitting:false})}},
                    //         ])
                    // })
                }}
            >
                <Text style={userFeedbackStyle.submitText}>提交</Text>
            </TouchableOpacity>
        )
    }

    getSuccessModal(){
        return(
            <Modal
                transparent={true}
                animationType={"none"}
                visible={this.state.isShowSuccess}
                onRequestClose={()=>{
                  // add this callback to eliminate the yellowbox warning, do nothing now
                }}
            >
                <View style={{flex:1,justifyContent:'center',alignItems:'center',height:screenHeight,backgroundColor:'transparent'}}>
                    <View style={{position:'absolute',backgroundColor:'rgba(0,0,0,0.7)',justifyContent:'center',alignItems:'center',borderRadius:10,width:screenWidth*0.6}}>
                        <View style={{overflow:'hidden',zIndex:1,paddingLeft:15,paddingRight:15,paddingTop:20,paddingBottom:20}}>
                            <Text style={{color:'#fff',textAlign:'center',fontSize:14,fontWeight:'bold'}}>反馈成功</Text>
                            <Text style={{color:'#fff',marginTop:15,fontSize:12,lineHeight:14}}>感谢您的关注和支持，我们会认真处理您的反馈，尽快修复和完善相关功能</Text>
                        </View>
                    </View>
                </View>
          </Modal>
        )
    }

    render() {
        var loadingModal = (Platform.OS == 'ios') ? <AnimateLoadingModal isShowLoading={this.state.isSubmitting}/> : <LoadingModal isShowLoading={this.state.isSubmitting}/>
        var successModal = this.getSuccessModal()

        return(
            <ScrollView style={userFeedbackStyle.container}>
                <TextInput
                    style={userFeedbackStyle.input}
                    value={this.state.feedbackText}
                    multiline={true}
                    blurOnSubmit={false}
                    autoFocus={false}
                    returnKeyLabel={'换行'}
                    returnKeyType={'default'}
                    underlineColorAndroid="transparent"
                    placeholder={"我们如何改进"}
                    onChangeText={(text)=>{
                        this.setState({
                            feedbackText:text
                        })
                    }}
                />
                {this.getImages()}
                <Text style={userFeedbackStyle.tips}>最多上传3张图片</Text>
                {this.getSubmitBtn()}
                {loadingModal}
                {successModal}
            </ScrollView>
        )
    }
}

const userFeedbackStyle = StyleSheet.create({
    cancle: {
      marginTop: 30,
      width: 45,
      height: 45
    },
    container: {
      paddingLeft:20,
      paddingRight:20,
      backgroundColor:'#fff'
    },
    input: {
      paddingTop:13,
      paddingBottom:13,
      paddingLeft:18,
      paddingRight:18,
      textAlignVertical:'top',
      fontSize:14,color:'#666',
      backgroundColor:'#F9F9F9',
      borderColor:'#e5e5e5',
      borderWidth:1,
      borderRadius:4,
      height:200,
      marginTop:20,
    },
    imageWrapper:{
      flexDirection:'row',
      marginTop:20,
      height:70,
      alignItems:'center'
    },
    addiconWrapper:{
      width:60,
      height:60,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#e5e5e5',
      borderRadius:4
    },
    addicon:{
      width:20,
      height:20
    },
    tips:{
      color:'#999999',
      fontSize:12,
      marginTop:10
    },
    submitBtnTouchablbe:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#0492D4',
      height:50,
      flex:1,
      borderRadius:4,
      marginTop:20
    },
    submitText:{
      color:'#fff',
      fontSize:16
    },
    littleImagesWrapper:{
      width:60,
      height:60,
      marginRight:10
    },
    images:{
      width:60,
      height:60,
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

export default UserFeedback
