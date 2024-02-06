// ------------------------------- Linear Search Challenge -------------------------------------------
/* 
    Linear Search es un mecanismo en el que se hace una búsqueda elemento por elemento, es decir, 
    suponiendo que tengamos un array con varios elementos y queremos encontrar uno en específico, lo 
    que hace es recorrer uno a uno el array y verificar si es el que buscamos, si no, sigue con el 
    siguiente hasta encontrarlo.
    Behind the scenes, JavaScript aplica esto en algunos métodos de arrays:
        * indexOf
        * includes
        * find
        * findIndex
*/

/* 
    Problema:   
    Escriba una función llamada 'linearSearch' que acepte un array y un valor, y retorne el índice en 
    el que existe el valor. Si el valor no existe en el array, retorne -1.

    ¡No utilice indexOf para resolver el problema!

    Output:
    linearSearch([10, 15, 20, 25, 30], 15); // 1
    linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
    linearSearch([100], 100); // 0
    linearSearch([1,2,3,4,5], 6); // -1
    linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
    linearSearch([100], 200); // -1
*/

// ---------------- Mi solución ----------------
function linearSearch(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) return i;
    }
    return -1;
}
linearSearch([10, 15, 20, 25, 30], 15); // 1