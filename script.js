//Loop para fazer contagem progressiva
console.log('Loop para fazer uma contagem progressiva!');

for(let num1 = 0; num1 <= 10; num1++) {
    
    console.log(num1);
}

//Loop para fazer contagem regressiva
console.log('Loop para fazer uma contagem regressiva!');

for(let num2 = 10; num2 > 0; num2--) {
    
    console.log(num2);
}

//loop para mostra apenas os números pares
console.log('Loop para mostrar somente os números pares!');

for(let num3 = 0; num3 <= 50; num3++) {
    if(num3 % 2 === 0) {
        console.log(num3);
    }
}

//Pegando dados de um input e repetindo ele até chegar o valor determinado
alert('Loop até o valor inserido!');
console.log('Loop até o valor inserido!');

const num4 = prompt('Digite um valor: ');
let num5 = 0;

while(num5 < num4) {
    num5++;
    console.log(num5);
}

//Contagem com um inicio e um fim predefinido
alert('Loop com um inicio e um fim predefinido');
console.log('Loop com um inicio e um fim predefinido');

let num6 = prompt('Digite um valor inicial: ');
let num7 = prompt('Digite um valor final: ');

while(num6 <= num7) {
    num6++;
    console.log(num6 - 1);
}

//Tabuado
alert('Loop para executar uma tabuada');
console.log('Loop para executar uma tabuada');

const num8 = prompt('Digite o número da sua tabuada: ');
let num9 = 0;

while(num9 <= 10) {
    num9++;
    const mult = num8 * num9;

    console.log(`${num8} x ${num9} = ${mult}`);
}

//Fatorial de um número
alert('Loop para realizar um calculo de fatoração');
console.log('Loop para realizar um calculo de fatoração');

let num10 = prompt('Digite um valor para fatorar: ');
let f = 1;

while(num10 > 1) {
    f *= num10;
    num10--;
    console.log(f);
}