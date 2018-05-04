/**
 * Created by Enzo on 10/8/2017.
 */

'use strict';

import { StyleSheet, Dimensions, Platform, DeviceInfo } from 'react-native'

export const COLOR_PRIMARY = '#204B7D';
export const COLOR_BG = '#f9f9f9';
export const COLOR_CLICK = '#0492D4';
export const COLOR_LINE = '#e5e5e5';
const { width, height } = Dimensions.get('window');
const isIPX = DeviceInfo.isIPhoneX_deprecated;
export const TOP_STATUS_HEIGHT = Platform.OS == 'ios' ? (isIPX ? 44 : 20):0;

export const globleStyles = StyleSheet.create({
    backTitle: {
        color:'#fff',
        fontSize:16,
        marginLeft:2
    },
    backImage:{
        marginLeft:0,
        width:44,
        height:44
    },
    navBarTitle:{
        flexDirection:'row',
        height:44,
        backgroundColor: COLOR_PRIMARY,
        alignItems:'center'
    },
    navBarBack:{
        flex:1,
        flexDirection:'row',
        height:44,
        backgroundColor: COLOR_PRIMARY,
        alignItems:'center'
    },
    back:{
        flexDirection:'row',
        alignItems:'center'
    },
    rightTitle:{
        color:'#fff',
        fontSize:16,
        marginRight:15
    },
    tabBarIconImg:{
        width: 26,
        height: 25
    },
    animateHeader:{
        flexDirection:'row',
        height:Platform.OS === 'ios' ? (isIPX ? 88 : 64) : 44,
        paddingTop:Platform.OS === 'ios' ? (isIPX ? 42 : 20) : 0,
        alignItems:'center',
        position:'absolute',
        top:0,
        left:0,
        zIndex:10,
        right:0
    },
    animateHeaderInnerRight:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    animateHeaderInnerBtn:{
        width:44,
        height:44
    },
    staticHeader: {
        height: 44,
        backgroundColor: COLOR_PRIMARY,
        justifyContent: 'flex-end'
    },
    staticsHeaderText: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    headerLeft: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    headerRight: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    headerInner: {
        position: 'relative',
        justifyContent: 'center',
        height: 44
    },
    headerSearchBtn: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const newsDetailStyles = StyleSheet.create({
    // background:{
    //     flex:1
    // },
    // scrollView_style:{
    //     backgroundColor:'white'
    // },
    text_background: {
        marginTop:20,
        paddingLeft:20,
        paddingRight:20
    },
    time_background: {
        marginTop:10,
        paddingLeft:20,
    },
    detail_title: {
        fontSize:24,
        color:'black',
        fontWeight:'bold'
    },
    detail_time: {
        marginTop:5,
        fontSize:12,
        color:'#9B9B9B'
    },
    detail_artical:{
        fontSize:16,
        color:'#1A1A1A',
        textAlign:'justify',
        lineHeight:25
    },
    // webStyle:{
    //     marginLeft:20,
    //     marginRight:20,
    //     height: 150,
    //     backgroundColor:'rgba(0,0,0,0)'
    // },
    // division: {
    //     marginTop:20,
    //     height:20,
    //     backgroundColor:'rgba(239,239,239,1)'
    // },
    // nextNews_background:{
    //     paddingBottom:50,
    //     marginLeft:5
    // },
    // nextNews_tips:{
    //     marginTop:15,
    //     fontSize:18,
    //     color:'#1A1A1A',
    //     fontWeight:'bold',
    //     marginLeft:15
    // },
    // nextNews_title:{
    //     color:'#1A1A1A',
    //     marginLeft:15,
    //     marginRight:15,
    //     fontSize:16,
    //     marginTop:20,
    //     fontWeight:'bold'
    // },
    // nextNews_tag:{
    //     marginLeft:15,
    //     marginTop:5,
    //     fontSize:12,
    //     color:'#9B9B9B'
    // },
    // blank_line:{
    //     height:1,
    //     backgroundColor:'rgba(0,0,0,0)'
    // }
});


export const projectDetailStyles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatView: {
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
        left: 0,
        flex:1,
        backgroundColor:'#00000080'
    },
    row_Line:{
        height:1,
        backgroundColor:'#e5e5e5'
    },
    coulm_Line:{
        height:58,
        width:1,
        backgroundColor:'#979797'
    },
    bottom_backgroud:{
        borderTopWidth: 1,
        borderColor: COLOR_LINE,
        height:isIPX?81:47,
        marginBottom:0,
        backgroundColor:'#fff',
        flexDirection:'row',
        shadowOffset: {width: 0, height: -2},
        shadowColor: '#000',
        shadowOpacity: .07,
        shadowRadius: 4,
        paddingBottom:isIPX?34:0
    },
    button_wrapper:{
        flex:1,
        height:47,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    bottom_btn_wrapper:{
        height: 47,
        width:width,
        backgroundColor:'#00A9E6',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    bottom_btn_wrapper_ipx:{
        height: 47,
        width:200,
        backgroundColor:'#00A9E6',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        position: 'absolute',
        bottom: 40,
        left: '50%',
        marginLeft: -100,
        borderRadius: 60,
        shadowOffset: {width: 0, height: 2},
        shadowColor: '#0492D4',
        shadowOpacity: .4,
        shadowRadius: 4,
    },
    bottom_btn_iamge:{
        width:30,
        height:30
    },
    bottom_btn_text:{
        marginLeft:3,
        color:'#fff',
    },
    popLayerTextRow:{
        alignItems:'center',
        justifyContent:'center',
        height:40,
        paddingLeft:16,
        paddingRight:16
    }
});


export const newsNavRow = StyleSheet.create({
    viewBackGround: {
        flex:1
    },
    navBackground:{
        height:44,
        backgroundColor: COLOR_PRIMARY,
        flexDirection: 'row'
    },
    navRow: {
        height: 44,
        marginTop: 20,
        flexDirection: 'row',
        flex:1,
        alignItems: 'center'
    },
    navItem: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
        marginRight:10,
        opacity: .5
    },
    navItemActive: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 8,
        marginRight:8,
        fontWeight: 'bold'
    },
    searchBtn:{
        height:20,
        width:20,
        marginTop:30,
        marginRight:20
    },
    searchWrapper:{
        position:"absolute",
        zIndex:10,
        height:Platform.OS=="ios"?44:55,
        width:44,
        alignSelf:"flex-end"
    }
});


