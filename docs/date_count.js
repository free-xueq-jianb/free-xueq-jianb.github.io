
var startline = new Date("2021-09-19T00:00:00.000+08:00").getTime();
  
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

//倒计时

var endHuang = new Date("2026-09-19T00:00:00.000+08:00").getTime();
var endWang = new Date("2025-03-19T00:00:00.000+08:00").getTime();

var x = setInterval(function() {
var now = new Date().getTime();

// 计算黄雪琴的倒计时
var tHuang = endHuang - now;
var daysHuang = Math.floor(tHuang / (1000 * 60 * 60 * 24));
if (tHuang > 0) {
  document.getElementById("huang").innerHTML = daysHuang;
} else {
  document.getElementById("huang").innerHTML = "关押五年已出狱";
}

// 计算王建兵的倒计时
var tWang = endWang - now;
var daysWang = Math.floor(tWang / (1000 * 60 * 60 * 24));
if (tWang > 0) {
  document.getElementById("wang").innerHTML = daysWang;
} else {
  document.getElementById("wang").innerHTML = "关押三年半已出狱";
}

}, 1000);

var styles = `
#clockdiv{
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    padding: 1px;
    padding-left:3px;
    padding-right:3px;
    border-radius: 5px;
    background: #e84a5f;
    display: inline-block;
    font-weight:800;
    width: 100%;
    margin-bottom: 5px;
}
.chuyu {
    background: #1B5E20 !important;
}
#clockdiv > div{
	padding-top:7px;
	padding-left:10px;
    display: inline-block;
    font-size:22px;
    padding-right:10px;
}
#day{
    border-radius: 7px;
    background: #fff;
    color: #e84a5f;
    display: inline-block;
    margin-bottom:3px;
    padding-left:10px;
    padding-right:10px;
    font-size:50px;
}
#smalltext{
    padding-right:8px !important;
}
#wang{
    display: inline-block;
    font-size:25px;
}
#huang{
    display: inline-block;
    font-size:25px;
}
`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)