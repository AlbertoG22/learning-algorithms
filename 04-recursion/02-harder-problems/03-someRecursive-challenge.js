// ----------------------------------- someRecursive Challenge ----------------------------------------
/* 
    Problema:   
    Escriba una función recursiva llamada 'someRecursive' que acepte un array y un callback. La función
    deberá retornar true si solo un valor del array retorna true cuando se pase al callback. De lo
    contrario retorne false.

    Ejemplo:
    const isOdd = val => val % 2 !== 0;

    Output:
    someRecursive([1,2,3,4], isOdd); // true
    someRecursive([4,6,8,9], isOdd); // true
    someRecursive([4,6,8], isOdd); // false
    someRecursive([4,6,8], val => val > 10); // false
*/

// ---------------- Mi solución ----------------
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, fn) {
    if(arr.length === 0) return false;
    if(fn(arr[0])) return true;

    return someRecursive(arr.slice(1), fn);
}
someRecursive([1,2,3,4], isOdd); // true
someRecursive([4,6,8], val => val > 10); // false


// ---------------- Solución del curso ----------------
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}