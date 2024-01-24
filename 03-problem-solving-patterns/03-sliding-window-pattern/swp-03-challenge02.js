// ------------------------------ min SubArray Len Challenge ----------------------------------------
/* 
    Problema:   
    Escriba una función llamada 'minSubArrayLen' que acepte dos parámetros: un array de enteros 
    (positivos) y un entero (positivo).
    Esta función debe devolver la longitud mínima de un subarray contiguo cuya suma sea mayor o igual 
    al número entero pasado a la función. Si no hay ninguno, devuelve 0 en su lugar.
    - Solución debe ser: 
        * Time - O(n).
        * Space - O(1)

    Output:
    minSubArrayLen([2,3,1,2,4,3], 7); // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9); // 2 -> because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52); // 1 -> because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39); // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55); // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95); // 0
*/

// ---------------- Mi solución ----------------
function minSubArrayLen(arr, num) {
    let leftIndex = 0;
    let rightIndex = 0;
    let tempSum = 0;
    let minElements = 0;
    
    let curElements = 0;
    
    let i = 0;
    while(tempSum < num) {
        tempSum += arr[i];
        i++;
        minElements++;
    }

    if(minElements > arr.length) return 0;

    rightIndex = minElements - 1;

    while(rightIndex < arr.length) {
        tempSum = tempSum - arr[leftIndex];
        curElements = rightIndex - leftIndex;

        if(tempSum >= num) {

            if(curElements < minElements) {
                minElements = curElements;
            }
            leftIndex++;
        }
        else {
            rightIndex++;
            tempSum = tempSum + arr[leftIndex] + arr[rightIndex];
        }
    }
    return minElements;
}
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2