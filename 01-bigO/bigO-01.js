// Problema: Escribir una función que calcule la suma de todos los números de 1 a n (incluyendo n);
// Ej: si tenemos 6 => 1+2+3+4+5+6 = 21

// Forma 1
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
let timeS1 = performance.now();
addUpTo(1000000000);
let timeF1 = performance.now();
console.log(`Time Elapsed Solution1: ${(timeF1 - timeS1) / 1000} seconds`);
// console.log(addUpTo(6));

// Forma 2
function addUpTo2(n) {
    return n * (n + 1) / 2;
}
let timeS2 = performance.now();
addUpTo(1000000000);
let timeF2 = performance.now();
console.log(`Time Elapsed Solution2: ${(timeF2 - timeS2) / 1000} seconds`);
// console.log(addUpTo2(6));