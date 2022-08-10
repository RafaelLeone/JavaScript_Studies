/**
* Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js01-08.js
*   👉 Vogal
*/

var check = 'A'
var lista = ['a', 'e', 'i', 'o', 'u']
var lista_c = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

if (lista.includes(check.toLowerCase()) && check.length == 1){
    console.log('👉 Vogal')
}else if (lista_c.includes(check.toLowerCase()) && check.length == 1){
    console.log('👉 Consoante')
}else{
    console.log('👉 Não é uma letra')
}