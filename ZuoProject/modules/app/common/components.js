import React, {Component} from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    StatusBar,
    Platform,
    Modal,
    Dimensions,
    Linking,
    Image,
    Alert,
    TouchableOpacity,
    Animated,
    ToastAndroid,
    DeviceInfo,
    ScrollView,
    DeviceEventEmitter
} from 'react-native'
import {COLOR_PRIMARY} from './styles.js'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export const LoadingPage = (props) => (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
        <ActivityIndicator size={'small'}/>
        {props.text && <Text style={{marginTop:10}}>{props.text}</Text>}
    </View>
);


const STATUSBAR_HEIGHT = 0;

if (Platform.OS === 'ios'){
  if (DeviceInfo.isIPhoneX_deprecated) STATUSBAR_HEIGHT = 44;
  else STATUSBAR_HEIGHT = 20;
}

export const MyStatusBar = () => (
    <View style={{height:STATUSBAR_HEIGHT,backgroundColor:COLOR_PRIMARY}}>
        <StatusBar barStyle="light-content" />
    </View>
);

export class LoadingModal extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Modal
        transparent={true}
        animationType={"fade"}
        visible={this.props.isShowLoading}
        onRequestClose={()=>{
          // add this callback to eliminate the yellowbox warning, do nothing now
        }}
      >
        <View style={{flex:1,justifyContent:'center',alignItems:'center',height:screenHeight,backgroundColor:'rgba(26,26,26,0.4)'}}>
          <View style={{position:'absolute',width:80,height:80,backgroundColor:'rgba(0,0,0,0.7)',justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <ActivityIndicator color={"#fff"} size={'small'}/>
          </View>
        </View>
      </Modal>
    )
  }
}

export class WhiteLoadingModal extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <Modal
            transparent={true}
            animationType={"none"}
            visible={this.props.isShowLoading}
            onRequestClose={()=>{}}
        >
          <View style={{flex:1,justifyContent:'center',alignItems:'center',height:screenHeight,backgroundColor:'rgba(0,0,0,0)'}}>
            <View style={{position:'absolute',width:80,height:80,backgroundColor:'rgba(0,0,0,0)',justifyContent:'center',alignItems:'center',borderRadius:10}}>
              <ActivityIndicator size={'small'}/>
            </View>
          </View>
        </Modal>
    )
  }
}

export class AnimateLoadingModal extends Component{
  constructor(props) {
    super(props);
    this.state={
        frame: 0,
        duration: 0
    }
    this.scenesLength = 25;
    this.timer = null;
  }
  componentDidMount(){
      var that = this;
      this.timer = setInterval(function(){
          that.setState({
              frame: that.state.frame >= that.scenesLength - 1 ? this.scenesLength - 1 : ++that.state.frame,
              duration: ++that.state.duration
          });
          if (that.state.duration >= that.scenesLength * 1.6){
              that.setState({
                  frame: 0,
                  duration: 0
              });
          }
      }, 29.97);
  }
  componentWillUnmount(){
      this.timer && clearInterval(this.timer);
  }
  render(){
      return(
          <Modal
            transparent={true}
            animationType={"none"}
            visible={this.props.isShowLoading}
            onRequestClose={()=>{
              // add this callback to eliminate the yellowbox warning, do nothing now
            }}
          >
            <View style={{flex:1,justifyContent:'center',alignItems:'center',height:screenHeight,backgroundColor:'rgba(26,26,26,0.4)'}}>
              <View style={{position:'absolute',width:80,height:80,backgroundColor:'rgba(0,0,0,0.7)',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <View style={{
                    width:40,
                    height:40,
                    overflow:'hidden',
                    zIndex:1 /* fixed 'overflow:hidden' not working on android */
                }}>
                    <Image source={require('./../../images/loading_sequence.png')} resizeMode={'cover'} style={{width:1000,height:40,position:'relative',left:(this.state.frame * -40)}}/>
                </View>
              </View>
            </View>
          </Modal>
        )
    }
}

export class AnimateLoading extends Component{
  constructor(props) {
    super(props);
    this.state={
        frame: 0,
        duration: 0
    }
    this.scenesLength = 25;
    this.timer = null;
  }
  componentDidMount(){
      var that = this;
      this.timer = setInterval(function(){
          that.setState({
              frame: that.state.frame >= that.scenesLength - 1 ? this.scenesLength - 1 : ++that.state.frame,
              duration: ++that.state.duration
          });
          if (that.state.duration >= that.scenesLength * 1.6){
              that.setState({
                  frame: 0,
                  duration: 0
              });
          }
      }, 29.97);
  }
  componentWillUnmount(){
      this.timer && clearInterval(this.timer);
  }
  render(){
      return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{
                    position:'relative',
                    top:screenHeight*0.5,
                    marginTop:-40,
                    alignSelf:'center',
                    width:40,
                    height:40,
                    overflow:'hidden',
                    zIndex:1 /* fixed 'overflow:hidden' not working on android */
                }}>
                    <Image source={require('./../../images/loading_sequence.png')} resizeMode={'cover'} style={{width:1000,height:40,position:'relative',left:(this.state.frame * -40)}}/>
                </View>
            </View>
        )
    }
}

