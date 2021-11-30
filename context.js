//context == this 
//Para acessar uma prioridade a partir de um outro escopo que está no mesmo contexto
//bind fixa um contexto para a variavel e retorna uma nova variavel para o contexto novo
// evitar o this no node para ficar mais funcional
const obj = {
  var1: 10,
  get: function () {
    return this.var1
  }
}
console.log(obj.get.bind({ var1: 20 })())