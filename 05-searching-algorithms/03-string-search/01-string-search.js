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


/* 
    Explanation:
    - Lo que hace esta solución es muy parecida a la que hice, en donde lo primero que hace es un loop
    que recorra el string largo.
    - Lo siguiente es un loop anidado que recorra el string corto.
    - Después, dentro del inner loop compara la letra actual del string corto con la letra actual del
    string largo pero sumándole el valor de j, es decir, para que la letra del outer loop vaya avanzando,
    "j" aumenta 1 y la letra de afuera ("i") también aumenta 1 posición, por eso hace "i + j".
    - Si no son iguales, rompe el inner loop y "i" aumenta en 1.
    - Si el inner loop va avanzando hasta que llega al final del array corto, significa que encontró
    todas las letras en ese orden en el string largo, por lo que aumenta el contador en 1.
    - Al final retorna el contador.
*/