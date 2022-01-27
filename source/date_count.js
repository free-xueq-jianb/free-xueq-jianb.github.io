
var startline = new Date("sep 19, 2021 05:00:00").getTime();
  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = now - startline;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
document.getElementById("day").innerHTML =days ;
if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML ='0';}
}, 1000);