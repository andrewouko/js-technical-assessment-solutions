function mergeSorted(a, b){
    console.log("array 1", a, "array 2", b)
    // return array that has values
    if(a.length === 0) return b
    if(b.length === 0) return a

    // result
    const merged = []
    // initial values
    aElm = a[0]
    bElm = b[0]

    // use i to iter arr a
    // use j to iter arr b
    let i = 1, j = 1;
    // as long as there is a value in either arr
    // we iterate
    while(aElm || bElm){
        // console.log(aElm, bElm)
        // if elm exists in first arr and not in second arr
        // or the aElm < bElm we push element from first arr
        // as it is defo smaller
        // increase pointer in first arr
        if((aElm && !bElm) || (aElm < bElm)){
            // console.log("condition 1")
            merged.push(aElm)
            aElm = a[i++]
        }
        // otherwise we push element from second arr
        // and increase pointer in second arr
        else{
            // console.log("condition 2")
            merged.push(bElm)
            bElm = b[j++]
        }
        // console.log("merged", merged)
        // console.log(i, j)
    }
    return merged
}
console.log(mergeSorted([2,5,6,9], [1,2,3,29]))