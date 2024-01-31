// ----------------------------------- someRecursive Challenge ----------------------------------------
/* 
    Problema:   
    Escriba una función recursiva llamada 'someRecursive' que acepte un aray y un callback. La función
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