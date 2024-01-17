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
