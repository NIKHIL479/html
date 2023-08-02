alert("hirfv")
var h1=document.querySelector('h1')
var h2=document.querySelector('h2')
var h3=document.querySelector('p')
var h4=document.querySelector('ul')
function color()
{
  var j='0123456789ABCDEF'
  var result='#'
  for (var i = 0; i <6; i++) {
var r=Math.floor(Math.random()*16);
result=result+j[r]
}
return result
  }
  function f()
  {
  h1.style.color=color()
  h2.style.color=color()
  h3.style.color=color()
  h4.style.color=color()
}
setInterval(f,1000)
