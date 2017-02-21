$(document).ready(function () {
    $("button:eq(0)").click(function () {
        $("#div1").animate({"left": "400px"}, 1000, function () {
            $("#div1").animate({"top": "400px"}, 1000, function () {
                $("#div1").animate({"left": "0px"}, 1000, function () {
                    $("#div1").animate({"top": "50px"}, 1000, function () {
                        alert("完成");
                    });
                });
            });
        });


    });
    $("button:eq(1)").click(function () {
        $("#div1").stop();
    })
});