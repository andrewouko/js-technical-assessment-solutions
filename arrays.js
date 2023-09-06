// array sort
const array1 = [1, 30, 4, 21, 100000];
console.log("array1", array1)
console.log("actual sort", array1.sort())
console.log("desired sort", array1.sort((a, b) => {
    // if a comes before b
    if(a - b < 0) return -1
    // if a comes after b
    if(a - b > 0) return 1
    // if a and b are equal
    if(a - b === 0) return 0
}))
console.log("desired reverse sort", array1.sort((a, b) => b - a))


// array splice
console.log("array1", array1)
array1.splice(2, 0, 1992)
console.log("insert element before index 2", array1)
array1.splice(2, 1)
console.log("delete element at index 2", array1)
array1.splice(0, 2, ...[1992, 1996])
console.log("remove 2 elements from index 0 and insert two new ones", array1)