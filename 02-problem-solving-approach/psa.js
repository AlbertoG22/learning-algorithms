/* 
    Antes de empezar a resolver un problema directamente, debemos primero razonar y entender qué
    es lo que debemos realizar, entender el problema. Hay ciertos pasos que podemos implementar 
    y que nos ayudarán a esto:
        - Paso 1: Understand the Problem
        - Paso 2: Concrete Examples
        - Paso 3: Break it down
        - Paso 4: Solve Or Simplify
        - Paso 5: Look Back and Refactor
*/

// ------------------------ PASO 1: Understand the Problem ------------------------
/* 
    Para entender el problema hay ciertas preguntas que nos podemos hacer (o al entrevistador
    para comprender lo que se nos pide):
        1. Can I restate the problem in my own words?
        2. What are the inputs that go into the problem?
        3. What are the outputs that should come from the solution to the problem?
        4. Can the outputs be determined from the inputs? Do I have enough info to solve the problem?
        5. How should I label the important pieces of data that are a part of the problem?
*/

// ===============================================================================================
//  Problem: Escribe una función que reciba dos números y retorne la suma.
// ===============================================================================================

/* 
    Respuestas:
    1. Implementar una suma.
    2. ¿Qué tan grandes serán los números? ¿Aceptan decimales? ¿Qué pasa si solo se manda un 
    número a la función? O si mandamos más?
    3. ¿Debe ser in integer, float? ¿Qué pasa si mandamos un string? 
    4. ¿Qué pasa si solo pasamos un número? Añadimos 0, undefined o algo en específico? 
    5. En este caso no aplica, pero con problemas complejos esto nos puede ayudar mucho a 
    entenderlo.
*/


// --------------------------- PASO 2: Concrete Examples ---------------------------
/* 
    Una vez que ya se entiende todo el problema, escribamos casos de ejemplo, por ejemplo 
    decir: “para este input, la respuesta debe ser tal”. 
    Algunos puntos importantes en estos ejemplos son los siguientes:
        * Start with simple examples. 
        * Progress to more complex examples.
        * Explore examples with empty inputs. 
        * Explore examples with invalid inputs.
*/

// ===============================================================================================
//  Problem: Escribe una función que tome un string y retorne la cantidad de veces que hay cada 
//  carácter en el string.
// ===============================================================================================

/* 
    ¿Qué pasa en los casos donde se mande lo siguiente?
        - Simple examples:
            "aaaa" 			    → 	{ a:4 }
            "hello" 			→ 	{ h:1, e:1, l:2, o:1 }
        - Complex examples:
            "my phone is 123" 	→ 	{ m:1, y:1, p:1, ' ':3, ... } ** ¿Toma en cuenta el espacio vacío?
            "Hello hi" 			→ 	{ H:1, h:1 } 	    ** ¿Debe ser case sensitive?
        - Empty inputs:
            "" 				    → 	??
        - Invalid inputs:
            [1, 2, 3] 			→ 	??
*/


// --------------------------- PASO 3: Break it down ---------------------------
/* 
    En este paso se refiere a tomar los pasos del problema y describirlos. Debe ser concreto
    y no describir todo, simplemente en términos generales paso a paso.
*/

// ===============================================================================================
//  Problem: Mismo que el caso anterior.
// ===============================================================================================

// Respuesta:
function charCount(str) {
    // 1. make obj to return at end

    // 2. loop over string, for each character...
        // 2.1 if the char is a num/letter and is a key in obj, add one to count
        // 2.2 if the char is a num/letter and is not in obj, add it and set value to 1
        // 2.3 if char is smth else (space, period, etc.), dont' do anything

    // 3. return obj at end
}


// --------------------------- PASO 4: Solve Or Simplify ---------------------------
/* 
    El paso 4 es empezar a crear la solución del problema, o si no sabemos cómo hacerlo, 
    simplificar el problema. Es mejor empezar a resolver y no quedarnos atorados en algo que
    no sabemos cómo resolver.
    
    Simplify se refiere a lo siguiente:
        * Encontrar el centro de la parte difícil de lo que estamos haciendo.
        * Ignorar esa dificultad temporalmente.
        * Escribir una solución simplificada.
        * Incorporar esa dificultad de nuevo.
*/

// ===============================================================================================
//  Problem: Mismo que el caso anterior.
// ===============================================================================================

// Respuesta:
function charCount(str) {
    // 1. make obj to return at end
    let result = {};
    // 2. loop over string, for each character...
    for(let i = 1; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(result[char] > 0) {
            // 2.1 if the char is a num/letter and is a key in obj, add one to count
            result[char]++;
        } else {
            // 2.2 if the char is a num/letter and is not in obj, add it and set value to 1
            result[char] = 1;
        }
        // 2.3 if char is smth else (space, period, etc.), dont' do anything
    }

    // 3. return obj at end
    return result;
}
charCount('Hello wOrld!');

/* 
    En esta parte ya tenemos un 90% del ejercicio, lo que hace falta es diferenciar los caracteres
    alfanuméricos. Suponiendo que no nos acordemos o no sepamos, una opción puede ser recurrir al
    entrevistador y preguntar por una pista o consejo.
*/


// --------------------------- PASO 5: Look Back and Refactor ---------------------------
/* 
    Este paso es una vez que ya se completaron los demás, y cuando ya tenemos una solución 
    completa.
    
    Refactoring questions:
        * Can you check the result?
        * Can you derive the result differently?
        * Can you understand it at a glance?
        * Can you use the result or method for some other problem?
        * Can you improve the performance of your solution?
        * Can you think of other ways to refactor?
        * How have other people solved this problem?
*/

// Solución:
function charCount(str) {
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}
charCount('Hello-wOrld!');

// Solución refactorizada:
function charCount(str) {
    let obj = {};
    for(let char of str) {
        if(/[a-z0-9]/.test(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
charCount('Hello-wOrld!');