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

} from 'react-native'

import {LoadingModal, AnimateLoadingModal} from '../app/common/components.js'
import {COLOR_PRIMARY, COLOR_CLICK, globleStyles, settingStyle} from '../app/common/styles.js'
import DateTimePicker from 'react-native-modal-datetime-picker';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var dismissKeyboard = require('dismissKeyboard');

const isIPX = DeviceInfo.isIPhoneX_deprecated;

//npm install --save react-native-modal-datetime-picker


class DatePicker extends Component{

    constructor(props){
        super(props);

        this.state={
            isDateTimePickerVisible:false,
            date:new Date("2012-12-25")
        }
    }

    componentDidMount(){

    }

    getDateString(date){
        return date.getFullYear()+'-'+ (date.getMonth()+1) +'-'+date.getDate()
    }

    showDateTimePicker() {
        this.setState({ isDateTimePickerVisible: true })
    }

    hideDateTimePicker(){
        this.setState({ isDateTimePickerVisible: false })
    }

    handleDatePicked(date){
        this.setState({
            date:date
        })
        this.hideDateTimePicker()
    }

    render() {
        return(
            <ScrollView style={userFeedbackStyle.container}>
                <TouchableOpacity style={{marginTop:40}} onPress={()=>{this.showDateTimePicker()}}>
                    <Text>{this.getDateString(this.state.date)}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    date={this.state.date}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={(date)=>{this.handleDatePicked(date)}}
                    onCancel={()=>{this.hideDateTimePicker()}}
                    mode={'date'}
                    confirmTextIOS={'确定'}
                    cancelTextIOS={'取消'}
                />
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
    instructions:{
        marginTop:100,
        borderColor:'#fff'
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

export default DatePicker
