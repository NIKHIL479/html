var book=[]
var input=prompt('enter an option add/list/delete/exit')
while(input!='exit'){
  if (input=='add') {
    addbook()
  }
  else if (input=='list') {
    listbook()
  }
  else if (input=='delete') {
    deletebook()
  }
  else {
    console.log('enter valid option');
  }
  input=prompt('enter an option add/list/delete/exit')
}
console.log('thank u for using our app');
function addbook() {
var b=prompt('enter book to add')
book.push(b)
}

function listbook() {
  console.log('list of books is');
  for (var v of book) {
    console.log(v)
  }
}

function deletebook() {
  var b=prompt('enter book to delete')
  var index=book.indexOf(b)
if (index==-1) {
  console.log('no book is available with the given name')

}
else {
  book.splice(index,1)
console.log(b+ 'book deleted');
}
}
