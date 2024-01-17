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
    encontrar el primer par de valores donde la suma sea 0. Retornar un array que incluya ambos valores
    o 'undefined' si no existe un par.

    Output:
    sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
    sumZero([-2,0,1,3]) // undefined
    sumZero([1,2,3]) // undefined
*/
// ===============================================================================================
