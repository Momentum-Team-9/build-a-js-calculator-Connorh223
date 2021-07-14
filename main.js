const num1 = document.getElementById("num1")
const display = document.getElementById('display')
console.log(num1)

num1.addEventListener('click', function (event) {
  console.log(event.target.innerText)
  console.log('button clicked')
  display.innerText = event.target.innerText
})