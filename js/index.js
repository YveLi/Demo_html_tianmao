/**
 * Created by JingLong on 2016/12/8.
 * 尚硅谷QQ公开课：天猫商城品牌墙
 * http://www.atguigu.com
 */
window.onload = function () {
    //记录单击次数
    var clickTimes = 1;

    //总列数
    var lineCount = 6;

    var btnRefresh = document.querySelector("#btnRefresh");
    var iconRefresh = document.querySelector(".iconRefresh");


    var img3DList = document.querySelectorAll(".img-3d");
    var len = img3DList.length;

    btnRefresh.onclick = function(){
        iconRefresh.style.transition = ".3s linear";
        iconRefresh.style.transform = "rotate("+360*clickTimes+"deg)";

        for (var i = 0; i < len; i++) {

            var colNum = i%lineCount;
            var rowNum  = parseInt(i/lineCount);
            var delayTime = (colNum+rowNum)*100;

            img3DList[i].style.transition = ".3s "+delayTime+"ms linear";
            img3DList[i].style.transform = "rotateY("+180*clickTimes+"deg)";
        }

        clickTimes++;
    }

}
