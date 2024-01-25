// ---------------------------- Find Longest Substring Challenge ----------------------------------------
/* 
    Problema:   
    Escriba una función llamada 'findLongestSubstring', que acepte un string y devuelva la longitud 
    del substring más largo con todos los caracteres distintos.
    - Solución debe ser: 
        * Time - O(n).

    Output:
    findLongestSubstring(''); // 0
    findLongestSubstring('rithmschool'); // 7
    findLongestSubstring('bbbbbb'); // 1
    findLongestSubstring('thisishowwedoit'); // 6

    findLongestSubstring('thisisawesome'); // 6  --> yo digo que es 5
    findLongestSubstring('thecatinthehat'); // 7  --> yo digo que es 5
    findLongestSubstring('longestsubstring'); // 8  --> yo digo que es 7
*/

function findLongestSubstring(str){
    if(str.length === 0) return 0;

    let tempStr = `${str[0]}`;
    let maxSubstr = 1;
    let tempSubstr = 1;

    for(let i = 1; i < str.length; i++) {
        let letter = str[i];

        if(!(tempStr.includes(letter))) {
            tempStr += str[i];
            tempSubstr++;
        }
        else {
            tempStr = letter;
            tempSubstr = 1;
        }
        if(tempSubstr > maxSubstr) maxSubstr = tempSubstr;
    }
    return maxSubstr;
}
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('rithmschool'); // 7