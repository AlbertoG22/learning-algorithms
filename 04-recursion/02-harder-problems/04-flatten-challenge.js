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


// ---------------- Solución del curso ----------------
function flatten(oldArr){
    let newArr = [];
    for(let i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    } 
    return newArr;
}