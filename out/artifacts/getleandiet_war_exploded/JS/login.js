var i = sessionStorage.getItem("iphone");
if(i.length!=0){
    var str="exit.html";
    window.location.href=str;
    window.location.replace=(str);
}
function login(){

    var iphone=document.getElementById("iphone").value;
    var password=document.getElementById("password").value;
    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
    var msg;
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM use', [], function (tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++){
                msg = results.rows.item(i).iphone ;
                if(iphone==msg&&password==results.rows.item(i).password){

                    alert("登录成功");
                    sessionStorage.setItem('iphone',iphone);
                    var str="userinformation.html";
                    window.location.href=str;
                    window.location.replace=(str);
                    i=-1;
                    break;

                }
            }
            if(i!=-1){
                alert("登录错误，请检查账号密码是否正确");
            }
        }, null);
    });
    return false;
}