export const searchNavRow=StyleSheet.create({
    viewBackGround: {
        flex:1,
        backgroundColor:'#fff'
    },
    navBackground:{
        backgroundColor:'rgba(0,0,0,0)',
        flex:1,
        height:44
    },
    header:{
        height:Platform.OS=="ios"?44:55,
        backgroundColor: COLOR_PRIMARY,
        flexDirection: 'row',
        paddingRight:10
    },
    // searchBar:{
    //     flexDirection:'row',
    //     borderRadius:5,
    //     borderWidth:2,
    //     height:30,
    //     borderColor:'#ffffff',
    //     marginLeft:10,
    //     marginTop:25,
    //     marginRight:10,
    //     flex:1
    // },
    searchBarStyle2:{
        flexDirection:'row',
        height:30,
        marginLeft:10,
        marginTop:5,
        marginRight:10,
        flex:1,
        backgroundColor:'rgba(0,0,0,0)'
    },
    searchBarBackgroud:{
        backgroundColor:'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'center'
    },
    searchIcon:{
        marginLeft:10,
        height:20,
        width:20
    },
    textInput:{
        color:'#fff',
        flex:1,
        backgroundColor:'rgba(0,0,0,0)',
        fontSize:14,
        marginLeft:10,
        height: Platform.OS == 'ios' ? 30 : 'auto',
        paddingVertical: 0,
        paddingRight:10,
        alignSelf:'center',
        marginTop: 2
    },
    cancelButton:{
        fontSize:16,
        color:'#ffffff'
    },
    cancelButtonTouch:{
        alignItems:'center',
        justifyContent:'center'
    }
});


export const newsListStyle = StyleSheet.create({
    newsListView:{
        flex:1,
        backgroundColor:COLOR_BG
    },
    setting_button:{
      borderBottomWidth:1,
      borderBottomColor:COLOR_LINE,
      backgroundColor:'#fff',
      height:44,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      shadowOffset: {width: 0, height: 2},
      shadowColor: '#000',
      shadowOpacity: .07,
      shadowRadius: 4,
      zIndex:1
    },
    newsTimelineRow: {
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#979797',
        shadowOpacity: .5,
        shadowRadius: 4,
        height: 37.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    newsTimelineText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#4A4A4A',
        textAlign: 'center'
    },
    newsTitle: {
        marginBottom: 10,
        fontSize: 16,
        color: '#1A1A1A',
        alignItems: 'flex-start'
    },
    newsMeta: {
        alignItems: 'flex-start',
        color: '#9B9B9B',
        fontSize: 12,
        marginRight:10
    },
    newsMetaTime:{
        alignItems: 'flex-start',
        color: '#9B9B9B',
        fontSize: 12
    },
    newsRow: {
        backgroundColor: '#FAFAFA',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    newsInfo: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15
    },
    newsInfoHasImg: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flex: 1,
        justifyContent: 'space-around'
    },
    newsImgWrapper: {
        flex: 1,
        height: 144
    },
    newsImg: {
        flex: 1
    },
    newsFoot: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 4
    },
    newsFootText: {
        color: '#9f9f9f',
        fontSize: 14,
        marginTop: 6,
        marginBottom:6,
        marginLeft:5
    },
    swiperImage:{
        flex:1
    },
    swiperImageWrap:{
        height:width * 0.48
    },
    news_loading:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    news_list:{
        flex:1,
        backgroundColor:'#fff'
    },
    blank_line:{
        height:1,
        backgroundColor:'rgba(0,0,0,0)'
    },
    searchResult:{
        borderBottomWidth:1,
        borderBottomColor:"#F6F4F2",
        height:44,
        width:width,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        position:'absolute'
    },
    searchResult_DealSearch:{
        borderBottomWidth:1,
        borderBottomColor:"#F6F4F2",
        height:44,
        width:width,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    item_background:{
        backgroundColor:'#fff'
    },
    blue_text:{
        color:'#3D83E1'
    },
    tags_wrapper:{
        marginRight:10,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:13,
        paddingRight:13,
        borderWidth:1,
        borderColor:'#e5e5e5',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    tags_text:{
        color:'#1A1A1A',
        fontSize:14,
        lineHeight:16
    },
    tags_backgroud:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginLeft:20,
        marginRight:20
    },
    searchResultTips:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:15
    },
    tipsFont:{
        fontSize:12,
        color:'#999'
    },
    entranceBackground:{
        backgroundColor:'#fff',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5',
        paddingLeft:10,
        paddingRight:10
    },
    entranceWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    entranceTouchable:{
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        paddingTop:18,
        paddingBottom:15
    },
    entranceText:{
        color: '#666',
        fontSize: 12,
        textAlign:'center'
    },
    entranceImg: {
        width:24,
        height:24,
        marginBottom:8
    }
});


