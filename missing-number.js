function findMissingNumber(arr){
    // add 1 because of missing number
    const n =  arr.length + 1

    // sum of linear series
    const lin_sum = n * (n+1)/2

    // arr sum
    const sum = arr.reduce((acc, cv, i) => acc + cv, 0)

    console.log("linear sum", lin_sum, "sum", sum)

    return lin_sum - sum
}
console.log("test array", [5, 2, 6, 1, 3])
console.log("Missing number", findMissingNumber([5, 2, 6, 1, 3]));