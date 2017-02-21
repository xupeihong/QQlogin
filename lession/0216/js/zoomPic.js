/**
 * Created by lenovo on 2017/2/16.
 */
$(function () {
    $("img").mouseover(function () {
        $(this).animate({"top": "-200px", "left": "-200px", "width": "800px", "height": "800px"}, 500);
    }).mouseout(function () {
        $(this).animate({"top": "0px", "left": "0px", "width": "400px", "height": "400px"}, 500);
    })
});