export const exclusiveProjectStyle = StyleSheet.create({
    titleStyle: {
        color: '#1A1A1A',
        fontSize: 14
    },
    tabActive: {
        backgroundColor: '#ffffff',
    },
    projectItemBlock:{
        backgroundColor:'#fff',
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:13,
        borderColor:'#F6F4F2',
        borderBottomWidth:1
    },
    exclusiveImageStyle: {
        height: (width-30) * .45
    },
    exclusiveImageLabelStyle: {
        width: 78,
        height: 35,
        position: 'absolute',
        top: 0,
        left: 0
    },
    projectProjessStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginRight: 15,
        marginLeft: 15
    },
    activityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingStyle: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    settingTitleStyle: {
        position: "absolute",
        zIndex: 3,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        flexDirection: 'row'
    },
    projectProgressStyle: {
        fontSize: 12,
        color: '#767676'
    }
});

export const setSubscriptionStyle = StyleSheet.create({
    emailSettingStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },
    emailImageStyle: {
        height: 20,
        width: 20
    },
    emailTextStyle: {
        fontSize: 14,
        color: '#1A1A1A'
    },
    lineStyle: {
        height: 1,
        backgroundColor: '#979797',
    },
    contentStyle: {
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
        marginTop: 20
    },
    contentTitleStyle: {
        fontSize: 14,
        color: '#4A4A4A',
    },
    industryStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    industryButtonStyle: {
        borderWidth: 1,
        height: 30,
        borderColor: '#D6D6DA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    industryTextStyle: {
        alignSelf: 'center'
    },
    industryButtonClickStyle: {
        justifyContent: 'center',
        width: (width - 60) / 3,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10
    },
    regionStyle: {
        marginTop: 40,
        alignItems: 'center'
    },
    nextStyle: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export const newsSettingStyle = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#fff'
  },
  header:{
    height:40,
    backgroundColor:'#F5F4F1',
    alignItems:'center',
    flexDirection:'row'
  },
  tiptile:{
    marginLeft:15,
    fontSize:14,
    color:'#9B9B9B',
    flex:1
  },
  countTitle_big:{
    fontSize:14,
    color:'#9B9B9B'
  },
  countTitle_small:{
    marginRight:17,
    fontSize:12,
    color:'#9B9B9B'
  },
  tags_wrapper:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  tags_unSelect:{
    height:45,
    marginLeft:15,
    marginTop:18,
    width:(width-15*4)/3,
    backgroundColor:'#F5F4F1',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3
  },
  tags_select:{
    height:45,
    marginLeft:15,
    marginTop:18,
    width:(width-15*4)/3,
    backgroundColor:'#F8FCFE',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:"#0492D4",
    borderRadius:3
  },
  tags_text:{
    fontSize:14,
    color:"#9A9A9A"
  },
  tags_textSelect:{
    fontSize:14,
    color:"#0492D4"
  },
  check_wraper:{
    marginTop:10,
    marginBottom:10,
    width:width,
    alignItems:'center',
    flexDirection:'row',
  },
  check_box:{
    marginRight:20,
    width:20,
    height:20
  },
  check_tips:{
    flex:1,
    marginLeft:20,
    fontSize:14,
    color:"#1A1A1A"
  },
  bottom_wraper:{
    position:'absolute',
    bottom:0,
    width:width,
  },
  bottom_wraper_ipx:{
    position:'absolute',
    bottom:40,
    width:width,
    alignItems:'center'
  },
  bottom_button:{
    backgroundColor:'#0492D4',
    height:47,
    alignItems:'center',
    justifyContent:'center',
  },
  bottom_button_ipx:{
    backgroundColor:'#0492D4',
    height:47,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 60,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#0492D4',
    shadowOpacity: .4,
    shadowRadius: 4,
    width:200
  },
  bottom_button_unable:{
    backgroundColor:'#B8D5EB',
    height:47,
    alignItems:'center',
    justifyContent:'center',
  },
  bottom_text:{
    fontSize:16,
    color:'#fff'
  },
  blankLine:{
    backgroundColor:"#E5E5E5",
    height:1,
    width:width,
  },
  tagsTitle:{
    marginTop:20,
    fontSize:20,
    marginLeft:20,
    color:'#1a1a1a'
  },
  emailTextinput:{
    paddingRight:40,
    paddingLeft:20,
    height:45,
    borderBottomWidth:1,
    borderBottomColor:'#e5e5e5'
  },
  emailWarningWrapper:{
    marginTop:5,
    marginLeft:20,
    flexDirection:'row',
    alignItems:'center',
  },
  emailWarningImage:{
    height:11,
    width:11
  },
  emailWarningText:{
    marginLeft:5,
    color:'#FC5528',
    fontSize:13
  }
});

