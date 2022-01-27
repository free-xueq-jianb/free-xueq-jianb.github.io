
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
    font-size: 30px;
    padding: 10px;
    border-radius: 3px;
    background: #00BF96;
    display: inline-block;
}
#clockdiv > div{
    display: inline-block;
}
#clockdiv div > span{
    padding: 2px;
    border-radius: 3px;
    background: #fff;
    color: #00BF96;
    display: inline-block;
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