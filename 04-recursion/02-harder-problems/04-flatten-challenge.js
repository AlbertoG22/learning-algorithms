// ----------------------------------- Flatten Challenge ----------------------------------------
/* 
    Problema:   
    Escriba una función recursiva llamada 'flatten' que acepte un array de arrays y retorne un nuevo
    array con todos los valores aplanados.

    Output:
    flatten([1, 2, 3, [4, 5] ]); // [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]]); // [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
*/

// ---------------- Mi solución ----------------
function flatten(array) {
    let flattend = [];

    function flatEl(arr) {
        arr.forEach(el => {
            if (Array.isArray(el)) flatEl(el);
            else flattend.push(el);
        });
    };

    flatEl(array);
    return flattend;
}
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
