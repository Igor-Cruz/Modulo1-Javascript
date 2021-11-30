// Var forma mais antiga e mais perigosa de usar 

var a = 10
let b = 20
const c = 30

const d = {
  value: 50
}
d.value = 40

// Tipos de Variáveis
//Float
b = 1.0

//String - Pode ser declarado tanto com aspas duplas ou simples
let name = 'Igor Cruz'

//Objeto Geralmente um key e um value

let obj = {
  cidade: 'Lauro de freitas',
  Bairro: 'Ipitanga',
  insp: {
    CEP: 42706020
  }

}
/* Acessar obj*/
obj.cidade
obj.insp.CEP

let now = obj.insp.CEP
let other = obj['insp']['CEP']
console.log(other)

//Vetor

let vetor = [1, 2, 3, 4, 5]
console.log(vetor[2])

//Função em uma variável

let funcao = function () {
  console.log('de dentro da função')
}
let funcaoC = funcao
funcaoC()


