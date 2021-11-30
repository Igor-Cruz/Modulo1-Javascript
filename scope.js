//Global Scope e Local Scope
/*
Escopo global é o escopo que contém e é visivel em todos os outros escopos, não se deve definir tudo no Global scope(não é uma boa prática) */

//Abriu e fechou chave já tem um scope

/*
 let e const.
Essas duas palavras-chave fornecem Block Scope em JavaScript.Variáveis ​​declaradas dentro de um bloco {} não podem ser acessadas de fora do bloco: 
{
  let x = 2;
}
// x can NOT be used here

Variáveis ​​declaradas com a var palavra - chave NÃO podem ter escopo de bloco.
-Var bagunça os escopos

Variáveis ​​declaradas dentro de um bloco {} podem ser acessadas de fora do bloco.

Exemplo
{
  var x = 2;
}
// x CAN be used here
*/

const scopeGlobal = 1
//Acessar a global scope de dentro de uma função
const teste = function () {
  //local scope #1 (Consegue acessar o scopeGlobal pois está em um nível acima)
  const var0 = 20
  //console.log(scopeGlobal)
  function outroTeste() {
    //scope #2
    const var1 = 10
    console.log(var0, var1)
  }
  if (var0 === 1) {
    //scope #3
    const scope3 = 12222
  }
  for (let i = 0; i < 10; i++) {
    //scope #4
    console.log(i)
  }
  //console.log(scope3)
  outroTeste()
}
teste()