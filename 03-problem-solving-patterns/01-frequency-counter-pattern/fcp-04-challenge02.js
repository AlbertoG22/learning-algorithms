// ------------------- Frequency Counter / Multiple Pointers Challenge ------------------------------
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
    if(args.length === 0) return false;
    const freqCount = {};
    for(const el of args){
        if(freqCount[el]) return true;
        freqCount[el] = 1;
    }
    return false;
}
areThereDuplicates(1, 2, 3); // false

// ---------------- Mi solución MPP ----------------
function areThereDuplicates(...args) {
    if(args.length === 0) return false;
    let indexA = args[0];
    let obj = {};
    obj[indexA] = 1;
    
    for(let i = 1; i < args.length; i++) {
        let currEl = args[i];
        if(currEl in obj) return true;
        obj[currEl] = 1;
    }
    return false;
}
areThereDuplicates('a', 'b', 'c', 'a'); // true