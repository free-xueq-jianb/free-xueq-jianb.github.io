
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

var styles = `
#clockdiv{
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size:15px;
    padding: 1px;
    padding-left:3px;
    padding-right:3px;
    border-radius: 3px;
    background: #2096F4;
    display: inline-block;
    font-weight:800;
}
#clockdiv > div{
    display: inline-block;
}
#clockdiv div > span{
    border-radius: 3px;
    background: #fff;
    color: #2096F4;
    display: inline-block;
    margin-top:3px;
    margin-bottom:3px;
    padding-left:3px;
    padding-right:3px;
    margin-left:2px;
    margin-right:2px;
}
smalltext{
    padding-top: 5px;
    font-size: 16px;
}
`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)