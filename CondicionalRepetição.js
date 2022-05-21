/*- Faça um algoritmo em Javascript para calcular a média aritmética das 3 notas de um 
aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja 
igual ou superior a 6, ou a mensagem "reprovado", caso contrário. Exiba os resultados no 
console.
*/

var np1 = 10;
var np2 = 1;
var np3 = 1;

var media = ((np1+np2+np3)/3).toFixed()

if(media>=6)
    console.log(media+" Aprovado!")
else(console.log(media+" Reprovado!"));

/*Elaborar um algoritmo em Javascript que dado 3 valores A, B, C, exiba no console o 
maior dos 3 valores e com a mensagem: "É o maior "*/

var A = 8;
var B = 12;
var C = 12;

if(A>B && A>C)
        console.log("A é o maior!")
    else if(B>A && B>C)
        console.log("B é o maior!")
    else if(C>A && C>B)
    (console.log("C é o maior!"))
else if(console.log("Existem números iguais!"));  

/*Elaborar um algoritmo em Javascript que dado 2 valores A e B e os exibam no console 
com a mensagem: "São múltiplos" ou "Não são múltiplos".*/

var A = 12;
var B = 2;

var multiplos  

if(A>B)
multiplos=(A%B)
else multiplos = (B%A)

if(multiplos==0)
console.log("São multiplos!")
else(console.log("não são multiplos!"));

/*
Elaborar um algoritmo em Javascript para calcular o IMC ideal de uma pessoa. Tendo 
como dados de entrada a altura e o sexo utilizando as seguintes fórmulas:
- para homens: (72.7*h)-58
- para mulheres: (62.1*h)-44.7
Exiba o resultado no console:
*/

var sexo = "femenino";
var altura = 1.76;

var imc;

if(sexo=="masculino")
imc=(72.7*altura)-58
else imc=(62.1*altura)-44.7

console.log("Seu imc é " +imc.toFixed(2)+"!");

/*- Elaborar um algoritmo em Javascript que dado dois valores e exiba no console uma das 
três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo 
‘Segundo maior’, caso o segundo seja maior que o primeiro. */

var n1 = 15;
var n2 = 15;


if(n1==n2)
console.log("Números iguais! ")
else if(n1>n2)
console.log("O primeiro número é o maior!")
else console.log("O segundo número é o maior!");

/*Escreva um algoritmo em Javascript para exibir no console os números de 1 (inclusive) a 
10 (inclusive) em ordem decrescente.*/

for(var i=1;i<=10;i++){
    console.log(i);
}

/*Escreva um algoritmo em Javascript para exibir no console os números múltiplos de 5 do 
intervalo de 1 a 50*/

var tabuada;
for(var i=0;i<=50;i++){
    tabuada=i*5
    console.log(tabuada);
}

/*Escreva um algoritmo em Javascript que dado um número inteiro N exiba no console todos 
os valores pares entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que 
ZERO. */

var n = 5;

for(var i=0; i<=n;i++){
    if((i%2)==0)
    console.log(i);
}

/*- Escreva um algoritmo em Javascript que calcule e exiba no console a tabuada do 7 (1 a 
10). No console deverá ser impresso:
7 X 1 = 7
7 X 2 = 1*/

var n = 7;
for(var i=0;i<=10;i++){
    tabuada=i*n
    console.log(n + " x " + i+" = " + tabuada);
}

/* Escreva um algoritmo em Javascript que exiba no console os 15 primeiros números da 
série Fibonacci: 1, 1, 2, 3, 5, 8, 13*/

var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 15; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);
