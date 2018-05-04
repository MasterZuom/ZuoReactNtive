1  点击控件：

<TouchableHighlight
  onPressIn={() => console.log("onPressIn")}
  onPressOut={() => console.log("onPressOut")}
  onPress={() => console.log("onPress")}
  onLongPress={() => console.log("onLongPress")}
>
  <Image
     style={styles.button}
     source={require('./img/rn_logo.png')} />
</TouchableHighlight>


3.   新 Navigation  的使用 ：
（1）控制器跳转  ：  navigate(routeName, params, action)
 (2) 取参数  ： this.props.navigation.state.params.xxxx
 (3) 透明色  ： backgroundColor:'rgba(0,0,0,0)',


4.   Promise用法

printHello (ready) {
    var promise = new Promise(function (resolve, reject) {
        if (ready) {
            resolve(setTimeout(()=>{ onNotification(ready)}, 1000));
        } else {
            reject("Good bye");
        }
    });
    return promise;
}


5  PropTypes  作用和用法
为某个类添加属性，并验证：（例如我自己要写一个button类）（在react native里面没有button组件）

eg:

const Button = (props) => {
    //添加属性
    const { children, onClick } = props
    
    return (
            <TouchableOpacity onPress={onClick} style={styles.button}>
                <Text>{children}</Text>
            </TouchableOpacity>
        )
}

//指定button的，进行类型检测
Button.PropTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

//导出默认的button组件
export default Button


6  map 遍历
eg: var array = ["1","2","3"];
array.map((key,value)=>{
    
})


7   JS 里面的遍历

newsDetail = [1,2,3,4,5];
let news = {}
for (var data in newsDetail) {
    news[newsDetail[data].date] = newsDetail[data].news
}
那么 data 就是 0 ，1 ，2 ，3


如果  newsDetail = {'a':'aa','b':'bb','c':'cc'}
let news = {}
for (var data in newsDetail) {
    news[newsDetail[data].date] = newsDetail[data].news
}
那么 data 就是 a ，b ，c


let news = {}
newsDetail.forEach((newsInfo)=>{
    news[newsInfo.date] = newsInfo.news;
})


8  处理时间

getYYMMDD(date){
    var d = new Date(date);
    return d.getFullYear() + '年' + (parseInt(d.getMonth()) + 1) + '月' + d.getDate()+'日'+ this.formatsTime(d.getHours())+':'+ this.formatsTime(d.getMinutes());
}


formatsTime(time){
    if(time<10){
        return '0'+time
    }else{
        return time
    }
}

9  react native  打包问题

ios在打包时，React native会把所有非js的文件当作资源来处理，并不会一起打包到index.bundle.js和index.bundle.meta文件中，而你的html会被打包到assets目录下的相对路径中，通过解压ipa可以看到文件结构，这个时候你只会看到，解压出来的目录中，html文件内加载的相对路径下的资源并没有被打包进来。这是因为react native认识的只有html这个资源，并不认识html内部引用的其他资源链接。

解决办法：
http://blog.csdn.net/zhuangchuming/article/details/73028490

10  json.stringfy()和json.parse()

11  数组操作

Arr.push("last")  :  加到最后
Arr.unshift("new1","new2")  查到数组最前面
Arr.splice(index,length,"content")

Arr.pop()  移除最后一个元素
Arr.shift()  移除最前一个元素
Arr.splice(index,deleteCount)  删除从index开始到指定长度的元素

网址：
http://www.imooc.com/article/14400


12  全局监听 （backbone-events-standalone）

var BackboneEvents = require('backbone-events-standalone');
window.EventBus = BackboneEvents.mixin({});

发送通知：
window.EventBus.trigger("LanguageChanged","please double check it");

获取通知：
window.EventBus.on("LanguageChanged", (event)=>{
    window.network.refreshUserInfoCache();
})


13  如果遇到网络请求有缓存
可以试试，在请求头里面加  {'Cache-Control': 'no-cache'}

14 点击链接跳转到safri中打开
Linking.openURL(event.url);


15 ReactNative 下载文件

import RNFetchBlob from 'react-native-fetch-blob'

const dirs = RNFetchBlob.fs.dirs;

RNFetchBlob
.config({
    fileCache : true,
    appendExt : 'pdf',
    path : dirs.DocumentDir + "/" + pdfName,
})
.fetch('GET',window.network.cdn_host+this.state.pdfData.file_url,tokens)
.then((res) => {
    //处理下载的内容 res.path()
})
.catch((err) => {
    //处理错误
})

16 .then() 方法：
如果你想在自定义的函数后面加.then()的话，你的自定义函数必须返回一个
Promise.resolve(params)


17  JS网络请求，自定义超时时间

//这是一个可以设置timeout的fetch请求
//fetch_promise : 传入fetch函数
//timeout : 传入超时时间
fetchWithTimeout(fetch_promise, timeout) {
    var abort_fn = null;
    
    //这是一个可以被reject的promise
    var abort_promise = new Promise(function(resolve, reject) {
            abort_fn = ()=> {
                reject('网络超时');
            };
    });
    
    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    var abortable_promise = Promise.race([
           fetch_promise,
           abort_promise
        ]);
    
    setTimeout(()=>{
        abort_fn();
    }, timeout);
    
    return abortable_promise;
}


18 利用 formData 上传 图片

uploadImage(){
    let formData = new FormData();
    let file = {uri: uri, type: 'multipart/form-data', name: 'a.jpg'};
    
    formData.append("images",file);
    
    fetch(url,{
    method:'POST',
    headers:{
        'Content-Type':'multipart/form-data',
    },
    body:formData,
    })
    .then((response) => response.text() )
    .then((responseData)=>{
        
        console.log('responseData',responseData);
    })
    .catch((error)=>{console.error('error',error)});
    
}

19  上传多张 图片

var files = {};
let formData = new FormData()
for (var index in this.state.imageData) {
    var file = {uri: this.state.imageData[index].uri,name: index + '.jpg', type: 'image/jpeg'}
    formData.append("user_voice[pictures][]",file)
}
formData.append("user_voice[description]",this.state.feedbackText)


20  将 URI 图片 转换成 base64 的图片

ImageEditor.cropImage(files[0].uri,{offset:{x:0,y:0},size:{width:300, height:400}},(croppedURI)=>{
    
    ImageStore.getBase64ForTag(croppedURI,(base64data)=>{
        
        this.setState({base64data:base64data})
        
    },(err)=>{
        
    })
    
},(err)=>{
    
})
















