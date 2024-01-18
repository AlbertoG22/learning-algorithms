// ------------------- Are There Duplicates Solution Challenge ------------------------------
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
        if(freqCount[el]) return true;
        freqCount[el] = 1;
    }
    return false;
}
areThereDuplicates(1, 2, 3); // false

// ---------------- Solución del curso FCP ----------------
function areThereDuplicates() {
    let collection = {};
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for(let key in collection){
        if(collection[key] > 1) return true;
    }
    return false;
}


// ---------------- Mi solución MPP ----------------
function areThereDuplicates(...args) {
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

// ---------------- Solución del curso MPP ----------------
function areThereDuplicates(...args) {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
   
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

/* 
    La clave en esta solución es el sort() que hace al inicio, de esta manera si hay elementos repetidos,
    se van a ordenar uno después de otro y se podrá aplicar perfectamente el patrón de multiple pointers
    cuando se haga la comparación "args[start] === args[next]".
*/