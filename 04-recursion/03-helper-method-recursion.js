// ------------------------------ Helper Method Recursion ----------------------------------------
/* 
    El Helper Method Recursion es un patrón de diseño comúnmente utilizado con recursión. Hasta ahora, 
    todas las funciones recursivas que hemos visto son funciones independientes e individuales, es 
    decir, una función que al ejecutarse, se llama a sí misma.
    Con este nuevo método es un poco diferente. Se tienen dos funciones: la normal y dentro de esta 
    hay otra, la función recursiva.
    Esto se hace comúnmente cuando necesitamos compilar algo como un array o una lista de datos.
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