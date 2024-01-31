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