//                                   BigO of Arrays
/* 
    Los arrays son buenos cuando:
    - se necesita tener un orden,
    - se necesita rápido acceso, insertar o remover elementos.
        * Insertion     - It depends...
        * Removal       - It depends...
        * Searching     - O(n)
        * Access        - O(1)

    Nota: no importa lo grande que sea el array, acceder a un elemento siempre será constante O(1),
    JS no va por cada elemento hasta encontrar el objetivo. Al tener el índice, se dirige inme-
    diátamente al dato.

    - Insertion: "depende" porque cuando se añade un elemento al final del array es O(1), pero si
    lo añadimos al inicio, esto genera que todos los elementos existentes tengan que actualizar
    su índice --> O(n).

    - Removal: lo mismo pasa al remover, al final no hay problema, cuando es al inicio se deberán
    actualizar todos los índices.

    - Searching: cuando queremos buscar si un elemento está en un array, se debe recorrer uno a
    uno para encontrarlo, por eso es O(n)
*/