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