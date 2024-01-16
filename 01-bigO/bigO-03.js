// TIME COMPLEXITY
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
    en memoria (solo se actualiza), por lo que la complejidad es:
    2O(n) --> O(n).
    Siempre es el mismo, no importa el tamaño del input.
*/