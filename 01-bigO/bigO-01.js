// Problema: 
// Escribir una función que calcule la suma de todos los números de 1 a n (incluyendo n);
// Ej: si tenemos 6 => 1+2+3+4+5+6 = 21

// -------------------- Forma 1 --------------------
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

// -------------------- Forma 2--------------------
function addUpTo2(n) {
    return n * (n + 1) / 2;
}
let timeS2 = performance.now();
addUpTo(1000000000);
let timeF2 = performance.now();
console.log(`Time Elapsed Solution2: ${(timeF2 - timeS2) / 1000} seconds`);

/* 
    NOTA: A pesar de que la Forma 2 es más rápida que la 1, contar el tiempo no siempre es una forma
    confiable de medir el performance de un código, puesto que depende de la máquina donde se ejecute.
    Contar el número de operaciones que un código realiza SÍ es buena forma de comparar cuando uno
    es mejor que otro.

    Forma 1:
    No. de operaciones: ?? (... = 0, ... = 1, ...<=, i++, ...+=)
    Aquí no tenemos un número definido, puesto que la mayoría de las operaciones dependen del
    número que asignemos a "n" (ej. el <= se ejecuta las veces que se ejecute el for, mismo caso
    con el i++, etc.).
    BigO: O(n)

    Forma 2: 
    No. de operaciones: 3 (*, +, /)
    No importa el valor de "n", siempre son 3 operaciones la que se realizan.
    BigO: O(1)
*/