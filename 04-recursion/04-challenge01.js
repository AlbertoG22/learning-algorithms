// ----------------------------------- Power Challenge ----------------------------------------------
/* 
    Problema:   
    Escribe una función llamada 'power' que acepte una base y un exponente. La función debe devolver 
    la potencia de la base elevado al exponente. Esta función debería imitar la funcionalidad de 
    Math.pow(); no se preocupe por las bases y exponentes negativos.

    Output:
    power(2,0) // 1
    power(2,2) // 4
    power(2,4) // 16
*/

// ---------------- Mi solución ----------------
function power(base, exp) {
    if(exp === 0) return 1;
    return base * power(base, exp - 1);
}
power(2,4); // 16