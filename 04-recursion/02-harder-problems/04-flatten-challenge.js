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
    let newArr = [];

    function flatEl(arr) {
        arr.forEach(el => {
            if (Array.isArray(el)) flatEl(el);
            else newArr.push(el);
        });
    };

    flatEl(array);
    return newArr;
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

/* 
    Explanation:
    - Lo primero que hace la función es recorrer el array.
    - Si el elemento en cuestión es un array, es decir, que tenga más elementos dentro y no sea un 
    elemento solo, lo concatena al array nuevo con la llamada a la misma función mandándole ahora 
    el array en cuestión.
    - Así hasta que llegue al single element y lo añada al array nuevo. 
    - Una vez que termina de recorrer el array original, retorna el nuevo con los elementos esparcidos.
*/

/* 
    Ejemplo:
    ------------------ [ [[[1], [[[2]]], [[[[[[[3]]]]]]]]] ] ------------------
    
    
    ➔ 1ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    Array.isArray(oldArr[0]) ---> [[[1], [[[2]]], [[[[[[[3]]]]]]]]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [[[1], [[[2]]], [[[[[[[3]]]]]]]]] ))


    ➔ 2ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    [[1], [[[2]]], [[[[[[[3]]]]]]]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [[1], [[[2]]], [[[[[[[3]]]]]]]] ))


    ➔ 3ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 3       (i = 0)
    ** entra al ciclo[0] **
    [1]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [1] ))


    ➔ 4ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    1    ¿es un array?    X
    newArr.push(oldArr[i]) ---> [].push(1) ---> newArr = [1]
    - Se termina la ejecución de esta 4ª llamada, retorna el array nuevo:
    return newArr;
    - Y regresa a la 3ª (la cual se quedó en el concat()...).


    ➔ 3ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [1];
    - Hace i++;
    - Longitud del array (oldArr) = 3       (i = 1)
    ** entra al ciclo[1] **
    Array.isArray(oldArr[1]) ---> [[[2]]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[1])) ---> [1].concat( fn( [[[2]]] ))


    ➔ 4ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    newArr = [];
    ** entra al ciclo **
    [[2]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [[2]] ))


    ➔ 5ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    newArr = [];
    ** entra al ciclo **
    [2]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [2] ))


    ➔ 6ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    newArr = [];
    ** entra al ciclo **
    2    ¿es un array?    X
    newArr.push(oldArr[i]) ---> [].push(2) ---> newArr = [2]
    - Se termina la ejecución de esta 6ª llamada, retorna el array nuevo:
    return newArr;
    - Y regresa a la llamada 5ª (se quedó en el concat()...).


    ➔ 5ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [2];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 5ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 4ª (se quedó en el concat()...).


    ➔ 4ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [2];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 4ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 3ª (se quedó en el concat()...).


    ➔ 3ª vez que se ejecuta flatten():
    newArr = [1];
    - hace la concatenación del resultado anterior, como en la tercera llamada newArr ya era [1],
    se concatena el nuevo resultado:
    newArr = [1] + [2] = [1, 2]
    - Hace i++;
    - Longitud del array (oldArr) = 3       (i = 2)
    ** entra al ciclo[2] **
    Array.isArray(oldArr[2]) ---> [[[[[[[3]]]]]]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[2])) ---> [1, 2].concat( fn( [[[[[[[3]]]]]]] ))


    ➔ 4ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    [[[[[[3]]]]]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [[[[[[3]]]]]] ))


    ➔ 5ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    [[[[[3]]]]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [[[[[3]]]]] ))


    ➔ 6ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    [[[[3]]]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [[[[3]]]] ))


    ➔ 7ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    [[[3]]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [[[3]]] ))


    ➔ 8ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    [[3]]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [[3]] ))


    ➔ 9ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    [3]    ¿es un array?    ✔
    newArr = newArr.concat(fn(oldArr[0])) ---> [].concat( fn( [3] ))


    ➔ 10ª vez que se ejecuta flatten():
    newArr = [];
    - Longitud del array (oldArr) = 1
    ** entra al ciclo **
    3    ¿es un array?    X
    newArr.push(oldArr[i]) ---> [].push(3) ---> newArr = [3]
    - Se termina la ejecución de esta 10ª llamada, retorna el array nuevo:
    return newArr;
    - Y regresa a la llamada 9ª (se quedó en el concat()...).


    ➔ 9ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [3];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 9ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 8ª (se quedó en el concat()...).


    ➔ 8ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [3];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 8ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 7ª (se quedó en el concat()...).


    ➔ 7ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [3];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 7ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 6ª (se quedó en el concat()...).


    ➔ 6ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [3];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 6ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 5ª (se quedó en el concat()...).


    ➔ 5ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [3];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 5ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 4ª (se quedó en el concat()...).


    ➔ 4ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [3];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 4ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 3ª (se quedó en el concat()...).


    ➔ 3ª vez que se ejecuta flatten():
    newArr = [1, 2];
    - hace la concatenación del resultado anterior, como en la tercera llamada newArr ya era [1, 2],
    se concatena el nuevo resultado:
    newArr = [1, 2] + [3] = [1, 2, 3]
    - Hace i++;
    - Longitud del array (oldArr) = 3       (i = 3)
    ** ya no entra al ciclo **
    - Ya no hay más elementos en el array, termina la 3ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 2ª (se quedó en el concat()...).


    ➔ 2ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [1, 2, 3];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 2ª ejecución y retorna newArr:
    return newArr;
    - Regresa a la llamada 1ª (se quedó en el concat()...).


    ➔ 1ª vez que se ejecuta flatten():
    newArr = [];
    - hace la concatenación del resultado anterior:
    newArr = [1, 2, 3];
    - Hace i++;
    - Ya no hay más elementos en el array, termina la 1ª ejecución y retorna newArr:
    return newArr;
    - ¡FIN DE LA RECURSIVIDAD!
*/