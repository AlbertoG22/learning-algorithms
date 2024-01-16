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