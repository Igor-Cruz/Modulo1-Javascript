//HOF - Funções que recebem outras funções

function teste(acao) {
  acao()
}

teste(() => console.log('Hey man'))

//map - mapeia valores

const valores = [1, 2, 3]
const divisao = valores.map(valor => valor / 3)
console.log(divisao)

const frutas = [1, 5]
const conta = frutas.map(result => result * 2)
console.log(conta)

//forEach apenas passa pelo vetor

//reduce - reduzir o vetor a algo - recebe o valor anterior e o atual

const soma = valores.reduce((prev, curr) => prev + curr, 0)
console.log(soma)

//Pode fazer o map e depois reduce

//filter- filtra

