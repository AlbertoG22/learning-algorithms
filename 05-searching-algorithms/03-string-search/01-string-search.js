// ------------------------------- String Search Challenge -------------------------------------------
/* 
    Problema:
    La idea de este problema es crear la naive solution de buscar por un string. La idea es crear una
    función que reciba dos strings, en el cual, busquemos la presencia del segundo sobre el primero. 
    Ejemplo: tenemos los strings 'wowomgzomg' y 'omg', debemos buscar la cantidad de veces que 'omg' 
    está presente sobre el primer string y retornar el número.

    Pasos:
    - Hacer un ciclo sobre el string largo.
    - Hacer un ciclo anidado para recorrer el string corto.
    - Si los caracteres no coinciden, sal del inner loop.
    - Si los caracteres coinciden, continuar.
    - Si completa el inner loop y encuentra coincidencias, incrementa count.
    - Retornar 'count'.
*/