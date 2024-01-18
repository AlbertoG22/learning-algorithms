// ------------------------------ Multiple Pointers Pattern ----------------------------------------
/* 
    La idea de este patrón es crear punteros o valores que correspondan a un índice o posición y se 
    muevan hacia el principio, el final o el medio en función de una determinada condición.
    Se trabaja sobre dos estructuras lineales (array/string), y la idea es ir buscando un par de 
    valores o algo que cumpla una condición. Se usan dos referencias, un índice al inicio del 
    array/string y el otro al final, y se trabaja el uno hacia el otro.
*/

// ===============================================================================================
/* 
    Problema:
    Escriba una función llamada 'sumZero' que acepte un array de enteros ORDENADOS. La función debe 
    encontrar el PRIMER par de valores donde la suma sea 0. Retornar un array que incluya ambos valores
    o 'undefined' si no existe un par.

    Output:
    sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
    sumZero([-2,0,1,3]) // undefined
    sumZero([1,2,3]) // undefined
*/
// ===============================================================================================

// -------- Solución compleja: --------
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

/* 
    Explanation:
    - El problema anterior usa dos ciclos anidados, en el primero se selecciona el primer elemento del
    array, mientras el segundo itera sobre el mismo array empezando desde la segunda posición. 
    - Si no lo encuentra, pasa al siguiente elemento y comienza la búsqueda nuevamente hasta que 
    encuentra la suma que dé 0 o retorne undefined.
    - Al ser dos ciclos anidados, estos es una complejidad cuadrática --> O(n²).
*/


// -------- Solución refactorizada: --------
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

/* 
    Explanation:
    [-4, -3, -2, -1, 0, 1, 2, 3, 10]
    - Se tienen dos punteros, uno que inicia a la izquierda (índice 0) y otro que inicia a la derecha
    (último índice).
        Índice 0 = -4       |       Índice (arr.length - 1 = 8) = 10
    - Después se tiene un ciclo, en donde lo primero que se hace es sumar los valores de estos dos 
    índices.
        sum = -4 + 10 = 6
    - Si la suma es mayor a 0, significa que el valor que tiene el último índice del array es muy alto,
    por lo que debemos reducirlo, restando uno al índice.
        right = 7 --> arr[7] = 3
    - Como el índice 'left' es menor que 'right', entra en el ciclo de nuevo.
    - Hace el cálculo, y si ahora el resultado es menor a 0, significa que hay que aumentar el número
    menor (mover el índice menor).
        sum = -4 + 3 = -1
        left = 1 --> arr[1] = -3
    - Así sucesivamente hasta que la suma da 0 y retorne los valores de esos índices o 'undefined' en
    caso de no haber.
        sum = -3 + 3 = 0

    NOTA: como se ve, en este patrón el orden de los elementos es muy importante.
*/


// Prácticando nuevamente el ejercicio con lo aprendido
function pairsSumZero(arr) {
    let first = 0;
    let last = arr.length - 1;
    let sum;

    for(let i = first; i < last; i++) {
        sum = arr[last] + arr[first];
        if(sum > 0) last--;
        else if(sum < 0) first++;
        else return [arr[first], arr[last]];
    }
}
pairsSumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);