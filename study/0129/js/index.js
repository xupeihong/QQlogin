window.onload=function () {
    var btn = document.getElementsByClassName("del");
    for (var i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            if (confirm("是否真的要删除？"))
                this.parentNode.parentNode.remove();
        }
    }


    var all = document.getElementById("ckall");
    all.onclick = function () {
        var ck = document.getElementsByName("ck");
        for (var i = 0; i < ck.length; i++)
            ck[i].checked = this.checked;
    }


    var cks=document.getElementsByName("ck");
    for(var j=0;j<cks.length;j++)
    {
        cks[j].onclick=function () {
            var type=true;
            for(var k=0;k<cks.length;k++)
            {
                if(!cks[k].checked){
                    all.checked=false;
                    type=false;
                    break;
                }
            }
            if(type)
                all.checked=true;
        }
    }
}
