// ------------------------------ Same Frequency Challenge ----------------------------------------
/* 
    Problema:   
    Escribe una función llamada 'sameFrequency' la cual reciba dos números enteros positivos, averigua
    si los dos números tienen la misma frecuencia de dígitos.
    - Solución debe ser O(n).

    Output:
    sameFrequency(182,281); // true
    sameFrequency(34,14); // false
    sameFrequency(3589578, 5879385); // true
    sameFrequency(22,222); // false
*/

// ---------------- Mi solución ----------------
function sameFrequency(a, b){
    let num1 = a.toString();
    let num2 = b.toString();

    if(num1.length !== num2.length) return false;
    
    let lookup = {};
    for(const digitA of num1) {
        lookup[digitA] ? lookup[digitA] += 1 : lookup[digitA] = 1;
    }

    for(const digitB of num2) {
        if(!(digitB in lookup)) return false;
        lookup[digitB] -= 1;
    }
    return true;
}
sameFrequency(22,222); // false

// ---------------- Otra solución hecha por mí ----------------
function sameFrequency(a, b){
    let num1 = a.toString();
    let num2 = b.toString();
    
    if(num1.length !== num2.length) return false;
    
    let freqCount1 = {};
    let freqCount2 = {};
    
    for(let val of num1) {
        freqCount1[val] = ((freqCount1[val] || 0) + 1);
    }
    for(let val of num2) {
        freqCount2[val] = ((freqCount2[val] || 0) + 1);
    }
    
    for(let a in freqCount1) {
        if(!(a in freqCount2)) return false;
        if(freqCount1[a] !== freqCount2[a]) return false;
    }
    
    return true;
}