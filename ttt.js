var b=document.querySelector('button')
var cells=document.querySelectorAll('td')
b.addEventListener('click',function () {
for (var cell of cells) {
  cell.textContent=''
}
})
function changeContent() {
  if (this.textContent=='') {
    this.textContent='x'

  }
  else if (this.textContent=='x') {
    this.textContent='o'

  }
else if (this.textContent=='o') {
  this.textContent=''

}

}
for (var cell of cells) {
  cell.addEventListener('click',changeContent)

}
