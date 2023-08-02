var h1=document.querySelector('#b1')
var h2=document.querySelector("#b2")
var h3=document.querySelector("#b3")
h1.addEventListener("click",function ()
{
  document.body.style.background='green'
})

h2.addEventListener("click",function ()
{
  document.body.style.background='red'
})
h3.addEventListener("click",function ()
{
    document.body.style.background='blue'
})
