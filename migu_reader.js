// //检测无障碍模式是否开启
// auto.waitFor();
// // 获取设备
// var height = device.height;
// var width = device.width;

// ShowMessage(
//     "欢迎来到领瞄币脚本\n" +
//     "Github项目: tb618\n" +
//     "设备宽: " + width + "\n" +
//     "设备高: " + height + "\n" +
//     "手机型号: " + device.model + "\n" +
//     "安卓版本: " + device.release);
// 获取设备
const height = device.height;
const width = device.width;
const readPageTime = 1000 * 10;
const minute = 1000 * 60;
const readMin = 15;//阅读时长
const totalReadTime = minute * readMin;
var appName = "咪咕阅读";
launchApp(appName);
sleep(6000);
turnTab2Home();
//签到
DoClickAction("签到领书券");
sleep(2000);
// if (checkExist("登录")) {
//     ShowMessage("请先登录")
// } else {
// }
ShowMessage("开始阅读...持续时长:" + readMin + "分钟");

openBookAndRead();
back();
ShowMessage("恭喜你阅读完成~");

function turnTab2Home() {
    var container = id("bottom_navigation_bar_item_container").findOne();
    container.child(0).click();
}
function openBookAndRead() {
    id("book_shelf_item_layout").findOne().click();

    var totalTime = 0;
    while (totalTime <= totalReadTime) {
        sleep(readPageTime / 2);
        //随机生成 滑动的点   起点的x坐标介于宽度0.8-0.9  y坐标介于屏幕高度0.5位置到0.8位置
        //随机生成 滑动的点   终点的x坐标介于宽度0.1-0.2  y坐标介于屏幕高度0.5位置到0.8位置
        //滑动时间 介于800ms 到1000ms
        var ranstartx =random(80,90)*0.01;
        var ranstarty =random(50,80)*0.01;
        var ranEndX =random(10,20)*0.01;
        var ranEndY =random(50,80)*0.01;
        var swipeTime =random(800,1000);
        log("ranstartx:"+ranstartx+",ranstarty:"+ranstarty+",ranEndX:"+ranEndX+",ranEndY:"+ranEndY+",swipeTime:"+swipeTime);
        swipe(width * ranstartx, height*ranstarty, width*ranEndX, height*ranEndY,swipeTime );
        sleep(readPageTime / 2);
        totalTime += readPageTime;
    }

}




function ShowMessage(msg) {
    sleep(1500);
    toast(msg);
    sleep(1500);
}

//点击按钮不跳转的
function DoClickAction(actionName) {

    // ShowMessage("准备" + actionName)
    if (text(actionName).exists()) {
        text(actionName).findOne().click();
        ShowMessage(actionName + "已点击");
    }
    else {
        ShowMessage("您已经" + actionName)
    }
}




function checkExist(actionName) {
    return text(actionName).exists;

}