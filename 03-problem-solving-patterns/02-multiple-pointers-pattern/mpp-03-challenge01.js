// ------------------------------ Average Pair Challenge ----------------------------------------
/* 
    Problema:   
    Escribe una función llamada 'averagePair'. Dado un array (ORDENADO) de números enteros y un 
    promedio objetivo, determine si hay un par de valores en la matriz donde el promedio del par 
    sea igual al promedio objetivo. Puede haber más de un par que coincida con el objetivo promedio.
    - Solución debe ser: 
        * Time - O(n).
        * Space - O(1)

    Output:
    averagePair([1,2,3],2.5); // true
    averagePair([1,3,3,5,6,7,10,12,19],8); // true
    averagePair([-1,0,3,4,5,6], 4.1); // false
    averagePair([],4); // false
*/

function averagePair(array, average) {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while(startIndex < endIndex){
        let actualAverage = (array[startIndex] + array[endIndex]) / 2;
        if(actualAverage === average) return true;
        else if (actualAverage > average) endIndex--;
        else startIndex++;
    }
    return false;
}
averagePair([1,3,3,5,6,7,10,12,19],8); // true