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

// Solution with Pure Recursion
/* 
    Esta es otra solución al problema anterior pero usando la recursividad pura, es decir, sin ayuda de
    una segunda función que envuelva la recursiva.
    Es más complejo que la solución anterior, pero también es válida.
*/
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
collectOddValues([1, 2, 3, 4, 5]);

/* 
    Explanation:
    Como vimos en el ejemplo anterior, la idea de hacer una función por fuera es que cada que se vuelva
    a ejecutar la función recursiva no se pierda el contenido del array y mantenga la info.
    Sin embargo, con pure recursion también es posible hacerlo, aunque es más complejo que el anterior.
    - Lo primero que se hace es crear el array vacío donde se almacenarán los valores impares, el cual
    se vaciará cada vez que la función se ejecute.
    - Después revisa el base case, donde retorna el array generado en caso de ya no tener elementos.
    - La segunda sentencia if revisa si el valor es impar, si lo es, lo añade al array.
    - Y por último, se asigna el valor al nuevo array del resultado de concatenar el array nuevo con el 
    resultado de volver a llamar a la función, pero ahora sin el primer elemento del array original.
*/
