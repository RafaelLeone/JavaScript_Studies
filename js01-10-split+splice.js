/**
* Faça um programa que criptografa/decriptografa de uma mensagem (string)
* 
* Tarefa:
* - use node para rodar este script js
*   $ node js01-10.js
*   👉 True
*/

var check = 'sMsesnsssasgsesms sSsescsrsestsas'
var lista = check.split("")
var nova_lista = []
var i = 0

console.log('👉 Decriptografa e depois criptografa novamente: ')
while (i < lista.length){
    nova_lista.push(lista[i+1])
    i = i + 2
}

i = 0

console.log(nova_lista.join(""))

while (i < lista.length){
    nova_lista.splice(i, 0, 's')
    i = i + 2
}

i = 0

console.log(nova_lista.join(""))
console.log('\n')
console.log('👉 Criptografa e depois decriptografa: ')

check = 'Mensagem Secreta'
lista = check.split("")

do{
    lista.splice(i, 0, 's')
    i = i + 2
}while (i < lista.length + 1)

i = 0

console.log(lista.join(""))

nova_lista = []

while (i < lista.length){
    nova_lista.push(lista[i+1])
    i = i + 2
}

console.log(nova_lista.join(""))