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
countDown(5);