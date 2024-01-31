// ----------------------------------- Reverse Challenge -------------------------------------------
/* 
    Problema:   
    Escriba una función recursiva llamada 'reverse' que acepte un string y devuelva un nuevo string 
    a la inversa.

    Output:
    reverse('awesome'); // 'emosewa'
    reverse('rithmschool'); // 'loohcsmhtir'
*/

// ---------------- Mi solución ----------------
function reverse(str) {
    let newStr = [];
    function reverseStr(arr) {
        if(arr.length === 0) return;
        newStr.push(arr[arr.length - 1]);
        reverseStr(arr.slice(0, arr.length - 1));
    }
    reverseStr(str.split(''));
    return newStr.join('');
}
reverse('rithmschool'); // 'loohcsmhtir'

// ---------------- Solución del curso ----------------
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}