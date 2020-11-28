
   //1
   
    document.write("Вы используете браузер:<br>" + navigator.appName);
    document.write("<br><br>");
 
    document.write("Версия Вашего браузера:<br>" + navigator.appVersion);
    document.write("<br><br>");
 
    
    //2
   window.onload = function(){
 window.setInterval(function(){
      var now = new Date();
       var clock = document.getElementById("clock");
     clock.innerHTML = now.toLocaleTimeString();
 }, 1000);
};
function sayHi() {
  alert('С новым годом!');
}

let timerId=setInterval(sayHi,5000);
//3
let arrVod =prompt("Введите массив из 5 элементов");

document.write("Введенный массив: <br> ", arrVod,"<br>");
//4
let a1=prompt("введите первую переменную");
let a2=prompt("введите вторую переменную");
let z=Math.min(a1,a2);
document.write("Наименьшее введеное число:<br>",z);
//5
let b=prompt("Введите переменную b");
let c=prompt("Введите переменную c");
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
};

document.write( "<br>Число b  в степени c <br>", pow(b, c) );










