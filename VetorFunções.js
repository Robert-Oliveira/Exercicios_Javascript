/*Crie um algoritmo em Javascript que gere um vetor de 8 posições, onde os valores de 
cada posição seja o cubo de cada índice.*/

var cubo = [];

for (let i = 0; i < 8; i++) {
    
    var n= i**3;

    cubo[i]=n;
    
}

console.log(cubo);


/*Dado um vetor V:[5,1,4,2,7,8,3,6]
Crie um algoritmo em Javascript que gere um vetor V2 a partir do dobro de cada valor de V. 
Gere os resultados no console.*/


var v1 = [5,1,4,2,7,8,3,6];
var v2 = [];

for (let i = 0; i < v1.length; i++) {
    
    v2[i] = v1[i]*2;

    }console.log(v2);

    /*Ler um vetor A de 10 números. Após, ler mais um número e guardar em uma variável X. 
Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X. 
Logo após, imprimir o vetor M. Gere os resultados no console.*/

var A = [1,2,3,4,5,6,7,8,9,10,12,13];
var B =A.length;
var X=(A[10]);

var M =[];
for (let i = 0; i < 10;i++) {
    M[i]=( A[i]*X);    
    };

    console.log(M);


/*Escreva um algoritmo que permita a leitura dos nomes de 5 pessoas e armazene os nomes 
lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de um nome qualquer de 
pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos 
anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário. Gere os resultados no 
console*/

var nomes=[];

nomes[0] ="Pedro";
nomes[1] ="Luis";
nomes[2] ="Ana";
nomes[3] ="Isa";
nomes[4] ="Duda";

var busca = "Ruth";

for (let i = 0; i < nomes.length; i++) {
    if(nomes[i]==busca){
        console.log("Achei")
    }else console.log("não achei")
}

console.log(nomes);

/*Crie um algoritmo que leia um vetor Q de 10 posições (aceitar somente números pares). 
O algoritmo deverá escrever o valor do maior elemento de Q e a respectiva posição que ele 
ocupa no vetor. Gere os resultados no console*/

var Q = [200,4,6,8,10,12,14,16,180,20]


var max = Q.reduce(function(a, b) {
  return Math.max(a, b);
}, -Infinity);
console.log(max);

for (let i = 0; i < Q.length; i++) {
    if(Q[i]==max){
        console.log(i);
    }
    
}

/*Faça um algoritmo para ler e armazenar em um vetor a temperatura média de todos os 
dias de uma semana. Calcular e escrever no console: 
a) Menor temperatura da semana
b) Maior temperatura da semana
c) Temperatura média semanal
d) O número de dias da semana em que a temperatura foi inferior a média semanal*/

var T =[23.5,27,32.5,14.9];

Array.min = function(array){
    return Math.min.apply(Math, array);
}

Array.max = function(array){
    return Math.max.apply(Math, array);
}

var soma =0;

for (var i = 0; i < T.length; i++) {

    soma+=T[i];
}

var media = soma/T.length;

console.log(media);

console.log(soma);

console.log(Array.max(T));

console.log(Array.min(T));

var p=0;

for (var i = 0; i < T.length; i++) {
    if(T[i]<media){
      p++;
    }
}
console.log(p);

/*- Faça um algoritmo para ler 10 números e armazenar em um vetor. Após isto, o algoritmo 
deve ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado. Gere os 
resultados no console.*/

var n =[11,2,3,4,5,6,7,8,9,10];

function compararNumeros(a,b){
    if (a==b)
    return 0;
    if(a<b)
    return -1;
    if(a>b)
    return 1;
 }

n.sort(compararNumeros);
console.log(n);

/*Faça um programa, com uma função que necessite de três argumentos, e que forneça a 
soma desses três argumentos através de uma função. Seu script também deve fornecer a 
média dos três números, através de uma segunda função que chama a primeira.
*/

function somaTotal(n1,n2,n3){
    
    var soma1=n1+n2+n3;
 
    return soma1;
}

function mediaFinal(somaTotal){

    var media =somaTotal(2,4,6)/3;
   
    return media;
}


console.log(somaTotal(2,4,6),mediaFinal(somaTotal));

/*Faça um programa, com uma função que necessite de um argumento. A função retorna o 
valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou 
negativo.*/

/*function test(n){
     var check = n;
     var resultado = check % 2 == 0 ?"Par":"Impar";
      return resultado;  
    }*/

    const num = (numInt)=>{

    if (num >= 1){
    console.log("P");
    }  
    else if (num <= 0){
    console.log("N")};
    }
    console.log(num(35));


/*Faça uma função que informe a quantidade de dígitos de um determinado número inteiro 
informado.*/

function contar(n1){
    return numero =(n1).toString().length;
    
}

console.log(contar(90900909));
