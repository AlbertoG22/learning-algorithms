// ----------------------------------- Factorial Challenge -------------------------------------------
/* 
    Problema:   
    Escribe una función llamada 'factorial' que acepte un número y devuelva el factorial de ese número.
    
    Nota: Un factorial es el producto de un número entero y todos los números enteros debajo de él; 
    por ejemplo, el factorial cuatro (4!) es igual a 24, porque 4 * 3 * 2 * 1 es igual a 24. 
    El factorial cero (0!) es siempre 1.

    Output:
    factorial(0); // 1
    factorial(4); // 24
*/

// ---------------- Mi solución ----------------
function factorial(num) {
    if(num === 0) return 1;
    return num * factorial(num - 1);
}

// ---------------- Solución del curso ----------------
function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
}