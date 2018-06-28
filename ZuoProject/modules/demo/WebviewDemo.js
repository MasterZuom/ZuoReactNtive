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
    Picker,
    WebView
} from 'react-native'

export default class WebviewDemo extends Component{

    constructor(props){
        super(props);

        this.state={

        }
    }

    componentDidMount(){

    }

    render() {
        const source = require('./h5/SwiperDemo/130-centered.html')

        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={styles.webview}>
                    <WebView
                        style={styles.webview}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        removeClippedSubviews={false}
                        ref='audioWebView'
                        source={source}
                        scrollEnabled={false}
                        onLoadEnd={()=>{

                        }}
                        onShouldStartLoadWithRequest={(event)=>{
                            return true;
                        }}
                    />
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    webview:{
        marginTop:50,
        height:140,
    }
})
