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
var height = device.height;
var width = device.width;
var readPageTime =1000*10;
var appName = "咪咕阅读";
launchApp(appName);
//找到下面的5个tab的父控件
// id("bottom_navigation_bar_item_container").findOne().children().forEach(function(child){
//     log(child.className);
// });
sleep(6000);
var container = id("bottom_navigation_bar_item_container").findOne();
//tab
container.child(0).click();
// var booklist = id("local_listview").findOne();
// if (booklist.children() > 0) {
//     booklist.child(0).parent().parent().click();
// } else {
//     ShowMessage("请先添加书籍");
// }



DoClickAction("签到领书券");
sleep(2000);



id("book_shelf_item_layout").findOne().click();

var totalTime= 0;
while(totalTime<=1000*60*15){
    sleep(readPageTime/2);
    swipe(width *0.8, height - 400, width *0.2, height-450, 1000);
    sleep(readPageTime/2);
    totalTime+=readPageTime;
}
ShowMessage("恭喜你阅读完成~");


function ShowMessage(msg) {
    sleep(1500);
    toast(msg);
    sleep(1500);
}


function DoClickAction(actionName){
    
    // ShowMessage("准备" + actionName)
    if (text(actionName).exists()) {
        text(actionName).findOne().click();
        ShowMessage(actionName+"完成");
    }
    else{
        ShowMessage("您已经" + actionName)
    }
}