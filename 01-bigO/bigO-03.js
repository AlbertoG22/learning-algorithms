//                                      TIME COMPLEXITY
// BigO también sirve para definir la complejidad en cuanto a espaico en memoria que ocupa el algoritmo
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
}

/* 
    Para calcular el espacio que ocupa la función anterior, vemos que tenemos la variable de la
    línea 4, y la variable i del ciclo for.
    No importa lo que se pasa como parámetro, no se va a crear nuevas variable u ocupar más espacio
    en memoria (solo se actualiza). 
    Por lo que la complejidad es: O(2) --> O(1) space.
    Siempre es el mismo, no importa el tamaño del input.
*/


function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    return newArr;
}

/* 
    Para el space complexity del ejemplo anterior tenemos la creación del array (línea 22),
    y la variable de iteración. El tema aquí es que el tamaño del array va a depender directamente
    al la longitud del input que le pasemos, es decir, el espacio que va a ocupar es proporcional 
    a "n" (input).
    Por lo tanto, la complejidad será: O(n) + 2 --> O(n) space.
*/


function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

/* 
    Space complexity: O(1) space.
*/