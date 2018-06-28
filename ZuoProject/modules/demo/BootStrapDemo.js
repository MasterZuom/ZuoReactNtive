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

export default class BootStrapDemo extends Component{

    constructor(props){
        super(props);

        this.state={

        }
    }

    componentDidMount(){

    }

    render() {
        const source = require('./h5/BootStrapDemo/index.html')

        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
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
        )
    }
}

let styles = StyleSheet.create({

})
