
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
    font-size:40px;
    padding: 1px;
    padding-left:3px;
    padding-right:3px;
    border-radius: 5px;
    background: #db0000;
    display: inline-block;
    font-weight:800;
}
#clockdiv > div{
	padding-top:7px;
	padding-left:10px;
    display: inline-block;
    font-size:20px;
    padding-right:15px;
}
#clockdiv > span{
    border-radius: 7px;
    background: #fff;
    color: #db0000;
    display: inline-block;
    margin-bottom:3px;
    padding-left:10px;
    padding-right:10px;
    font-size:50px;
}
#smalltext{
    font-size:5px !important;
    padding-right:0px !important;
}
`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)