/**
* Faça um programa que imprima na tela apenas os números ímpares entre 1 e 150.
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js02-06.js
*   👉 1, 3, 5...
*/

var lista = []
for (var i=0; i<150; i++){
    if (i%2 > 0){
        lista.push(i)
    }
}

console.log('👉 ' + lista)