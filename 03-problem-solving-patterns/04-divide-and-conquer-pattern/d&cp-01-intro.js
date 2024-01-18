// ------------------------------ Divide and Conquer Pattern ----------------------------------------
/* 
    Este patrón consiste en tomar un gran conjunto de datos, ya sea un array, string, linked list, 
    tree, etc. y en lugar de iniciar de izquierda a derecha la búsqueda de un valor, vamos a dividir 
    los datos en piezas pequeñas, para así hacer algo sobre esta pequeña cantidad de datos, y después 
    determinar a dónde seguir buscando.
*/

// ===============================================================================================
/* 
    Problema:
    Escriba una función llamada 'search' que acepte un array de enteros ORDENADOS y un número n.
    La función deberá retornar el índice donde se encuentra ese valor n en el array. Si no encuentra, 
    devuelve -1.

    Output:
    search([1,2,3,4,5,6],4) // 3
    search([1,2,3,4,5,6],6) // 5
    search([1,2,3,4,5,6],11) // -1
*/
// ===============================================================================================

// -------- Solución compleja: --------
function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

/* 
    Explanation:
    - El ciclo recorre el array elemento por elemento hasta encontrar el deseado, si no, retorna -1.
    - Al haber un ciclo esto hace que la complejidad sea lineal ---> O(n)
*/

// -------- Solución refactorizada: --------
function search(array, val) {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
 
        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

/* 
    Explanation:
    - Esta solución es Binary Search, en donde a grandes rasgos lo que hace es dividir el array a la
    mitad, y ver si el objetivo es mayor o menor que el valor en medio.
    - Dependiendo de esto, decide si ir en una dirección o en otra buscando el objetivo.
    - Después hace lo mismo, dividir y cambiar de dirección.
    - Para que el algoritmo funcione es IMPORTANTE que los elementos estén ordenados.

    - A pesar de que tiene un ciclo, el time complexity no es de O(n), sino ---> Log(n)
*/