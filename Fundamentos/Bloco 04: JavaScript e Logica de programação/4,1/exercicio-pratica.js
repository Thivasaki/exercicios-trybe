// const a = 4;
// const b = 6;
// const c = 50;

// console.log (a + b);
// console.log (a - b);
// console.log (a * b);
// console.log(Math.floor(a / b));
// console.log (a % b);

// if (a > b) {
//     console.log ("O " + a + " é maior")
// } else if (b > a) {
//     console.log ("O " + b + " é maior")
// }

// if (a > b && a > c) {
//     console.log ("O " + a + " é maior")
// } else if (b > a && b > c) {
//     console.log ("O " + b + " é maior")
// }else if (c > a && c > b) {
//     console.log ("O " + c + " é maior")
// }

// const z = -4;

// if (z > 0) {
//     console.log ("O " + z + " é positivo")
// } else if (z < 0) {
//     console.log ("O " + z + " é negativo")
// } else {
//     console.log ("É igual a zero")
// }

// const d = Math.floor(Math.random() * 180) + 1;
// const f = Math.floor(Math.random() * 180) + 1;
// const g = Math.floor(Math.random() * 180) + 1;

// if (d + f + g === 180) {
//     console.log (Boolean(1));
// } else if (d + f + g !== 180) {
//     console.log (Boolean(0));
// } else if (d < 0 || g < 0 || f < 0) {
//     console.log("Inválido");
// }

// let nota = 100;

// if (nota >= 90 && nota <= 100) {
//     console.log("A");
// }else if (nota >= 80 && nota < 90) {
//     console.log("B");
// }else if (nota >= 70 && nota < 80) {
//     console.log("C");
// }else if (nota >= 60 && nota < 70) {
//     console.log("D");
// }else if (nota >= 50 && nota < 60) {
//     console.log("E");
// }else if (nota < 50 && nota >= 0) {
//     console.log("F");
// }else if (nota < 0 || nota > 100) {
//     console.log("erro");
// }

// const num1 = 4;
// const num2 = 3;
// const num3 = 9;

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//     let index = true;
//     console.log(index);
// }else {
//     let index = false;
//     console.log(index);
// }

// const num4 = 4;
// const num5 = 2;
// const num6 = 6;

// if (num4 % 2 ==! 0 || num5 % 2 ==! 0 || num6 % 2 ==! 0) {
//     let index = true;
//     console.log(index);
// }else {
//     let index = false;
//     console.log(index);
// }


// const custo = 2000;
// const venda = 5000;

// let valorCustoTotal = custo + (custo * 20 / 100);
// let lucro = venda - valorCustoTotal;

// if(venda < 0 || custo < 0 || lucro < 0) {
//     console.log("ERRO 404");
// }else {
//     console.log("Esse é o nosso lucro " + lucro)
// }

let salarioBruto = 3000;
let inss;
let ir;

if ( salarioBruto < 1556.94) {
    inss = salarioBruto * 8/100
} else if ( 1556.94 <= salarioBruto && salarioBruto < 2594.92) {
    inss = salarioBruto *  9/100
} else if (2594.92 <= salarioBruto  && salarioBruto < 5189.82) {
    inss = salarioBruto * 11 / 100
} else if (5189.2 <= salarioBruto) {
    inss = 570,88
}

const salarioBase = salarioBruto - inss

if ( salarioBruto < 1903.98) {
    ir = 0
} else if ( 1903.98 <= salarioBruto && salarioBruto < 2826.65) {
    ir = (salarioBase * 7.5/100) - 140.80 
} else if (2826.65 <= salarioBruto  && salarioBruto < 3751.05) {
    ir = (salarioBase * 15/100) - 354.80
} else if (3751.05 <= salarioBruto  && salarioBruto < 4664.68) {
    ir = (salarioBase * 22.5/100) - 636.13
} else if (salarioBruto < 4664.68) {
    ir = (salarioBase * 27.5/100) - 869.36
}

const salarioLiquido = salarioBase - ir

console.log (salarioBruto);
console.log (salarioBase);
console.log (salarioLiquido);