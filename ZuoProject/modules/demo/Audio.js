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

var MyRNUtils = require('react-native').NativeModules.MyRNUtils;

export default class Audio extends Component{

    constructor(props){
        super(props);

        this.state={

        }
    }

    componentDidMount(){

    }


    render() {
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <TouchableOpacity style={{marginTop:50,marginLeft:40}} onPress={()=>{
                    MyRNUtils.showAudioVC()
                }}>
                    <Text>听音乐，用我</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
