/*first occured element will come*/
var h1=document.getElementById('h')
console.log(h1);
/*array of elements will come wrt class name*/
var h2=document.getElementsByClassName('sec')
for (var items of h2) {
  console.log(items);
}
/*array of tags will be holded*/
var h3=document.getElementsByTagName('h1')
for (var items of h3) {
  console.log(items);
}
/*here css styleing should be given as parameter anf first occurence of selected styling will be holded*/
var h4=document.querySelector('.thi')
console.log(h4);
/*same as above but array of elements will be holded*/
var h5=document.querySelectorAll('.thi')
for (var items of h5) {
  console.log(items);
}
