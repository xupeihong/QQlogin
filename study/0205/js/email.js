/* 1、必须有@ index("@")==-1【没找到】
 2、必须有.
 3、@必须在.之前
 4、@前必须有字符
 5、.后边必须有字符
 6、@和.之间必须有字符
 7、.在@后边出现次数不能超过2次*/
var email = prompt("请输入邮箱", "232@qq.com");
if (email.indexOf(".") != -1) {
    var atindex = email.indexOf("@");
    var lastatindex = email.lastIndexOf("@");
    var pointindex = email.indexOf(".");
    var lastpointindex = email.lastIndexOf(".");
    var str1;
    var str2;
    //判断@出现的次数
    if (atindex != lastatindex)
        str1 = email.substring(atindex, lastatindex);
    else
        str1 = "";
    //判断点出现的次数
    if (pointindex != lastpointindex)
        str2 = email.substring(pointindex, lastpointindex);
    else
        str2 = "";
    //条件判断
    if (pointindex < atindex) {
        alert("@必须在.之前");
    }
    else if (atindex == 0)
        alert("@前必须有字符");
    else if (pointindex == lastpointindex.length - 1)
        alert(".后边必须有字符");
    else if (pointindex == atindex + 1)
        alert("@和.之间必须有字符");
    else if (str1.indexOf("@") != -1)
        alert("@不能出现2次");
    else if (str2.indexOf(".") != -1)
        alert(".不能出现2次");
    else
        alert("邮箱格式正确！");
}
else
    alert(".和@都必须包含");

