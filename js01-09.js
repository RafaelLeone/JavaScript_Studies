/**
* Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.),
* se digitar outro valor deve aparecer valor inválido. 
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js01-09.js
*   👉 Domingo
*/

var dict = {
    1 : 'Domingo',
    2 : 'Segunda',
    3 : 'Terça',
    4 : 'Quarta',
    5 : 'Quinta',
    6 : 'Sexta',
    7 : 'Sábado',
}

var check = '3'

int_check = parseInt(check)
if (int_check in dict){
    console.log('👉 ' + dict[int_check])
}else{
    console.log('👉 Inválido')
}