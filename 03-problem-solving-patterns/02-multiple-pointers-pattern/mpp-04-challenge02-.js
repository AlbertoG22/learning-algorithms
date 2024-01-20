// ------------------------------ Is Subsequence Challenge ----------------------------------------
/* 
    Problema:   
    Escriba una función llamada 'isSubsequence' que reciba dos strings y verifique si los caracteres 
    del primer string forman una subsecuencia de los caracteres del segundo string. En otras palabras,
    la función deberá comprobar si los caracteres del primer string aparecen en algún lugar del segundo
    string, sin cambiar su orden.
    - Solución debe ser: 
        * Time - O(n + m).
        * Space - O(1)

    Output:
    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
*/
































function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
      let arr1 = str1.split('');
      let arr2 = str2.split('');
      let i = 0;
  
      for(let j = 0; j < arr2.length; j++) {
          if(arr1[i] === arr2[j]) {
              i++;
          }
      }
      if(i < str1.length) return false;
      return true;
}