export const filterBodyStyleV2 = StyleSheet.create({
    menuItemStyle:{
        backgroundColor:'#fff',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:6,
        paddingRight:6,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    filterButtonRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingTop: 12,
        borderTopWidth: 1,
        borderColor: '#eee',
    },
    filterButtonReset: {
        marginLeft: '10%',
        width: '85%',
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        textAlign: 'center',
        color: '#0492D4'
    },
    filterButtonSubmit: {
        marginLeft: '5%',
        width: '85%',
        color: '#fff',
        backgroundColor: '#0492D4',
        borderWidth: 1,
        borderColor: '#0492D4',
        padding: 8,
        textAlign: 'center',
    },
    industryButtonClickStyle: {
        width: (width - 60) / 3,
        marginRight: 6,
        marginLeft: 6,
        marginTop: 7,
        marginBottom: 7
    },
    industryButtonStyle: {
        borderWidth: 1,
        height: 45,
        borderRadius:4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitStyle:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        borderColor: '#e5e5e5',
        borderTopWidth: 1,
        flexDirection: 'row'
    },
    resetStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const settingStyle = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: COLOR_BG
    },
    floatView: {
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
        left: 0,
        flex:1,
        zIndex:100,
        backgroundColor:'#00000080'
    },
    listRow: {
        backgroundColor: '#fff',
    },
    loginBlock: {
        backgroundColor: COLOR_PRIMARY,
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 14,
        color: '#fff',
        opacity: .4,
        marginBottom: 15
    },
    loginBtnWrapper: {
        backgroundColor: COLOR_CLICK,
        height: 35,
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 4
    },
    loginBtn: {
        color: '#fff'
    },
    userName: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 2
    },
    userInfo: {
        fontSize: 14,
        color: '#fff',
        opacity: .4
    },
    listItem: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    listItemLabel: {
        color: '#1A1A1A',
        fontSize: 14,
        flex: 1
    },
    listItemArrow: {
        width: 10,
        height: 18,
        marginRight: 20
    },
    listFormItemArrow: {
        width: 10,
        height: 18,
        marginRight: 20,
        marginLeft: 10
    },
    listLine: {
        backgroundColor: COLOR_LINE,
        height: 1,
    },
    subscriptionBlock: {
        flexDirection: 'row',
        paddingLeft: 17,
        paddingRight: 17,
        marginTop: 30
    },
    subscriptionItem: {
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 4,
        borderColor: 'rgba(255, 255, 255, .4)',
        borderWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        alignItems: 'center'
    },
    subscriptionStatus: {
        fontSize: 13,
        color: '#fff'
    },
    subscriptionContent: {
        fontSize: 12,
        color: '#fff'
    },
    subscriptionContentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
        opacity: .5
    },
    subscriptionContentArrow: {
        width: 5,
        height: 9,
        marginLeft: 6
    },
    settingPageBg: {
        width: width,
        height: height * .5,
        backgroundColor: COLOR_PRIMARY,
        position: 'absolute',
        top: 0,
        left: 0
    },
    ScrollViewInner: {
        backgroundColor: COLOR_BG
    },
    listFormRow: {
        backgroundColor: '#fff',
        marginBottom: 10
    },
    // container:{
    //     flex:1,
    //     flexDirection:'column'
    // },
    // loginStyle: {
    //     flexDirection: 'row',
    //     paddingLeft: 20,
    //     paddingTop: 10,
    //     paddingBottom: 10
    // },
    listItemVal: {
        color: '#9b9b9b',
        fontSize: 14,
        marginLeft: 2,
        flexWrap: 'wrap',
        flex: 2,
        textAlign: 'left'
    },
    // avatarImg: {
    //     height: 60,
    //     width: 60,
    //     borderRadius: 30
    // },
    // companyAddress:{
    //     paddingTop:12,
    //     paddingBottom:12
    // },
    company:{
        fontSize:14,
        color:'#1A1A1A'
    },
    companyAdd:{
      fontSize:12,
      color:'#9b9b9b',
      marginTop:5
    },
    phoneTextColor:{
        color: COLOR_CLICK,
        fontSize:14,
        marginRight:20
    },
    // AboutDealGlobeogoStyles:{
    //     justifyContent:'center',
    //     alignSelf:'center',
    //     marginLeft:35,
    //     marginRight:35
    // },
    aboutLogoStyle:{
        justifyContent:'center',
        alignSelf:'center',
        height:37,
        width:132,
        marginTop:50
    },
    personalInfoContent:{
        marginBottom:20
    }
});