export class WarningModal extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Modal
        animationType={"none"}
        transparent={true}
        visible={this.props.warningModalVisible}
        onRequestClose={()=>{}}
      >
          <View style={{flex:1,backgroundColor:'rgba(26,26,26,0.4)',justifyContent:'center',alignItems:'center',height:screenHeight}}>
            <View style={{width:screenWidth-100,backgroundColor:'#fff',borderRadius:4}}>
              <View style={{alignItems:'center',marginTop:20,paddingLeft:20,paddingRight:20}}>
                <Text style={{textAlign:'center',fontSize:14}}>{this.props.warnigTips}</Text>
              </View>
              <View style={{height:1,backgroundColor:'#E5E5E5',width:screenWidth-100,marginTop:20}}/>
              <TouchableOpacity onPress={()=>{this.props.close()}}>
                <View style={{alignItems:'center',justifyContent:'center',height:44}}>
                  <Text style={{color:'#0492D4',fontSize:16}}>确定</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    )
  }
}

export class ContactUsModal extends Component {
    constructor(props) {
      super(props);
    }

    render(){
      return(
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.props.contactusModalVisible}
          onRequestClose={()=>{}}
        >
            <View style={{flex:1,backgroundColor:'rgba(26,26,26,0.4)',justifyContent:'center',alignItems:'center',height:screenHeight}}>
              <View style={{width:screenWidth-50,height:152,backgroundColor:'#fff',borderRadius:4}}>
                <TouchableOpacity onPress={()=>{
                  Linking.openURL('tel:400-6894-288');
                  this.props.close()
                }}>
                  <View style={{alignItems:'center',justifyContent:'center',height:50}}>
                    <Text style={{color:'#1A1A1A',fontSize:16}}>致电400-6894-288热线</Text>
                  </View>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:'#E5E5E5'}}/>
                <TouchableOpacity onPress={()=>{
                  Linking.canOpenURL('mailto:'+'service@dealglobe.com').then(
                    (supported)=>{
                      if(supported){
                        Linking.openURL('mailto:'+'service@dealglobe.com');
                        this.props.close()
                      }else{
                        Alert.alert('错误','您的设备暂不支持该功能');
                      }
                    })
                }}>
                  <View style={{alignItems:'center',justifyContent:'center',height:50}}>
                    <Text style={{color:'#1A1A1A',fontSize:16}}>Email联系项目服务团队</Text>
                  </View>
                </TouchableOpacity>
                <View style={{height:1,backgroundColor:'#E5E5E5'}}/>
                <TouchableOpacity onPress={()=>{this.props.close()}}>
                  <View style={{alignItems:'center',justifyContent:'center',height:50}}>
                    <Text style={{color:'#0492D4',fontSize:16}}>取消</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
      )
    }
}


//错误提示信息系
export class ErrorRemindComponent extends Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        var remindView=this.props.showRemind?(
            <View style={[{flexDirection:'row',alignItems:'center',marginLeft:25,marginTop:5},this.props.style]}>
                <Image
                    source={require('./../../images/form_valid_error_icon.png') }
                    style={{height:11,width:11}}
                />
                <Text style={{color:'#FC5529',marginLeft:3}}>{this.props.remindText}</Text>
            </View>
        ):null;

        return remindView;
    }
}

/*
控件使用方式：
(1)在TextInput的onTextChange方法中，当输入的值改变时，触发DeviceEventEmitter.emit("DeliverEmailToSelector", this.state.username)事件，同时将用户的输入值传入到组件中去
(2)在引用组件的时候可以在style中为组件设置属性，使用callBackToGetSelectEmail作为回调，将用户选择的邮箱格式
*/

export class EmailSelector extends Component{
    constructor(props)
    {
        super();
        this.emailSuffix=["qq.com","163.com","126.com","dealglobe.com","hotmail.com","gmail.com","yahoo.com.cn","yahoo.com","sina.com","sina.cn","sohu.com","tom.com"];
        this.selectorEmail=[];
        this.matchEmail=[];
        this.state={
            showEmailSelector:false,//是否显示邮箱选择器
            email:"",//用户输入的邮箱
        };
    }

