/**
* Faça um programa que faça a média de todos os nros de uma lista
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js02-03.js
*   👉 Ímpar
*/

var check = [10, 9.5, 8, 490]
var total = 0
for (var i of check) {
    total += i
}

var media = total / check.length
var resultado = '👉 ' + media

console.log(resultado)