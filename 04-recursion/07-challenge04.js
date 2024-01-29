// ------------------------------ Recursive Range Challenge -----------------------------------------
/* 
    Problema:   
    Escriba una función llamada 'recursiveRange' la cual acepte un número y sume todos los números 
    desde 0 hasta el número pasado a la función.

    Output:
    recursiveRange(6); // 21
    recursiveRange(10); // 55 
*/

// ---------------- Mi solución ----------------
function recursiveRange(num) {
    if(num === 0) return 0;
    return num + recursiveRange(num - 1);
}
recursiveRange(10); // 55 


// ---------------- Solución del curso ----------------
function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
}