// ------------------------------------- Recursividad ----------------------------------------------
/* 
    La recursividad es un proceso en el que una función se llama a sí misma a sí misma, pero con dife-
    rente input cada vez y hasta que se llega a un base case.
    Por lo tanto, dos elementos clave para la recursividad son:
        * Base case (condición donde termina).
        * Input diferente.
    
*/

// Ejemplo 1:
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3);

// console.log(3);
// countDown(2);
// console.log(2);
// countDown(1);
// console.log(1);
// countDown(0);
// countDown("All done!");

/* 
    Explanation:
    - Cuando mandamos llamar la función con el argumento "3", lo que primero se hace es preguntar si el
    número que se pasó es menor o igual que 0.
    - De no serlo, se imprime en consola, se resta 1 y se vuelve a llamar a sí misma pero con el input
    diferente.
    - Y así sucesivamente hasta que se le manda el valor 0 y entra en el base case, en donde termina 
    la ejecución de la función.

    Importante: En este caso debemos tener un 'return' para finalizar la ejecución de la función, caso
    contrario, se continuaría llamando ahora con valores negativos, creando un loop infinito. 
*/


// Ejemplo 2:
function sumRange(num){
    if(num === 1) return 1; 
    return num + sumRange(num-1);
}
sumRange(4); // 10

/* 
    return 4    +   sumRange(3)
                        return 3    +   sumRange(2)
                                            return 2    +   sumRange(1)
                                                                return 1 
*/

// Una vez que llegó al base case, se empieza a resolver hacia atrás las llamadas a la función:
/* 
    return 10
    return 4    +       6
                    return 3    +     3
                                    return 2    +       1
                                                    return 1
*/

/* 
    Explanation:
    - Lo primero que pasa al llamara a la función es preguntar si el valor que se le pasó es igual a 1,
    si no, inicia la recursión.
    - La primera vez que se llama, retorna el número que se le pasó + el resultado de llamar a sí misa
    pero con un valor menos. 
    - Este proceso de llamar al resultado de llamar otra vez la función hace que tengamos llamadas 
    esperando por ser resueltas.
    - Esto se detiene hasta que el valor es 1, lo que resuelve "sumRange(1)", y al resolverse esta, se
    empiezan a resolver las demás hasta llegar a la primera y retornar la solución (10);
*/