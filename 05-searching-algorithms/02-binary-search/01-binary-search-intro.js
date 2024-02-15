// ------------------------------- Binary Search Challenge -------------------------------------------
/* 
    La idea de este patrón es "Divide and Conquer", tomar la mitad del array y preguntar si lo que 
    buscamos está antes o después de ese elemento central, dependiendo de esto, se toma o descarta 
    ciertos elementos del array. Este proceso se repite hasta que se encuentra el elemento deseado 
    (o no), lo cual disminuye considerablemente el número de ejecuciones que con la búsqueda lineal.
    
    Este mecanismo es mucho más rápido que el linear.
*/

/* 
    Problema:
    Escriba una función llamada 'binarySearch' que acepte un array ORDENADO y un valor y retorne el 
    índice en el que existe ese valor. De lo contrario, retorne -1.

    Pasos:
    - Escriba una función que acepte un array ORDENADO y un valor.
    - Crear un lef pointer al inicio del array y un right pointer al final de él.
    - Iterar el array y, mientras el left sea menor que el right:
        - Crear un pointer a la midad.
        - Si el valor del pointer es el que buscamos, retornar el índice.
        - Si el valor es menor, recorrer el left pointer hacia arriba.
        - Si el valor es mayor, recorrer el right pointer hacia abajo.
    - Si no se encuentra el valor en el array, retornar -1.

    Output:
    binarySearch([1,2,3,4,5],2); // 1
    binarySearch([1,2,3,4,5],3); // 2
    binarySearch([1,2,3,4,5],5); // 4
    binarySearch([1,2,3,4,5],6); // -1
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10); // 2
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95); // 16
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100); // -1
*/

// ---------------- Mi solución ----------------
function binarySearch(arr, num) {
    let min = 0;
    let max = arr.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
 
        if (arr[middle] < num) {
            min = middle + 1;
        }
        else if (arr[middle] > num) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}
binarySearch([5, 6, 10, 13, 14, 18, 30, 35, 37, 96, 99], 30); // 6