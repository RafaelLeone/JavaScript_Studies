/**
* Faça um programa que mostre o maior nro da lista 
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js02-04.js
*   👉 Ímpar
*/

var check = [10, 9.5, 8, 490, 10, 11]
var maior = 0
for (var i of check) {
    if (i > maior){
        maior = i
    }
}

console.log(maior)