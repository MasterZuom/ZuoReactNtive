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
    Picker
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
            selected:' ',
            dropdown:' ',
            date:new Date(),
            sex:'男'
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

    onValueChange(flag,value) {
        if(flag ==1){
            this.setState({selected:value});
        }else{
            this.setState({dropdown:value});
        }
    }

    render() {
        return(
            <ScrollView style={userFeedbackStyle.container}>
                <TouchableOpacity style={{marginTop:40}} onPress={()=>{this.showDateTimePicker()}}>
                    <Text>{this.getDateString(this.state.date)}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{marginTop:40}}
                    onPress={()=>{
                        Alert.alert('请选择您的性别','',
                            [
                              {text:'男',onPress: ()=>{
                                  this.setState({'sex':'男'})
                              }},
                              {text:'女',onPress: ()=>{
                                  this.setState({'sex':'女'})
                              }},
                              {text:'取消',onPress: ()=>{}},
                            ]
                        )
                    }}
                >
                    <Text>{this.state.sex}</Text>
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

class CommonModal extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return(
     <Modal
       animationType = {"none"}
       transparent = {true}
       visible = {this.props.isVisible}
       onRequestClose = {() => {
          // add this callback to eliminate the yellowbox warning, do nothing now
        }}
     >
        <View style={{flex:1,backgroundColor:'rgba(0,0,0,.4)',justifyContent:'center'}}>
          <View style={{marginLeft:screenWidth < 375 ? 20 : 30,marginRight:screenWidth < 375 ? 20 : 30,backgroundColor:'#fff',borderRadius:4}}>
            <View style={{padding:15,paddingTop:20,alignItems:'center'}}>
              {
                this.props.title ? <Text style={{color:'#1a1a1a',fontSize:18,fontWeight:'bold',marginBottom:15,lineHeight:20}}>{this.props.title}</Text> : null
              }
              {
                this.props.contents.length > 0 ? this.props.contents.map((item, idx) =>
                  <Text key={idx} style={{color:'#666',fontSize:14,lineHeight:18,marginLeft:5,marginRight:5}}>{item}</Text>
                ) : null
              }
            </View>
            <View style={{flexDirection:'row-reverse',paddingBottom:15,paddingLeft:10,paddingRight:10,marginTop:10}}>
              {
                this.props.buttons.length > 0 ? this.props.buttons.map((item, idx) =>
                  item.type === 'confirm' ?
                  <TouchableOpacity activeOpacity={.8} key={idx} style={{flex:1,height:45,alignItems:'center',justifyContent:'center',borderRadius:4,backgroundColor:'#0492D4',marginLeft:5,marginRight:5}} onPress={() => { this.props.confirmCallback && this.props.confirmCallback() }}>
                    <Text style={{fontSize:14,color:'#fff'}}>{item.text}</Text>
                  </TouchableOpacity> :
                  <TouchableOpacity activeOpacity={.8} key={idx} style={{flex:1,height:45,alignItems:'center',justifyContent:'center',borderRadius:4,borderWidth:1,borderColor:'#e5e5e5',marginLeft:5,marginRight:5}} onPress={() => { this.props.cancelCallback && this.props.cancelCallback() }}>
                    <Text style={{fontSize:14,color:'#666'}}>{item.text}</Text>
                  </TouchableOpacity>
                ) : null
              }
            </View>
          </View>
        </View>
     </Modal>
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
