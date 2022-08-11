/**
* Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
* O usuário deve informar de qual numero ele deseja ver a tabuada. 
* A saída deve ser conforme o exemplo abaixo: 
* Tabuada de 5: 5 X 1 = 5, 5 X 2 = 10, ..., 5 X 10 = 50 
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js02-07.js
*   👉 Tabuada de 5: 5 X 1 = 5, 5 X 2 = 10, ..., 5 X 10 = 50
*/

var check = 6


console.log('👉 Tabuada de ' + check + ":")
for (i=1; i<11; i++){
    var result = check * i
    console.log('👉 ' + check + ' X ' + i + ' = ' + result)
}