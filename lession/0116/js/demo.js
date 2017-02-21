function getjizita() {
var num=1*prompt("输入行数");
    for(var i=0;i<num;i++)//行数
    {
        for(var j=0;j<=num-i-1;j++)//空格
        {
            document.write(" &nbsp;");
        }
        for(var k=0;k<=(2*i-1)+1;k++)//填充星星
        {
        document.write("&nbsp;*");
         }
        document.write("<br>");
    }
}

function  getsanjiao() {
    //var res=1*prompt("输入行数");
    for(var i=0;i<3;i++)
    {
        /*for(var j=0;j<=i+1;j++)
        {
            document.write(" &nbsp;");
        }*/
        for(var k=0;k<=(4-3*i)+i;k++)
        {
            document.write(" &nbsp;*");
        }
        document.write("<br>");
    }
    for(var i=0;i<3;i++)
    {
        /*for(var j=0;j<=4-i-1;j++)
        {
            document.write(" &nbsp;");
        }*/
        for(var k=0;k<=(2*i-1)+1;k++)
        {
            document.write("&nbsp;*");
        }
        document.write("<br>");
    }

}
function getzimu() {
    var ary =["a","b","c","d","c","b","d","f"];
    var res=[];
    var res2=[];
    for(var i=0;i<ary.length;i++)
    {
        if(res.indexOf(ary[i])==-1)
        {
            res.push(ary[i]);
        }
        else {
           res2.push(ary[i]+":"+i);
        }
    }
    document.write(res+"<br>");
    document.write(res2);
}
