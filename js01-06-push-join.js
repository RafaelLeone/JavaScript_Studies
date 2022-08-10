/**
* Faça um programa que inverta um texto.
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js01-06.js
*   👉 !oditrevni átse otxet etsE
*/

var texto = 'Este texto está invertido!'
var i = texto.length - 1
var lista = []
do{
    lista.push(texto[i])
    
    i = i - 1
}while (i > -1)

nova_str = lista.join("").toString()
console.log('👉 ' + nova_str)