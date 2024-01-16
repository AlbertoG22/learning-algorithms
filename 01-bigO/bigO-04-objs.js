//                           BigO of Objects
/* 
    Los objetos son buenos cuando:
    - no se necesita tener un orden,
    - se necesita acceder, insertar o remover elementos de forma rápida.
        * Insertion     - O(1)
        * Removal       - O(1)
        * Searching     - O(n)
        * Access        - O(1)
    
    - BigO Object Methods:
        * Object.keys       - O(n)
        * Object.values     - O(n)
        * Object.entries    - O(n)
        * hasOwnProperty    - O(1)
*/

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

// O(n) ↓
Object.keys(instructor); // ['firstName', 'isInstructor', 'favoriteNumbers']

// O(n) ↓
Object.entries(instructor); // [Array(2), Array(2), Array(2)]

// O(n) ↓
Object.values(instructor); // ['Kelly', true, Array(4)]

// O(1) ↓
instructor.hasOwnProperty("firstName"); // true