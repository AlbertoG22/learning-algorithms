// ------------------------------ Sliding Window Pattern ----------------------------------------
/* 
    La idea de este patrón es crear una "ventana", la cual puede ser un array o un número de una 
    posición a otra. Dependiendo de una determinada condición, la ventana aumenta o se cierra (y 
    se crea una nueva ventana).
    Este patrón es muy útil para realizar un seguimiento de un subconjunto de datos en un array/string, etc.
    
    Ejemplo:
    Dado el string "hellothere", queremos obtener la mayor secuencia de caracteres únicos existentes
    en ese string. Tendremos los subconjuntos: hel, lother, e.
    Por lo que la secuencia mayor de caracteres únicos es 'lother'.
*/
