// ---------------------------------- Call Stack ------------------------------------------------
/* 
    En casi todos los lenguajes de programación, hay una estructura de datos integrada, la cual es 
    la que maneja qué es lo que pasa cuando las funciones son invocadas. 
    Es decir, que las funciones se ejecuten correctamente en el orden que deberían hacerlo, por 
    ejemplo, si una función llama a otra dentro de ella, necesita de ésta última para poder terminar
    de ejecutarse, y no solo se ejecuten aleatoriamente las funciones.

    En JavaScript esta estructura de datos se llama Call Stack:
        1. Cuando se llama a una función, se coloca (pushed) en el top del Call Stack.
        2. Cuando JS ve la palabra 'return' o la función termina, el compilador la remueve (pop) de 
        la pila.
*/
