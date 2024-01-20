// ------------------------------ Average Pair Challenge ----------------------------------------
/* 
    Problema:   
    Dado un array de números enteros y un número (n), escriba una función llamada 'maxSubarraySum', 
    que encuentre la suma máxima de un subarray con la longitud del número pasado (n).
    Tenga en cuenta que un subarray debe constar de elementos CONSECUTIVOS del array original. 
    En el primer ejemplo de abajo ↓, [100, 200, 300] es un subarray del original, pero [100, 300] 
    no lo es.
    - Solución debe ser: 
        * Time - O(n).
        * Space - O(1)

    Output:
    maxSubarraySum([100,200,300,400], 2); // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4);  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2); // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2); // 5
    maxSubarraySum([2,3], 3); // null
*/

// ---------------- Mi solución ----------------
function maxSubarraySum(arr, num) {
    if(arr.length < num) return null;
    let tempSum = 0;
    let maxSum = 0;
    for(let i = 0; i < num; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if(tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}
maxSubarraySum([100,200,300,400], 2); // 700