export const registerStyle = StyleSheet.create({
    goBack: {
        marginTop: 25,
        marginBottom:25
    },
    container: {
        width: width,
        height: height,
        flexDirection: 'column',
        paddingLeft:20,
        paddingRight:20
    },
    inputBorder: {
        flexDirection:'row',
        borderWidth: 1,
        alignItems:'center',
        borderColor: '#00A9E6',
        paddingLeft: 5,
        paddingRight: 5,
        height:50,
        borderRadius:2,
        marginTop:6,
        marginBottom:6
    },
    inputphone: {
        alignSelf: 'center',
        flex: 1,
        borderColor: '#00A9E6',
        padding:5,
        height:70
    },
    inputpassword: {
        alignSelf:'center',
        color:'#ffffff',
        flexDirection:'row',
        borderColor: '#00A9E6',
        height:40,
    },
    loginInputText: {
        alignSelf:'center',
        color:'#ffffff',
        flexDirection:'row',
        borderColor: '#00A9E6',
        height:40,
        paddingLeft:10,
        paddingRight:10
    },
    loginButton: {
        flexDirection: 'row',
        justifyContent:'center',
        borderWidth:0,
        borderColor: '#00A9E6',
        padding:0,
        height:50
    },
    verifyCodeButton:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor: '#00A9E6'
    },
    back_btn_touchable:{
      marginTop:20,
      marginBottom:5,
      width:44,
      height:44,
      marginLeft:-20
    },
    back_btn_image:{
      width:44,
      height:44
    }
});

export const chooseSubscribeStyle = StyleSheet.create({
    background:{
      flex:1,
      backgroundColor:'#114F92'
    },
    back_image:{
      width: width,
      height: height,
      position: 'absolute',
      top: 0,
      left: 0
    },
    top_view:{
      marginTop:width<=320?20:50,
      alignItems:'center',
    },
    top_title:{
      backgroundColor:'rgba(0,0,0,0)',
      color:"#fff",
      fontSize:20,
      textAlign:'center'
    },
    close:{
      width:28,
      height:28,
    },
    closeButton:{
      marginRight:20,
      marginTop:30,
      alignSelf: 'flex-end',
      width:28,
      height:28,
    },
    segement_wraper:{
      marginLeft:20,
      marginTop:50,
      height:40,
      width:width-40,
      flexDirection:'row'
    },
    leftTouchable_wraper:{
      flex:0.5
    },
    rightTouchable_wraper:{
      flex:0.5
    },
    leftBtn_wraper:{
      flex:0.5,
      height:40,
      justifyContent:'center',
      alignItems:'center'
    },
    leftBtn_wraper_dark:{
      flex:0.5,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      opacity:0.3
    },
    rightBtn_wraper:{
      flex:0.5,
      height:40,
      justifyContent:'center',
      alignItems:'center'
    },
    rightBtn_wraper_dark:{
      flex:0.5,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      opacity:0.3
    },
    leftBtn:{
      flexDirection:'row',
      alignItems:'center',
      flex:1
    },
    rightBtn:{
      flexDirection:'row',
      alignItems:'center',
      flex:1
    },
    left_image:{
      width:19,
      height:14
    },
    right_image:{
      width:19,
      height:15
    },
    left_text:{
      backgroundColor:'rgba(0,0,0,0)',
      marginLeft:5,
      fontSize:16,
      color:"#fff"
    },
    right_text:{
      backgroundColor:'rgba(0,0,0,0)',
      marginLeft:5,
      fontSize:16,
      color:"#fff"
    },
    left_underline:{
      width:120,
      marginBottom:-6,
      height:3,
      backgroundColor:'#fff',
    },
    right_underline:{
      width:120,
      marginBottom:-6,
      height:3,
      backgroundColor:'#fff',
    },
    blank_line:{
      marginTop:4,
      width:width,
      backgroundColor:'rgba(255,255,255,0.1)',
      height:1
    },
    bottom_tips:{
      marginTop:35,
      fontSize:14,
      color:'#fff',
      marginLeft:40,
      width:width-80,
      textAlign:'center',
      backgroundColor:'rgba(0,0,0,0)',
    },
    bottom_wraper:{
      position:'absolute',
      bottom:46,
      width:width - 70,
      marginLeft: 35,
      marginRight: 35
    },
    contactService:{
      alignItems:'center',
      justifyContent: 'space-between',
      backgroundColor:'rgba(0,0,0,0)',
      flexDirection:'row',
      marginBottom:20
    },
    clause:{
      marginTop:20,
      alignItems:'center',
      justifyContent: 'space-between',
      backgroundColor:'rgba(0,0,0,0)',
      flexDirection:'row'
    },
    bottom_text:{
      color:'#fff',
      fontSize:12,
      width:width*.5
    },
    bottom_arrow:{
      marginLeft:5,
      width:6,
      height:9
    },
    bottom_line:{
        backgroundColor:'rgba(255,255,255,.5)',
        width:width - 70,
        height:.5
    },
    subtips:{
      marginTop:22,
      backgroundColor:'rgba(0,0,0,0)',
      opacity:0.7,
      color:'#fff',
      fontSize:12,
      textAlign:'left',
      marginLeft:20,
      marginRight:20,
      lineHeight:17,
      marginBottom:20
    }
})

