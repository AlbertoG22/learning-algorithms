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

// ---------------- Mi solución ----------------
function isSubsequence(str1, str2) {
    let pointer = 0;

    for(let i = 0; i < str2.length + 1; i++) {
        if(pointer === str1.length) return true; // se completó el total de caracteres del string1
        if(str1[pointer] === str2[i]) pointer++;
    }
    return false;
}
isSubsequence('abc', 'dabracadabra'); // true


// ---------------- Otra solución hecha por mí ----------------
function isSubsequence(str1, str2) {
    let i = 0;

    for(let j = 0; j < str2.length; j++) {
        if(str1[i] === str2[j]) {
            i++;
        }
    }
    if(i < str1.length) return false;
    return true;
}

// ---------------- Solución del curso ----------------
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
}

// -------------- Otra solución del curso (Recursive but not O(1) space) ----------------
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true;
    if(str2.length === 0) return false;
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
    return isSubsequence(str1, str2.slice(1));
}