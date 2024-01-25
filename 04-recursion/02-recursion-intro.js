// ------------------------------------- Recursividad ----------------------------------------------
/* 
    La recursividad es un proceso en el que una función se llama a sí misma a sí misma, pero con dife-
    rente input cada vez y hasta que se llega a un base case.
    Por lo tanto, dos elementos clave para la recursividad son:
        * Base case (condición donde termina).
        * Input diferente.
    
*/

// Ejemplo:
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