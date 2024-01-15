// -------------------- Más ejemplos de BigO --------------------
function countUpAndDown(n) {
    console.log('Going up!');
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log('At the top! \nGoing down...');
    for(let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log('Back down. Bye!')
}
countUpAndDown(10);

/* 
    En el ejemplo anterior, vemos que las operaciones son 1 por cada console.log y en cada ciclo
    es O(n), por lo que podemos decir que es: 2 O(n) + 3.
    Como debemos enfocarnos en el 'big picture', esto es igual a O(n).
*/


// ------------------------------------------------------------------
function printAllPairs(n) {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
printAllPairs(4);

/* 
    En el ejemplo anterior, vemos que tenemos un ciclo (O(n)), pero dentro tenemos otro ciclo, 
    por lo que por cada operación del ciclo de afuera se ejecuta otra vez O(n), esto no es 
    2 veces O(n), sino n * n, es decir O(n^2).
*/