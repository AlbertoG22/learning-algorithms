// ----------------------------------- IsPalindrome Challenge ----------------------------------------
/* 
    Problema:   
    Escriba una función recursiva llamada 'isPalindrome' que devuelva true si el string que se le 
    pasa es un palíndromo (se lee igual hacia adelante y hacia atrás). De lo contrario devuelva false.

    Output:
    isPalindrome('awesome'); // false
    isPalindrome('foobar'); // false
    isPalindrome('tacocat'); // true
    isPalindrome('amanaplanacanalpanama'); // true
    isPalindrome('amanaplanacanalpandemonium'); // false
*/

// ---------------- Mi solución ----------------
function isPalindrome(str) {
    let reverseStr = '';
    let normalStr = str;

    function revStr(string) {
        if(string.length === 0) return;
        reverseStr += string[string.length - 1];
        revStr(string.slice(0, string.length - 1));
    }

    revStr(normalStr);
    // console.log(reverseStr);

    if(reverseStr === str) return true;
    else return false;
}
isPalindrome('awesome'); // false


// ---------------- Solución del curso ----------------
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
isPalindrome('tacocat'); // true

/* 
    Explanation:
    - Lo que se hace primero es revisar siempre si el string tiene una longitud de 1 (por supuesto que
    es igual al derecho o al revés) o si tiene longitud de 2 (revisa que sean el mismo elemento).
    - Esta condición de 1 elemento va a ser útiles también cuando sí sea palíndromo.
    - Si no cae en estas condiciones, se comprara el primer y último elemento del string, como es un 
    palíndromo, deberían ser iguales. si no lo son, retorna false.
    - Si estas letras sí son iguales, se manda a llamar la misma función, pero ahora sin estos dos 
    elementos del string.
    - Con cada llamada a la función se le restan dos letras al string, hasta que queda un elemento y
    entra en la condición que retorna true.
*/

/* 
    Ejemplo:
    ------------------ 'tacocat' ------------------
    str[0] === str.slice(-1) → 't' === 't'    ✔
    
    1°: return  fn('acoca')
    2°: return  fn('coc')
    3°: return  fn('o')

    'o'.length === 1   ✔  
    return true;
*/