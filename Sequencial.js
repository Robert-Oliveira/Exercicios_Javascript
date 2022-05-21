//JavaScript - Sequencial

/*Escreva um algoritmo em Javascript que dado (atribuição) três números inteiros e 
positivos (A, B, C) e calcule a seguinte expressão: X = A + B / C. Exiba o resultado no console.*/


var a = 9;
var b = 5;
var c = 6;

var calculo = (a+b)/c;

console.log(calculo);

/*Faça um algoritmo em Javascript que dada (atribuição) as 3 notas de um aluno, calcule a 
média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 
e 5, respectivamente. Exiba o resultado no console.*/

var np1 = 5;
var np2 = 4;
var np3 = 9;

var media = ((np1*2)+(np2*3)+(np3*5))/10;

console.log(media);

/*Faça um algoritmo em Javascript que dado (atribuição) o tempo de duração de um evento 
em uma fábrica expressa em segundos e mostre o resultado no console expresso em horas, 
minutos e segundos.*/

var tempoDeDuracao = 3762;
var hora = (tempoDeDuracao / 3600).toFixed();
var minutos = ((tempoDeDuracao % 3600 )/ 60).toFixed();
var segundos = ((tempoDeDuracao % 3600 )% 60).toFixed();

console.log(hora , minutos , segundos);

//Escreva um algoritmo em Javascript que calcule a área de um triângulo equilátero. 

var base = 2;
var altura = 3;
var area = (base*altura)/2;

console.log(area);

/*Escreva um algoritmo em Javascript que dado (atribuição) três números inteiros e positivos 
(A, B, C) e calcule a seguinte expressão: X = (A + B)² + C. Exiba o resultado no console.*/

var a = 5;
var b = 5;
var c = 1;

var expressao = ((a + b)**2)+c;

console.log(expressao);

/*Escreva um algoritmo em Javascript que dado um valor escreva no console o dobro de 
seu antecessor.*/

var a = 5;

var calculo = (a-1)*2;

console.log(calculo);

/*Escreva um algoritmo em Javascript que dado o número total de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um 
representa em relação ao total de eleitores. Exiba o resultado no console.*/

var eleitores = 10250;
var porcentagem = eleitores/100;

var votosBrancos = porcentagem*25;
var votosNulos = porcentagem*20;
var votosValidos =porcentagem*55;

console.log(votosBrancos);
console.log(votosNulos);
console.log(votosValidos);


/*O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem 
do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem 
do distribuidor seja de 30% e os impostos de 45%, escrever um algoritmo em Javascript que 
dado (atribuição) o custo de fábrica de um carro e escreva, no console o custo ao consumidor.*/

var custoFabrica = 100;
var porcDistribuidor = custoFabrica*0.30;
var porcImpostos = custoFabrica*0.45;

var valorFinal = custoFabrica + porcDistribuidor + porcImpostos;

console.log(valorFinal);
