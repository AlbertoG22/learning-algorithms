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


// ---------------- Solución del curso ----------------
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(elem !== arr[middle] && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === elem ? middle : -1;
}
binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28); // 6

/*
    Explanation:
    - Lo que hacemos primero es crear las variables para los índices del inicio, el final y la posición
    de en medio.
    - Esta última la calculamos sumando el índice del inicio + el índice del final, y dividiendo el 
    resultado entre 2. En caso de que sea decimal, lo redondeamos al número inferior, es decir, ignoramos
    los decimales.
    - En el primer caso tenemos lo siguiente:
    [2, 5, 6, 9, 13, 15, 28, 30]    =  (0 + 7) / 2  =       7 / 2      =   3.5     =   3
     S        M              E
     0        3              7
    - Por lo que el inicio es el índice 0, el final el último elemento con índice 7, y el valor medio
    con el índice 3.
    - Lo que sigue es ejecutar un ciclo while donde se ejecute mientras el valor medio sea diferente al
    que estamos buscando y el valor del índice start sea menor o igual al end.
    - Si el valor que buscamos es menor que el de en medio, la idea es recorrer los índices de lugar
    para descartar la mitad de elementos. Ahora el final será el valor de en medio - 1, puesto que si 
    lo asignamos al de en medio, de antemano ya sabemos que no es el valor que buscamos, por lo que 
    sería redundante si lo igualamos a este.
    - El valor del inicio se mantiene, nos quedamos con la primera mitad de valores y se recalcula el
    valor central.
    - Caso contrario, si el valor que buscamos es mayor al valor medio, descartamos la primera mitad
    y nos quedamos con la segunda. Ahora el valor de inicio será el de en medio + 1 (misma razón que 
    en el caso anterior), y se recalculamos el valor central.
    - Este proceso se repite hasta que recorra todos los elementos del array.
    - Si el elemento del array en la posición middle es igual al que buscamos, retorna el index, si no,
    retorna -1.

    S = start
    M = mid
    E = end

    Paso 1:
    [2, 5, 6, 9, 13, 15, 28, 30]    =  (0 + 7) / 2  =       7 / 2      =   3.5     =   3
     S        M              E
     0        3              7

    Paso 2:
    28 > 9
    [2, 5, 6, 9, 13, 15, 28, 30]    =  (4 + 7) / 2  =       11 / 2      =   5.5     =   5
                  S   M       E
                  4   5       7

    Paso 3:
    28 > 15
    [2, 5, 6, 9, 13, 15, 28, 30]    =  (6 + 7) / 2  =       13 / 2      =   6.5     =   6
                         SM   E
                          6   7

    Paso 4:
    28 === 28 return 6
    [2, 5, 6, 9, 13, 15, 28, 30]
                         SM   E
                          6   7
*/


/* 
    Time Complexity de Binary Search:
    O(log n) ➔ Logarítmica
    
    En el mejor de los casos el BigO será O(1) y en el peor O(log n). El logaritmo es la contraparte
    a una acción exponencial, por lo tanto, supongamos que tenemos un string con 16 elementos, ¿qué
    número al cuadrado da 16? R = 4
    Por lo tanto, 4 es el número máximo de pasos en los que encontraremos (o no) el elemento deseado.
    Esta es la razón por la que un BigO logarítmico es muy bueno.
*/