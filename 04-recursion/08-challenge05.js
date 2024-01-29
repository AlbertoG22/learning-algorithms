// ---------------------------------- Fibonacci Challenge --------------------------------------------
/* 
    Problema:   
    Escribe una función recursiva llamada 'fib' que acepte un número (n) y devuelva el enésimo número 
    en la secuencia de Fibonacci. 
    
    Nota: Recordemos que la secuencia de Fibonacci es la secuencia de números enteros: 
    1, 1, 2, 3, 5, 8,... que comienza con 1 y 1, y donde cada número posterior es igual a la suma de 
    los dos números anteriores.

    Output:
    fib(4); // 3
    fib(10); // 55
    fib(28); // 317811
    fib(35); // 9227465
*/

// ---------------- Mi solución ----------------
function fib(n) {
    let fibArr = [1, 1];

    if(n <= fibArr.length) return fibArr[n - 1];
    function fibonacci(prevA, prevB) {
        let currFib = prevA + prevB;
        fibArr.push(currFib);
        if(n === fibArr.length) return;
        fibonacci(prevB, currFib);
    }
    
    fibonacci(1, 1);
    // console.log(fibArr);
    return fibArr[n - 1];
}
fib(4); // 3