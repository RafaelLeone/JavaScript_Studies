/**
* Faça um Programa que imprima a soma de dois numeros 
* deve exibir uma mensagem caso nao seja números válidos 
* 
* Tarefa:
* - pesquise como confirmar se é número
* - use node para rodar este script js
*   $ node js01-04.js
*   👉 Não é um número válido ;/
*/

var num1 = 1996
var num2 = -4.5

var soma = num1 + num2

if (Number.isFinite(soma)){
    var resultado = '👉 A soma de ' + num1 + ' e ' + num2 + ' é ' + soma + '!'
    }else{
    var resultado = '👉 Não é um número válido ;/'
    }

console.log(resultado)