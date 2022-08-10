/**
* Faça um programa que retorne true ou false conforme a entra Y,y,yes,S,sim 
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js01-07.js
*   👉 True
*/

var check = 'YEss'
var lista = ['sim', 'yes', 's', 'y']
if (lista.includes(check.toLowerCase())){
    console.log('👉 True')
}else{
    console.log('👉 False')
}