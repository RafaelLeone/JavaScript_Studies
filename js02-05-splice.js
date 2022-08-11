/**
* Faça um programa que mostre o segundo maior nro da lista
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js02-04.js
*   👉 Ímpar
*/

var check = [10, 9.5, 8, 490, 10, 11, 10]
var maior = 0
for (var i in check) {
    if (check[i] > maior){
        maior = check[i]
        var j = i
    }
}

check.splice(j, 1)

var maior2 = 0
for (var i of check) {
    if (i > maior2){
        maior2 = i
    }
}

console.log('👉 ' + maior2)