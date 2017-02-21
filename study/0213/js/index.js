$(document).ready(function () {
    //全选操作
    var cks = $("#ckAll");
    cks.click(function () {
        var ck = $("[name='ck']");
        for (var i = 0; i < ck.length; i++) {
            ck[i].checked = this.checked;
        }
    });

    $("table").on("click", "[name='del']", function () {
        if (confirm("是否真的要删除？")) {
            $(this).parents("tr").remove();

        }
    })

});
//添加一行数据
function addRow() {
    var name = $("[name='student']").val();
    var sex = $("[name='gender']").val();
    var score = $("[name='score']").val();
    var reg = /^['男'|'女']$/;
    if (name == "") {
        alert("姓名不能为空");
        return;
    }
    if (sex == "") {
        alert("性别不能为空");
        return;
    }
    else if (!reg.test(sex)) {
        alert("性别必须是男女");
        return;
    }
    if (score == "") {
        alert("分数不能为空");
        return;
    }
    else if (isNaN(score)) {
        alert("分数必须是数字");
        return;
    }
    var tr = $("<tr></tr>");
    var td = $("<td></td>");
    var ck = $("<input/>");
    ck.attr("type", "checkbox");
    ck.attr("name", "ck");
    td.append(ck);
    tr.append(td);
    td = $("<td></td>");
    td.html(name).appendTo(tr);
    td = $("<td></td>");
    td.html(sex).appendTo(tr);
    td = $("<td></td>");
    td.html(score).appendTo(tr);
    td = $("<td></td>");
    var a = $("<a></a>");
    a.attr("href", "javascript:void(0)");
    a.html("删除 ");
    a.attr("name", "del");
    td.append(a);
    tr.append(td);
    a = $("<a></a>");
    a.attr("href", "javascript:void(0)");
    a.html("修改");
    a.attr("name", "edite");
    td.append(a);
    tr.append(td);
    $("tbody").append(tr);

}
//删除所选
function delCks() {
    var cks = $("tbody [name='ck']");
    cks.each(function (index, elem) {
        if (elem.checked) {
            $(elem).parents("tr").remove();
        }
    })

}