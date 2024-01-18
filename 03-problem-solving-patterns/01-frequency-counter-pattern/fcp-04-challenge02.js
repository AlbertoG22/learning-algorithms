// ------------------------------ Multiple Pointers Frequency Challenge ----------------------------------------
/* 
    Problema:
    Escribe una función llamada 'areThereDuplicates' que acepte un número indefinido de argumentos y 
    verifique si hay duplicados entre los argumentos pasados. 
    Nota: Puede resolver esto usando el FCP o el MPP.
    - Solución debe ser: 
        * Time - O(n).
        * Space - O(n)
    - Bonus:
        * Time - O(n log n)
        * Space - O(1)

    Output:
    areThereDuplicates(1, 2, 3); // false
    areThereDuplicates(1, 2, 2); // true 
    areThereDuplicates('a', 'b', 'c', 'a'); // true 
*/

// ---------------- Mi solución FCP ----------------
function areThereDuplicates(...args) {
    const freqCount = {};
    for(const el of args){
        if(!freqCount[el]) freqCount[el] = 1;
        else return true;
    }
    return false;
}
areThereDuplicates(1, 2, 3); // false


























function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
      let freq = {};
      for(let a of args) {
          if(a in freq) return true;
          freq[a] = 1;
      }
      return false;
  }