1. 配置React Native的开发环境

http://mp.weixin.qq.com/s?__biz=MzIxNjEzNjUzOQ==&mid=402020148&idx=2&sn=ccad14a9197c8dbc4700c40bb907e56c&mpshare=1&scene=1&srcid=1008MHnqSt6UyeANaItOdN3X#rd

---安装 react native :  npm install -g yarn react-native-cli---

2 . 取消日志警告
console.disableYellowBox = true;


3. 消除指定 警告
console.ignoredYellowBox = ['Warning: ...'];

console.ignoredYellowBox = ['Warning: setState(...)'];

----------------------------------------------------------------------------
-------------------此命令是用在于已经存在的项目中安装，react-native----------------
4. 在工程目录下安装react native
npm install react-native

5 .若要指定版本 ：
npm install react-native@0.29

升级:
打开项目目录下的package.json文件，然后在dependencies模块下找到react-native，将当前版本号改到最新，然后在命令行中运行（译注：如果提示权限错误，就在命令前加上sudo）： npm install

----------------------------------------------------------------------------

6 react 离线文件生成
curl http://localhost:8081/DealDetailView.ios.bundle -o DealDetailView.jsbundle
curl http://localhost:8081/AboutVC.ios.bundle -o AboutVC.jsbundle


7.初始化项目
react-native init AwesomeProject

8.用命令运行项目（在项目工程目录下）
react-native run-ios  (可以不用打开xcode,直接打开模拟器运行项目)
react-native run-android

我们的项目跑安卓：
react-native run-android --variant preDebug && adb shell am start -n com.dealglobe.debug/com.dealglobe.MainActivity
