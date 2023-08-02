var h1=document.getElementById('h1')


function w()
{

var d=new Date()
var h=d.getHours()
var s=d.getSeconds()
var m=d.getMinutes()

h1.textContent=h+":"+m+":"+s;
}
setInterval("w()",1000)