export const chooseSubscribeStyleNew = StyleSheet.create({
    close:{
      width:28,
      height:28,
    },
    closeButton:{
      marginRight:20,
      alignSelf: 'flex-end',
      alignItems:'center',
      width:28,
      height:28,
    },
    topTitle:{
      fontSize:20,
      color:'#fff',
      textAlign:'center',
      marginLeft:30,
      flex:1
    },
    topView:{
      flexDirection:'row',
      marginTop:40,
      marginBottom:15,
      alignItems:'center',
      backgroundColor:'rgba(0,0,0,0)'
    },
    bottom_wraper:{
      position:'absolute',
      bottom:width<=320?30:46,
      width:width - 70,
      marginLeft: 35,
      marginRight: 35
    },
    contactService:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(0,0,0,0)',
      flexDirection:'row',
    },
    clause:{
      marginTop:15,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(0,0,0,0)',
      flexDirection:'row'
    },
    touchable:{
      marginLeft: 5,
      height: 165,
      width: width - 10,
    },
    imageBackgroud:{
      height:165,
      width:width-10,
      padding:15,
    },
    priceTopView:{
      width:width-40,
      flexDirection:'row',
      alignItems:'center'
    },
    switchWrapper:{
      height:40,
      width:width*0.6,
      alignSelf:'center',
      marginBottom:15,
      flexDirection:'row'
    },
    switchTouchable:{
      flex:1,
      justifyContent:'center'
    },
    switchText:{
      color:'#fff',
      textAlign:'center',
      backgroundColor:'transparent'
    },
    bottom_text:{
      color:'#fff',
      fontSize:12,
      backgroundColor:'transparent'
    },
    underLine:{
      height:2,
      backgroundColor:'#fff',
      marginTop:5,
      alignSelf:'center',
      width:50
    },
    underLineBlank:{
      height:2,
      backgroundColor:'transparent',
      marginTop:5
    }
})

export const chooseGodsStyle = StyleSheet.create({
    recommendLabel:{
      position: 'absolute',
      right: 5,
      bottom: 6,
      width: 40,
      height: 40
    },
    cantPurchaseReasonLabel:{
      position: 'absolute',
      right: 5,
      top: 2,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: '#fff',
      borderRadius: 2
    },
    cantPurchaseReasonText:{
      color: '#043C7B'
    },
    touchable:{
      marginLeft: 15,
      height: 96,
      width: width - 30,
    },
    imageBackgroud:{
      height:96,
      width:width-30,
      flexDirection: 'row'
    },
    leftView:{
      marginLeft: 25,
      justifyContent:'center',
      flex: 1
    },
    priceText:{
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#fff',
      fontSize: 22
    },
    leftBottomText:{
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#fff',
      fontSize: 12,
      marginTop: 2
    },
    rightText:{
      alignSelf:'center',
      marginRight: 25,
      backgroundColor: 'rgba(0,0,0,0)',
      fontSize: 14,
      color: '#fff'
    },
    indicator:{
      justifyContent: 'center',
      alignSelf: 'center',
      height: 200,
      backgroundColor: '#00000000'
    }
})

export const myCollectionStyle = StyleSheet.create({
    background:{
      flex:1,
      backgroundColor:COLOR_BG
    },
    headerBtnWraper:{
      borderBottomWidth:1,
      borderBottomColor:"#E5E5E5",
      height:44,
      flexDirection:'row',
      backgroundColor: '#fff'
    },
    btnView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      width:(width-1)/2
    },
    btnImage:{
      width:17,
      height:12
    },
    btnImage_selected:{
      width:17,
      height:12,
      tintColor:'#0492D4'
    },
    btnText:{
      fontSize:14,
      color:'#9A9A9A',
      marginLeft:5
    },
    btnText_selected:{
      fontSize:14,
      color:'#0492D4',
      marginLeft:5
    },
    separateLine:{
      width:1,
      height:44,
      backgroundColor:'#E5E5E5'
    },
    bottomLine:{
      width:(width-1)/2,
      height:3,
      backgroundColor:'#0492D4',
      marginBottom:-1
    }
})

