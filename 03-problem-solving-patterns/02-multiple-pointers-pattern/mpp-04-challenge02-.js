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
    let pointer = 0;

    for(let i = 0; i < str2.length + 1; i++) {
        if(pointer === str1.length) return true;
        if(str1[pointer] === str2[i]) pointer++;
    }
    return false;
}
isSubsequence('abc', 'dabracadabra'); // true
