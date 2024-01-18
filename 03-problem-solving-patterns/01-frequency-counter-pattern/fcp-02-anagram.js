// ------------------------------ Anagram Challenge ----------------------------------------
/* 
    Nota:Un anagrama es una palabra, frase o nombre formado al reorganizar las letras de otra 
    palabra, por ejemplo la palabra 'cinema', se puede formar de la palabra 'iceman'.
*/

// ===============================================================================================
/* 
    Dado 2 strings, escribir una función que determine si el segundo string es un anagrama del primero.
    
    Ejemplo:
    validAnagram('', '') // true
    validAnagram('aaz', 'zza') // false
    validAnagram('anagram', 'nagaram') // true
    validAnagram("rat","car") // false
    validAnagram('awesome', 'awesom') // false
    validAnagram('qwerty', 'qeywrt') // true
    validAnagram('texttwisttime', 'timetwisttext') // true
*/
// ===============================================================================================


// ---------------- Mi solución ----------------
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let a of str1) {
    freqCounter1[a] = (freqCounter1[a] || 0) + 1;
  }
  for (let b of str2) {
    freqCounter2[b] = (freqCounter2[b] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (freqCounter2[key] !== freqCounter1[key]) return false;
  }
  return true;
}


// ---------------- Solución del video ----------------
function validAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }
    const lookup = {};

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1; 
        }
    }
    return true;
}

/* 
    Explanation:
    - El inicio es el mismo, lo que cambia es que en vez de usar dos objetos, ahora solo se crea 
    uno (lookup) y solo dos ciclos.
    - Después se guarda la frecuencia de cada letra del primer string en el objeto. Si existe la pro-
    piedad, se le suma 1, si no, se establece en 1.
    - En el segundo loop, se itera sobre el segundo string, en donde cada una de las letras se este, 
    se busca dentro del objeto, si las encuentra, le resta 1 al value, si no, significa que esa letra 
    no existe en el obj o ya quedó en 0 (0 es falsy), termina la ejecución.
    - Si todo se ejecuta normal, termina el ciclo y retorna 'true'.
*/


// -------- Prácticando nuevamente el ejercicio con lo aprendido --------
function anagramChallenge(str1, str2) {
    if(str1.length !== str2.length) return false;

    const freqCounter = {};

    for(const letter of str1) {
        freqCounter[letter] ? freqCounter[letter] += 1 : freqCounter[letter] = 1;
    }

    for(const a of str2) {
        if(freqCounter[a]) freqCounter[a] -= 1;
        else return false;
    }
    return true;
}
anagramChallenge('anagram', 'nagaram');