var h1=document.querySelector('h1')
var h2=document.querySelector('button')

h2.addEventListener("dblclick",function ()
{
  h1.style.background='green'
})
h1.addEventListener("mouseover",function ()
{
  h1.style.background='blue'
  h1.textContent='color changed to blue'
})

h1.addEventListener("mouseout",function ()
{
  h1.style.background='yellow'
    h1.textContent='color changed to yellow'
})
