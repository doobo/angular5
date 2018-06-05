and打包步骤：

1.编译：
ionic build --prod

2.打android和ios测试包（正式环境把daily替换成product）：
cordova build android -ENdaily --release   //打好的apk默认路径 ./hooks/apk/
cordova prepare ios -ENdaily  //ios后续步骤在xcode完成


//关于本地运行项目慢的问题需要将@ionic/app-scripts移除，install根目录下的customPlugins/app-scripts,这个插件版本为3.1.8,依赖的webpack版本为3.6.0
npm uninstall @ionic/app-scritps
npm install file:customPlugins/app-scripts
打包人员需要注意打包时换回原来的版本
非打包人员可将根目录下的package.json中的
"@ionic/app-scripts": "3.1.8",
替换成
"@ionic/app-scripts": "file:customPlugins/app-scripts",
重新install

cordova platform add ios    //这个版本ios8才可用
cordova platform add android@6.2.0

//压缩包
node --max_old_space_size=4096 ./node_modules/.bin/ionic-app-scripts build --prod