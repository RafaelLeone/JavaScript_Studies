/**
* Faça um programa que faça a soma de todos nros de uma lista
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js02-02.js
*   👉 Ímpar
*/

var check = [10, 9.5, 8, 490]
var total = 0
for (var i of check) {
    total += i
}
var resultado = '👉 ' + total

console.log(resultado)