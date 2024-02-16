// ------------------------------- String Search Challenge -------------------------------------------
/* 
    Problema:
    La idea de este problema es crear la naive solution de buscar por un string. La idea es crear una
    función que reciba dos strings, en el cual, busquemos la presencia del segundo sobre el primero. 
    Ejemplo: tenemos los strings 'wowomgzomg' y 'omg', debemos buscar la cantidad de veces que 'omg' 
    está presente sobre el primer string y retornar el número.

    Pasos:
    - Hacer un ciclo sobre el string largo.
    - Hacer un ciclo anidado para recorrer el string corto.
    - Si los caracteres no coinciden, sal del inner loop.
    - Si los caracteres coinciden, continuar.
    - Si completa el inner loop y encuentra coincidencias, incrementa count.
    - Retornar 'count'.
*/

// ---------------- Mi solución ----------------
function naiveStringSearch(longStr, shortStr) {
    let count = 0;
    for(let a = 0; a < longStr.length; a++) {
        let innerA = a;
        for (let b = 0; b <= shortStr.length; b++) {
            if(b === shortStr.length) count++;
            if(longStr[innerA] !== shortStr[b]) break;
            else innerA++;
        }
    }
    return count;
}
naiveStringSearch('wowomgzomg', 'omg');


// ---------------- Solución del curso ----------------
function naiveStringSearch(long, short) {
    let count = 0;
    for(let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if(short[j] !== long[i + j]) break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}
naiveStringSearch('lorie loled', 'lo'); // 2