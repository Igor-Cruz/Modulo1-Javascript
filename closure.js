//VARIAVEL LEMBRAR DE ONDE ELA FOI EXECUTADA/CRIADA

function func1(initial) {
  let contador = initial

  return function () {
    contador++
    return contador
  }
}

const func = func1(10)
const funcB = func1(20)
console.log(func(), funcB())
console.log(funcB(), func())


function golpes(name) {
  let count = 0

  return {
    getCount: function () {
      return count
    },
    increment: function () {
      count++
    },
    getName: function () {
      return name
    }
  }
}


const Kataguruma = golpes('Kataguruma')
Kataguruma.increment()
console.log(Kataguruma.getCount(), Kataguruma.getName())