function sumFinder(arr, sum){
    const differences = {}
    let sub
    let res = []
    for(const [index, value] of arr.entries()){
        sub = sum - value
        console.log(differences)
        if(!differences[value])
            differences[sub] = value
        else
            res.push([differences[value], value])
    }
    return res
}
console.log(sumFinder([6,4,3,2,1,7], 9))