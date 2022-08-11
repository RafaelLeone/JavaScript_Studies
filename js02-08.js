/**
* percorra uma lista de nros e retorne qtos numeros pares/impares
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js02-08.js
*   👉 10 pares | 11 ímpares
*/

var lista = [1, 10, 12, 490, 3, 40, 40]
var npar = 0
var nimpar = 0
for (var i of lista){
    if (i%2 == 0){
        npar += 1
    }else{
        nimpar += 1
    }
}

console.log('👉 ' + npar + ' par(es) | ' + nimpar + ' ímpar(es)')