// ------------------------------ Product of Array Challenge -----------------------------------------
/* 
    Problema:   
    Escriba una función llamada 'productOfArray' que tome una serie de números y devuelva el producto 
    de todos ellos.

    Output:
    productOfArray([1,2,3]); // 6
    productOfArray([1,2,3,10]); // 60
*/

// ---------------- Mi solución ----------------
function productOfArray(args) {
    if(args.length === 0) return 1;
    return args[0] * productOfArray(args.slice(1));
}
productOfArray([1,2,3]); // 6