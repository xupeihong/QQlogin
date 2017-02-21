/**
 * Created by lenovo on 2017/2/17.
 */
$(function () {
    //图片轮播
    var i = 0;
    var settime = null;
    $(".content img:eq(" + i + ")").css("display", "block");
    function showPic() {
        if (settime != null) {
            clearTimeout(settime);
        }
        $(".content img:eq(" + i + ")").fadeOut(3000, function () {
            i++;
            if (i == 3) {
                i = 0;
            }
            $(".content img:eq(" + i + ")").css("display", "block");
            $(".content img:eq(" + i + ")").fadeIn(3000, function () {
                settime = setTimeout(showPic, 3000);
            })
        })
    }

    settime = setTimeout(showPic, 3000);
//黑色字体轮播
    var j = 0;
    var setp = null;
    $(".expreo a:eq(" + j + ")").css("display", "block");
    function showP() {
        if (setp != null) {
            clearTimeout(setp);
        }
        $(".expreo a:eq(" + j + ")").fadeOut(5000, function () {
            j++;
            if (j == 3) {
                j = 0;
            }
            $(".expreo a:eq(" + j + ")").css("display", "block");
            $(".expreo a:eq(" + j + ")").fadeIn(5000, function () {
                setp = setTimeout(showP, 5000);
            })
        })
    }
    setp = setTimeout(showP, 5000);
    //back
    var index = $(".img1 img").index();//0
    $(".img1 img").click(function () {
        index++;
        $(".content img").css("display", "none");//所有图片隐藏
        $(".content img:eq(" + index + ")").css("display", "block");//点击哪张显示哪张
        // settime = setTimeout(showPic, 350);
        setp = setTimeout(showP, 5000);
        index++;
        if (index == 3) {
            index = 0;
        }
    })
    //go
    $(".img2 img").click(function () {
        index++;
        $(".content img").css("display", "none");//所有图片隐藏
        $(".content img:eq(" + index + ")").css("display", "block");//点击哪张显示哪张
        // settime = setTimeout(showPic, 350);
        setp = setTimeout(showP, 5000);
        index++;
        if (index == 3) {
            index = 0;
        }
    })
});

var li = document.getElementsByTagName("a");
li.onclick = function () {
    window.location.href = "www.baidu.com";
};
