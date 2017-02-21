/**
 * Created by lenovo on 2017/2/16.
 */
$(function () {
    for (var i = 1; i <= 36; i++) {
        var img = $("<img/>");
        img.attr("src", "img/red" + i + ".png");
        $(".showCar").append(img);
    }
    //除了第一张其它的都隐藏
    $(".showCar img:eq(0)").siblings().css("display", "none");
    var index = 0;
    var setInt = null;

    function showCar() {
        index++;
        if (index == 36) {
            index = 0;
        }
        $(".showCar img:eq(" + index + ")").css("display", "block").siblings().css("display", "none");
        $(".showBig").empty();
        var img = $(".showCar").find("img:eq(" + index + ")").clone();
        img.width($(".showCar img:eq(0)").width() * 3);
        $(".showBig").append(img);
    }

//设置自动滚动
    setInt = setInterval(showCar, 100);
    //鼠标移入移除事件
    $(".showCar").hover(function () {
        clearInterval(setInt);
    }, function () {
        clearInterval(setInt);
        setInt = setInterval(showCar, 100);
    }).mousemove(function () {
        clearInterval(setInt);
        $(".showBig").empty();
        var img = $(this).find("img:eq(" + index + ")").clone();
        img.width($(".showCar img:eq(0)").width() * 6);
        $(".showBig").append(img);
    });
});