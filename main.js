const num1 = document.getElementById("num1")
const display = document.getElementById('display')
console.log(num1)

num1.addEventListener('click', function (event) {
  console.log(event.target.innerText)
  console.log('button clicked')
  display.innerText += event.target.innerText
})

const num0 = document.getElementById('num0')
console.log(num0)

num0.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const num2 = document.getElementById('num2')
console.log(num2)

num2.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const num3 = document.getElementById('num3')
console.log(num3)

num3.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const num4 = document.getElementById('num4')
console.log(num4)

num4.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const num5 = document.getElementById('num5')
console.log(num5)

num5.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const num6 = document.getElementById('num6')
console.log(num6)

num6.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const num7 = document.getElementById('num7')
console.log(num7)

num7.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const num8 = document.getElementById('num8')
console.log(num8)

num8.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const num9 = document.getElementById('num9')
console.log(num9)

num9.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const addition = document.getElementById('addition')
console.log(addition)

addition.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const subtract = document.getElementById('subtract')
console.log(subtract)

subtract.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const divide = document.getElementById('divide')
console.log(divide)

divide.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const multiply = document.getElementById('multiply')
console.log(multiply)

multiply.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})

const equal = document.getElementById('equal')
console.log(equal)

equal.addEventListener('click', function (event) {
  display.innerText += event.target.innerText
  console.log(event.target.innerText)
  console.log('button clicked')
})


function setDisplay(displayText){
    display.innerText = displayText
}




document.querySelector(".clear").addEventListener('click', function(){
    console.log("CLEAR")
})