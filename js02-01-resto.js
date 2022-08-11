/**
* Faça um programa que percorra uma lista e inf. se o numero é impar ou par
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js02-01.js
*   👉 Ímpar
*/

var check = '-3'
var resultado = '👉 Não é um número'
if (check%2 == 0){
    resultado = '👉 Par'
}else if (check%2 > 0 || check%2 < 0){
    resultado = '👉 Ímpar'
}

console.log(resultado)