export const PrivilegeStyle = StyleSheet.create({
    background:{
      flex:1
    },
    topView:{
      justifyContent:'center',
      alignItems:'center',
      height:40,
      backgroundColor:'#0492D4'
    },
    topText:{
      color:'#fff',
      fontSize:14
    },
    firstView:{
      flex:1,
      marginTop:10,
      marginBottom:5,
      marginLeft:10,
      width:width-20,
      backgroundColor:'#fff',
      borderRadius:4,
      borderWidth:1,
      borderColor:'#E5E5E5'
    },
    topTipsWraper:{
      alignItems:'center',
      flexDirection:'row',
      height:50
    },
    titleText:{
      marginLeft:15,
      color:'#1A1A1A',
      fontSize:16,
      flex:1
    },
    tipsText:{
      marginRight:15,
      fontSize:14,
      color:'#9A9A9A'
    },
    blankLine:{
      backgroundColor:"#E5E5E5",
      height:1,
      width:width-20
    },
    centerView:{
      flex:1,
      justifyContent:'center'
    },
    subscriptionTipsRow:{
      marginBottom: 20,
      paddingLeft:25,
      paddingRight:25
    },
    bottomBtn:{
      height:40,
      marginBottom:20,
      marginLeft:15,
      width:width-60,
      borderColor:'#0492D4',
      borderRadius:4,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1
    },
    firstTitle:{
      fontSize:20,
      color:'#1A1A1A',
      textAlign:'center',
      marginTop:30,
      marginBottom:10,
      fontWeight: 'bold'
    },
    firstTitle_gray:{
      fontSize:20,
      color:'#9A9A9A',
      textAlign:'center',
      marginTop:30,
      marginBottom:10,
      fontWeight: 'bold'
    },
    firstTitle_black:{
      fontSize:20,
      color:'#1a1a1a',
      textAlign:'center',
      marginTop:30,
      marginBottom:10,
      fontWeight: 'bold'
    },
    packageCountTips:{
      fontSize:14,
      color:'#1A1A1A',
      textAlign:'center',
      marginBottom:10,
    },
    containText:{
      fontSize:20,
      color:'#0492D4'
    },
    smallTipsText:{
      marginTop:10,
      fontSize:14,
      color:'#9A9A9A',
      textAlign:'center',
    },
    smallTipsTextBottom:{
      marginTop:5,
      fontSize:14,
      color:'#9A9A9A',
      textAlign:'center',
    },
    btnText:{
      fontSize:16,
      color:'#0492D4'
    },
    checkOrderTouchable:{
      marginRight:10
    },
    checkOrderWrapper:{
      borderWidth:1,
      borderColor:'#E3E3E3',
      borderRadius:4,
      paddingTop:5,
      paddingBottom:5,
      paddingLeft:10,
      paddingRight:10
    },
    checkOrderBtn:{
      color:'#9A9A9A'
    }
})
export const payStyle=StyleSheet.create({
    background: {
        width: width,
        height: height,
        flexDirection: 'column'
    },
});


