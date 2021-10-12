const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')
div.innerHTML = localStorage.getItem('inputValue')

button.addEventListener('click', (req, res) => {
  localStorage.setItem('inputValue', input.value)
  div.innerHTML = input.value
  
})