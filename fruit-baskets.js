/* You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick. */

/* Example 1
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees. */


/* Example 2
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1]. */


/* Example 3
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2]. */


/* function totalFruit(fruits) {
    let max = 0
    for(let i = 0; i < fruits.length; i++) {
        let types = 0
        let picked = []
        let remaining = 0
        for(let j = i; j < fruits.length; j++) {
            if(picked.includes(fruits[j])) picked.push(fruits[j])
            if(!picked.includes(fruits[j]) && types < 2) {
                types++
                picked.push(fruits[j])
            }
            if(types >= 2 && !picked.includes(fruits[j])) break;

        }
        if(picked.length === fruits.length) return fruits.length
        if(picked.length > max) max = picked.length
        remaining = fruits.slice(i).length
        if(max >= remaining) break;
    }
    return max;
}; */

// sliding window algorithm
function totalFruit(fruits) {
    let max = 0
    let start = 0
    let end = 0
    let map = new Map();

    while(end < fruits.length) {
        if(map.size <= 2){
            map.set(fruits[end], (map.get(fruits[end]) || 0) + 1)
            end++
        }
        // reduce the number of fruit at start of current window recursively
        // (code won't go to initial block until map size is 2)
        // until it zero and delete it from map
        // this remove elements from the map until there are only two distinct fruitss in the map
        // then move window to the right i.e. start + 1
        if(map.size > 2){
            map.set(fruits[start], map.get(fruits[start]) - 1)
            if(map.get(fruits[start]) === 0){
                map.delete(fruits[start])
            }
            start++
        }
        // end - start =  fruits in current window
        // although we count from start to end inclusive (including end)
        // we don't add 1
        // as our end in this case already has 1 added to due increment in first if
        max = Math.max(max, end - start);
    }
    return max
}

// console.log(totalFruit([1,2,1]))

// console.log(totalFruit([1,1,2,3,2]))

console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))