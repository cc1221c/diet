function register() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var weigh = document.getElementById("weigh").value;
    var high = document.getElementById("high").value;
    var ssex = document.getElementById("sex"); //定位id
    var index = ssex.selectedIndex;
    var sex = ssex.options[index].text;
    var bmr;
    var bmi;
    var iphone = document.getElementById("iphone").value;
    var password = document.getElementById("password").value;

    if (sex == "男") {
        bmr = weigh + 6.25 * high - 5 * age + 5;
    } else {
        bmr = weigh + 6.25 * high - 5 * age - 161;
    }
    bmi = weigh / (high * high);
    var i=0;
    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
    var msg;
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS use(iphone unique, password,name,age,weigh,high,sex,bmr,bmi)');
        tx.executeSql('SELECT * FROM use', [], function (tx, results) {
            var len = results.rows.length;
            for (i = 0; i < len; i++){
                msg = results.rows.item(i).iphone ;
                if(iphone.length==0){
                    alert("请填写手机号:");
                    i=1;
                    break;
                    return false;
                }
                if(iphone==msg){
                    alert("该手机号已被注册，请重新注册：");
                    i=-1;
                    break;
                    return false;
                }
            }
            if(i!=-1){
                tx.executeSql('INSERT INTO use(iphone , password,name,age,weigh,high,sex,bmr,bmi) VALUES (?,?,?,?,?,?,?,?,?)',[iphone,password,name,age,weigh,high,sex,bmr,bmi]);
                alert("注册成功!请登录您的账号");
                var str="userinformation.html";
                window.location.href=str;
                window.location.replace=(str);
            }

        }, null);

    });

}
function userinformation(){


}