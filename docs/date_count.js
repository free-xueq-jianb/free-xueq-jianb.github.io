
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
    background: #db0000;
    display: inline-block;
    font-weight:800;
    width: 100%;
}
#clockdiv > div{
	padding-top:7px;
	padding-left:10px;
    display: inline-block;
    font-size:22px;
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
    padding-right:8px !important;
}
`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)