    componentDidMount() {
        this.DeliverEmailToSelector=DeviceEventEmitter.addListener("DeliverEmailToSelector",(userEmail)=>{
            this.setState({...this.state,email:userEmail},()=>{
                if(this.state.email.indexOf("@")!=-1)
                {
                    if(this.selectorEmail.length==0)
                    {
                        var allCompleteEmail=[];
                        for(i=0;i<this.emailSuffix.length;i++)
                        {
                            allCompleteEmail.push(this.state.email+this.emailSuffix[i]);
                        }
                        this.selectorEmail=allCompleteEmail;
                        this.matchEmail=allCompleteEmail;
                    }else{
                        var matchEmail=[];
                        for(i=0;i<this.selectorEmail.length;i++)
                        {
                            if(this.selectorEmail[i].indexOf(this.state.email)!=-1)
                            {
                                matchEmail.push(this.selectorEmail[i]);
                            }
                        }
                        this.matchEmail=matchEmail;
                    }
                    this.setState({...this.state,showEmailSelector:true});
                    if(this.state.email==this.matchEmail[0])
                    {
                        this.setState({...this.state,showEmailSelector:false});
                    }
                }else{
                    this.selectorEmail=[];
                    this.setState({...this.state,showEmailSelector:false});
                }
            });
        })
    }

    componentWillUnMount() {
        this.DeliverEmailToSelector.remove();
    }



    render()
    {
        var allEmailsItem=this.matchEmail.map((arrayValue,arrayIndex)=>{
            return(
                <TouchableOpacity key={arrayValue} onPress={()=>{
                    this.setState({...this.state,email:arrayValue,showEmailSelector:false},()=>{
                        this.props.callBackToGetSelectEmail(this.state.email);
                    });
                }}>
                    <View style={{padding:15,alignItems:"flex-start"}}>
                        <Text style={{color:'#999999'}}>{arrayValue}</Text>
                    </View>
                </TouchableOpacity>
            );

        });
        return this.state.showEmailSelector?(
          <ScrollView style={[{
            width:(screenWidth-40)*0.7,
            alignSelf:'center',
            left:0,
            backgroundColor:'#fff',
            borderRadius:4,
            maxHeight:screenHeight/3.5,
            position:'absolute',
            top:55,
            borderWidth:1,
            borderColor:'#efefef'
          }, this.props.style]}>
              {allEmailsItem}
          </ScrollView>
        ):null;
    }
}


export class CommonModal extends Component {
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

export class PopLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      fade: new Animated.Value(0),
      bottom_offset: new Animated.Value(-50)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content) return true;
    return false;
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.content != '' && nextState.content != ''){
      if (Platform.OS == 'ios'){
        Animated.parallel([
          Animated.timing(this.state.fade, {
            toValue: 1,
            duration: 500
          }),
          Animated.timing(this.state.bottom_offset, {
            toValue: 50,
            duration: 300
          })
        ]).start();
        this.setState({content: nextProps.content}, () => {
          var that = this;
          setTimeout(function(){
            Animated.parallel([
              Animated.timing(that.state.fade, {
                toValue: 0,
                duration: 300
              }),
              Animated.timing(that.state.bottom_offset, {
                toValue: -50,
                duration: 500
              })
            ]).start(() => {that.props.hideCallback()})
            // Animated.timing(
            //   that.state.fade, {toValue: 0}
            // ).start(() => {that.props.hideCallback()});
            // that.setState({content: ''});
          }, 2000)
        })
      }
      // else{
      //   this.setState({content: nextProps.content})
      // }
    }
  }

  componentWillUnMount() {
    this.setState({content: ''})
  }

  render() {
    if (this.state.content){
      if (Platform.OS == 'ios'){
        return (
          <Animated.View style={{backgroundColor:'rgba(0,0,0,.6)',borderRadius:4,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,marginLeft:40,marginRight:40,alignSelf:'center',position:'absolute',bottom:this.state.bottom_offset,zIndex:999,opacity:this.state.fade}}>
            <Text style={{backgroundColor:'transparent',color:'#fff',fontSize:16,textAlign:'center',lineHeight:20}}>{this.state.content}</Text>
          </Animated.View>
        )
      }
      else{
        // ToastAndroid.show(this.state.content, ToastAndroid.SHORT);
        return null;
      }
    }
    else{
      return null;
    }
  }
}