export const orderItem = StyleSheet.create({
    touchWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    row: {
        borderColor: '#e5e5e5',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingLeft: 15,
        paddingRight: 15,
        height: 130
    },
    itemImgWrapper: {
        width: 95,
        height: 95,
        marginRight: 10,
        backgroundColor: '#f9f9f9'
    },
    itemInfoWrapper: {
        flex: 1
    },
    nameView: {
        marginBottom: 4
    },
    name: {
        color: '#1a1a1a',
        fontSize: 12
    },
    descView: {
        marginBottom: 5
    },
    desc: {
        color: '#666',
        fontSize: 12
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    price: {
        color: COLOR_CLICK,
        fontSize: 22
    },
    invoiceView: {
        justifyContent: 'center',
        width: 64,
        height: 22,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: COLOR_CLICK
    },
    invoice: {
        fontSize: 12,
        textAlign: 'center',
        color: COLOR_CLICK
    },
    notInvoiceView: {
        justifyContent: 'center',
        width: 64,
        height: 22,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#979797'
    },
    sendGoods:{
        justifyContent: 'center',
        height: 22,
        marginLeft:8
    },
    notInvoice: {
        fontSize: 12,
        textAlign: 'center',
        color: '#767676'
    },
    rightArrowView: {
        width: 10,
        height: 18,
        marginLeft: 22
    },
    rightArrow: {
        width: 10,
        height: 18
    }
})

export const verifiedUserOrderStyle = StyleSheet.create({
    titleStyle: {
        color: '#1a1a1a',
        fontSize: 16
    },
    submitButtonStyle: {
        backgroundColor: '#0492D4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width:160
    },
    submitButtonStyle_ipx: {
        backgroundColor: '#0492D4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 4,
        margin: 10
    },
    moneyStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1
    },
    moneyTextStyle: {
        fontSize: 16,
        color: '#0086D1',
        marginLeft: 15
    },
    submitMoneyStyle: {
        flexDirection: 'row',
        width: width,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        marginBottom:isIPX ? 34 : 0
    },
    needInvoiceStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        alignItems: 'center'
    },
    addressArrowStyle:{
        height: 90,
        paddingLeft: 22,
        paddingRight: 12,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addressIconStyle:{
        width: 55,
        paddingLeft: 15,
        paddingRight: 22,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export const userAddress = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff'
    },
    fixBottomBtn: {
        height: 47,
        justifyContent: 'center',
        backgroundColor: COLOR_CLICK
    },
    fixBottomBtn_ipx: {
        height: 47,
        justifyContent: 'center',
        backgroundColor: COLOR_CLICK,
        borderRadius: 60,
        shadowOffset: {width: 0, height: 2},
        shadowColor: '#0492D4',
        shadowOpacity: .4,
        shadowRadius: 4,
        width: 200,
        position: 'relative',
        bottom: 40,
        alignSelf:'center'
    },
    fixBottomBtnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    },
    scrollView: {
        flex: 1
    },
    formRow: {
        height: 50,
        paddingTop: 10,
        borderColor: '#e5e5e5',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    formLabel: {
        color: '#767676',
        fontSize: 16
    },
    formLableView: {
        width: 95
    },
    formInput: {
        flex: 1,
        height: 40,
        fontSize: 14,
        color: '#333',
    }
})

export const userInvoice = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    titleView: {
        marginBottom: 20
    },
    title: {
        fontSize: 16,
        color: '#1a1a1a'
    },
    block: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff',
        marginBottom: 10
    },
    invoiceTypeWrapper: {
        flexDirection: 'row'
    },
    invoiceTypeBtn: {
        marginRight: 18
    },
    invoiceTypeText: {
        fontSize: 12,
        color: '#767676'
    },
    invoiceTypeActiveText: {
        fontSize: 12,
        color: COLOR_CLICK
    },
    invoiceTypeView: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#767676',
    },
    invoiceTypeActiveView: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: COLOR_CLICK,
    },
    companyInvoiceTypeView: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 3,
        paddingRight: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    radiobox: {
        width: 12,
        height: 12,
        marginRight: 8
    },
    personalInvoiceContent: {
        fontSize: 12,
        color: '#4a4a4a',
        marginLeft: 3,
        paddingTop: 6,
        paddingBottom: 6
    },
    companyContentWrapper: {
        marginLeft: -20,
        marginRight: -20
    },
    formLableView: {
        width: 130
    },
    formRow: {
        height: 50,
        paddingTop: 10,
        borderColor: '#e5e5e5',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25
    },
})

export const DealglobeStoreStyle = StyleSheet.create({
    background:{
      flex:1,
      backgroundColor:'#fff',
      paddingLeft:15,
      paddingRight:15,
    },
    topImage:{
      marginTop:13,
      width:width-30,
      height:(width-30)*(60/345),
    },
    search_classify_wrapper:{
      flexDirection:'row',
      marginTop:5,
      height:40,
      alignItems:'center',
      marginBottom:10
    },
    searchWrapper:{
      backgroundColor:'#F8F8F8',
      flexDirection:'row',
      height:40,
      paddingLeft:10,
      paddingRight:10,
      flex:1,
      borderRadius:4,
      borderWidth:1,
      borderColor:'#E6E6E6'
    },
    searchImage:{
      width:18,
      height:18,
      alignSelf:'center'
    },
    filterImage:{
      width:11,
      height:10,
      marginLeft:3
    },
    classifyBtnTouchable:{
      backgroundColor:'#F8F8F8',
      flexDirection:'row',
      width:90,
      marginLeft:10,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:4,
      borderWidth:1,
      borderColor:'#E6E6E6'
    },
    classifyText:{
      color:'#8F8F8F',
      marginLeft:5,
      fontSize:14
    },
    goodsInfo:{
        paddingLeft:5,
        paddingRight:5,
        marginTop:8
    },
    filterDropdownWrapper:{
        backgroundColor:'#F8F8F8',
        borderWidth:1,
        borderColor:'#E6E6E6',
        borderRadius:4,
        overflow:'hidden',
        width:90,
        position:'absolute',
        top:193,
        right:15
    },
    filterDropdownItem:{
        height:44,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderColor:'#e5e5e5'
    },
    filterDropdownText:{
        color:'#8F8F8F'
    },
    noGods:{
      textAlign:'center',
      marginTop:30,
      color:'#8F8F8F'
    }
})
