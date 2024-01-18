// ------------------------- Count Unique Values Challenge ----------------------------------------
// ===============================================================================================
/* 
    Problema:
    Implemente una función llamada 'countUniqueValues', que acepte un array ORDENADO y cuente los
    valores únicos del array. Puede haber números negativos, pero siempre se ordenarán.

    Output:
    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4
*/
// ===============================================================================================


// ---------------- Mi solución ----------------
function countUniqueValues(arr) {
    if(arr.length === 0) return 0;

    let firstPointer = 0;

    for(let i = 1; i < arr.length; i++) {
        if(arr[firstPointer] !== arr[i]) {
            firstPointer++;
            arr[firstPointer] = arr[i];
        }
    }
    // console.log(arr.slice(0, firstPointer + 1));
    return firstPointer + 1;
}
countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);


// ---------------- Solución del video ----------------
function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    console.log(arr)
    return i + 1;
}
countUniqueValues([1, 1, 2, 3, 3, 4, 4, 5, 6]);

/* 
    Explanation:
    [1, 1, 2, 3, 3, 4, 4, 5, 6]
    - Lo que hace este patrón ahora es tener un índice (i), el cual inicia en el index 0.
    - Lo siguiente es recorrer el array (pero iniciando en la sig. posición, es decir, en el index 1).
    - Lo que hace ahora es comparar los valores del índice i (0), con el que itera el ciclo (j):
        arr[i] !== arr[j]?       --->        arr[0] !== arr[1]?       --->      1 !== 1?   X
    - Si no es el caso, no pasa nada y el ciclo sigue iterándose (j++).
    - En la siguiente iteración vuelve a comparar los valores:
        arr[i] !== arr[j]       --->        arr[0] !== arr[2]       --->        1 !== 2    ✓
    - Como se cumple la condición, lo que haremos es recorrer el índice i una posición (i++), y
    reemplazar el valor por el nuevo.
        [1, 2, 2, 3, ...]
            ↑
    - Esto lo que va a ir haciendo es dejar al inicio los valores únicos, reemplazando los que se repiten.
    - Al final queda el array de la sigu. manera:
        [1, 2, 3, 4, 5, 6, 4, 5, 6]
                        ↑
    - Y como i es el índice hasta donde se acomodaron los diferentes elementos, simplemente retornamos
    i + 1, que sería el total de elementos diferentes.

    - Time complexity: O(n)  
*/