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
  TouchableOpacity
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends Component {

  constructor(props){
      super(props)
      this.state={
          inputString:'adadsad',
          showComment:false,
          keyboardHeight:-500
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
      this.setState({
          showComment:false
      })
  }



  render() {
    var commentView = null
    if(this.state.showComment){
        commentView = (
            <TextInput
                style={{position:'absolute',width:200,height:50,left:20,bottom:this.state.keyboardHeight,zIndex:100,borderWidth:1,borderColor:'#000'}}
                autoFocus={true}
            />
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
        flex:1
    },
});
