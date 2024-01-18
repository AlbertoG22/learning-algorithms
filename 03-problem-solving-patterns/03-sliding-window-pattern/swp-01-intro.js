// ------------------------------ Sliding Window Pattern ----------------------------------------
/* 
    La idea de este patrón es crear una "ventana", la cual puede ser un array o un número de una 
    posición a otra. Dependiendo de una determinada condición, la ventana aumenta o se cierra (y 
    se crea una nueva ventana).
    Este patrón es muy útil para realizar un seguimiento de un subconjunto de datos en un array/string, etc.
    
    Ejemplo:
    Dado el string "hellothere", queremos obtener la mayor secuencia de caracteres únicos existentes
    en ese string. Tendremos los subconjuntos: hel, lother, e.
    Por lo que la secuencia mayor de caracteres únicos es 'lother'.

    NOTA: Este patrón es bueno cuando necesitamos hacer subconjuntos de datos.
*/

// ===============================================================================================
/* 
    Problema:
    Escriba una función llamada 'maxSubarraySum' que acepte un array de enteros y un número llamado 'n'.
    La función deberá calcular la suma máxima de 'n' elementos consecutivos en el array.

    Output:
    maxSubarraySum([1,2,5,2,8,1,5],2) // 10
    maxSubarraySum([1,2,5,2,8,1,5],4) // 17
    maxSubarraySum([4,2,1,6],1) // 6
    maxSubarraySum([4,2,1,6,2],4) // 13
    maxSubarraySum([],4) // null
*/
// ===============================================================================================

// -------- Solución compleja: --------
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

/* 
    Explanation:
    - Lo primero es atender el edge case, en donde, si el número de subconjuntos es mayor a la cantidad
    de elementos del array, retorne 'null'.
    - Lo siguiente es definir un número muy bajo para que, sea cual sea el resultado de la primera suma,
    siempre sea menor que este número y se actualice.
    - Después tenemos un ciclo que se encarga de recorrer el array desde el inicio, hasta el último
    subconjunto de datos que pueda tomar. Si n = 2, llegará hasta el penúltimo índice del array.
    - Dentro hay otro ciclo que se encargará de ir recorriendo el índice la cantidad de veces de n 
    desde el elemento i (por eso hace i + j), haciendo la suma de números.
    - Ya que se tiene la suma de n elementos, se compara con 'max', si es mayor se actualiza.
    - Al final retorna este número.

    - Al ser dos ciclos anidados, estos es una complejidad cuadrática --> O(n²).
*/


// -------- Solución refactorizada: --------
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

/* 
    Explanation:
    ([2, 6, 9, 1, 8, 5, 6, 3], 3)
    - Primero se agrega el edge case.
    - La idea de este patrón es, en lugar de ir haciendo la suma cada vez una y otra vez (O(n²)), es 
    mejor restar el primer valor y sumarle el nuevo.
    Ejemplo: 
        * Se tiene el array anterior y queremos hacer subsets de 3 elementos.
        * El primer loop se encarga de hacer la suma de [2, 6, 9] = 17
        * Este valor se asigna a la suma temporal (tempSum).
        * El siguiente loop va a iniciar en 'n' ([1]) y restará el valor de la posición [i - num] = 0,
        es decir, el elemento con índice 0 para después sumarle el [1], puesto que los valores [6, 9] 
        se siguen tomando en cuenta dentro del subset de 3. Ahora la suma calculada es de los valores 
        [6, 9, 1] = 16.
        * Este valor temporal se compara con el máximo y si es mayor, se asigna a la variable.
        * Este proceso se ejecuta hasta que se termina el array y se retorna la suma máxima.
    
    - Al ser dos ciclos no anidados, la complejidad lineal --> O(n).  
*/


// -------- Prácticando nuevamente el ejercicio con lo aprendido --------
function subsetSum(arr, num) {
    if(arr.length < num) return null;
    let tempSum = 0;
    let maxSum = 0;
    // suma del primer subset
    for(let i = 0; i < num; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if(tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}
subsetSum([4,2,1,6,2],4); // 13
subsetSum([2, 6, 9, 1, 8, 5, 6, 3], 3); // 19
subsetSum([1,2,5,2,8,1,5],2) // 10
subsetSum([4,2,1,6],1) // 6
subsetSum([1,2,5,2,8,1,5],4) // 17
subsetSum([],4) // null
