// ------------------------------ Helper Method Recursion ----------------------------------------
/* 
    El Helper Method Recursion es un patrón de diseño comúnmente utilizado con recursión. Hasta ahora, 
    todas las funciones recursivas que hemos visto son funciones independientes e individuales (pure), 
    es decir, una sola función que al ejecutarse, se llama a sí misma.
    Con este nuevo método es un poco diferente. Se tienen dos funciones: la normal (no recursiva) y 
    dentro de esta hay otra (recursiva).
    Esto se hace comúnmente cuando necesitamos almacenar algo en un array o una lista de datos y 
    mantenerlo.
*/

// Ejemplo:
function collectOddValues(arr){
    
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;

}
collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/* 
    Explanation:
    - Lo que hace esta función 'collectOddValues' es aceptar un array con números y retornar un nuevo 
    array con todos los números impares.
    - Dentro se encuentra otra función 'helper', la cual es la que se llama a sí misma una y otra vez.
    - Esta función acepta el array de números originales, y lo primero que hace es revisar si la longitud
    es igual a 0, termina la recursividad.
    - Si no, toma el primer valor del array y revisa si es impar. Si lo es, lo añade al array donde se
    van a acumular.
    - Después, no importa si es o no impar, elimina ese valor del array original y se vuelve a llamar
    ahora con los nuevos valores. De esta manera, la función siempre revisa el primer valor del array
    y ejecuta el procedimiento.
    - Esto se hace hasta que no hay más elementos del array original y entra al base case, saliendo de
    la recursividad y retornando el nuevo array con los números impares.

    Nota: La razón de hacerlo de esta manera y no solamente con la función "helper()", es porque se debe
    conservar el contenido del array de números impares, y si esto se declara dentro de la función, cada
    que se ejecute se va a borrar y crear nuevamente el array. Es por esto que la declaración del array
    se deja fuera, y dentro solo se va actualizando.
*/