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
reverse('awesome'); // 'emosewa'

/* 
    Explanation:
    - Lo que se va haciendo es llamarse a sí mismo cada vez pero sin el primer elemento del string.
    - Al momento que llega a la última letra y se vuelve a llamar solo con ella, en el ejemplo de 
    arriba ↑ vemos que es la letra 'e', entra en la condición y se retorna esta letra, haciendo la
    suma a la inversa, es decir 'e' + 'm' = 'em'.
    - Y a su vez, este resultado se le va sumando la anterior, sucesivamente.
    - Esto es el motivo de siempre después de llamar a la función, sumarle la letra que le quitamos.
*/

/* 
    ------------------ 'awesome' ------------------
    1°: return  fn('wesome') + 'a'
    2°: return  fn('esome') + 'w'
    3°: return  fn('some') + 'e'
    4°: return  fn('ome') + 's'
    5°: return  fn('me') + 'o'
    6°: return  fn('e') + 'm'
        return     'e'

    Al final, la última llamada a la función retorna la misma letra con la que se mandó llamar, y ahora
    se van sumando con la penúltima letra y así sucesivamente...

    6°: return  'e' + 'm' = 'em'
    5°: return  'em' + 'o' = 'emo'
    4°: return  'emo' + 's' = 'emos'
    3°: return  'emos' + 'e' = 'emose'
    2°: return  'emose' + 'w' = 'emosew'
    1°: return  'emosew' + 'a' = 'emosewa'
        return  'emosewa'
    
    ...formando la secuencia del string a la inversa.
*/