var list =document.querySelector('ul')
console.log(list)


var arr=['go to gym', 'cook food', 'eat']
arr.push('complete assignment')

for(var i=0;i<arr.length; i++){
  var element = document.createElement('li')
  var textnode = document.createTextNode(arr[i]) 
  console.log(element)
  element.appendChild(textnode)
  console.log(element)
  list.appendChild(element)
}
