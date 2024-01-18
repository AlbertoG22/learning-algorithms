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
