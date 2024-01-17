// ------------------------------ Frequency Counter Pattern ----------------------------------------
/* 
    La idea de este patrón es usar objetos para almacenar un conjunto de valores y sus frecuencias. 
    Esto puede evitarnos usar ciclos anidados u operaciones cuadráticas (O(n2)) con arrays/strings.
*/

// ===============================================================================================
/* 
    Problema:
    Escribe una función llamada 'same' la cual acepte 2 arrays. La función deberá retornar 'true' 
    si el segundo array contiene los elementos del primero pero al cuadrado. No importa el orden 
    en que se encuentren, solo con que los almacene.

    Output:
    same([1,2,3], [4,1,9]) // true
    same([1,2,3], [1,9]) // false
    same([1,2,1], [4,4,1]) // false (must be same frequency)
*/
// ===============================================================================================

// -------- Solución compleja: --------
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}
same([1, 2, 3, 2], [9, 1, 4, 4]); // true

/* 
    Explanation:
    - En la solución anterior, primero revisa si la longitud de ambos arrays es diferente, si lo es, 
    termina la ejecución ya que no hay manera de que haya los mismos elementos al cuadrado.
    - Si sí, entra al for y recorre el arr1. Después pregunta el índice del arr2 donde se encuentre 
    el valor actual al cuadrado. Si obtenemos un -1 (es decir, que no existe el índice), terminamos 
    la ejecución.
    - Si sí encuentra un índice, elimina ese elemento del arr2 y continúa al siguiente elemento 
    del arr1.
    - As+i hasta eliminar todos los elementos y retornar 'true'.

    En esta solución hay dos ciclos: el for y el indexOf, el cual recorre los elementos del array hasta
    encontrar el primer índice del elemento a buscar. 
    Por lo que el time complexity es: O(n²).
*/

// -------- Solución refactorizada: --------
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}
same([1, 2, 3, 2], [9, 1, 4, 4]); // true