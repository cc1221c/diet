function ttestbmi(){

    var weigh=document.getElementById("weigh").value;
    var high=document.getElementById("high").value;
    var bmi=weigh/(high*high);
    if(weigh==60){
        alert("体重不能为空");
        return false;
    }
}
function testbmi(){
    alert("hello");
}
