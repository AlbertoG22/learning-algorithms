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
