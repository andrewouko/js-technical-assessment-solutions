function removeDuplicates(arr){
    const exists = {}
    arr.forEach((element, index) => {
        if(!exists[element]){
            exists[element] = index
        }
    });
    return Object.keys(exists)
}
console.log(removeDuplicates([1,3,3,3,1,5,6,7,8,1]))