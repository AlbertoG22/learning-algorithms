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
console.log(addUpTo(6));

// Forma 2
function addUpTo2(n) {
    return n * (n + 1) / 2;
}
console.log(addUpTo2(6));