const falar = function (palavra) {
  console.log(palavra)
}
falar('opa')

const somar = function (num1, num2) {
  return num1 + num2
}
console.log(somar(2, 3))

const somar2 = (num1, num2) => num1 + num2
console.log(somar2(10, 11))

const mediaL = (soma, num) => {
  soma++
  num++
  return soma / num
}
console.log('MediaL', mediaL(10, 10))