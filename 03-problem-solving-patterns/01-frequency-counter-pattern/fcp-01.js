// ---------------------- Frequency Counter Pattern ----------------------------------------
/* 
    La idea de este patrón es usar objetos para almacenar un conjunto de valores y sus 
    frecuencias. 
    Esto puede evitarnos usar ciclos anidados u operaciones cuadráticas (O(n2)) con 
    arrays/strings.
*/

// ===============================================================================================
/* 
    Problema:
    Escribe una función llamada 'same' la cual acepte 2 arrays. La función deberá retornar 
    'true' si el segundo array contiene los elementos del primero pero al cuadrado. No 
    importa el orden en que se encuentren, solo con que los almacene.

    Output:
    same([1,2,3], [4,1,9]) // true
    same([1,2,3], [1,9]) // false
    same([1,2,1], [4,4,1]) // false (must be same frequency)
*/
// ===============================================================================================

