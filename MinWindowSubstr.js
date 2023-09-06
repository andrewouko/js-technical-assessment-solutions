function MinWindowSubstring(strArr){
    const src = strArr[0]
    const sub = strArr[1]
    
    // map of substring characters
    const hash = {}
    for(let i = 0; i < sub.length; i++){
        let c = sub[i]
        hash[c] = (hash[c] || 0) + 1
    }
    console.log('hash',hash)

    // unique chars in substr
    let count = Object.keys(hash).length
    console.log('count',count)

    // pointers to track substring lens
    let left = 0, right = src.length

    // min len of substr
    let min_len = src.length

    // bool to check if substr found
    let found = false

    // loop pointers
    let i = 0, j = 0;
    while(j < src.length){
        // grab character and increment
        let cEnd = src[j]
        j++;
        console.log('cEnd',cEnd)

        // if character exists in map
        // reduce its count
        // if reduced count is zero
        // reduce unique characters count value
        // to indicate we are done with a particular char
        if(cEnd in hash){
            --hash[cEnd]
            if(hash[cEnd] == 0) --count
            console.log('hash count', hash, count)
        }

        console.log('count', count)
        // since we are not done with all unique chars
        // we proceed to next iteration and try reduce count to 0
        if(count > 0) continue;

        // we are done with all chars in substr
        // now do the opposite of previous operation to increase counts
        // if value at current i position exists
        // increment its count on map
        // also increase the overall unique character to 1
        // if its zero
        while(count == 0){
            // grab character and increment
            let cStart = src[i]
            i++;
            console.log('cStart', cStart)
            if(cStart in hash){
                ++hash[cStart]
                if(hash[cStart] > 0) ++count
                console.log('hash count', hash, count)
            }
        }

        // if j and i are less than min len
        // keep track of positions
        // reduce min_len
        // update bool value to true
        // as we found a substr
        if((j - i) < min_len){
            left = i
            right = j
            min_len =  j - i
            found = true
        }
    }
    if(found) return src.substr(left - 1, right)
    return 'none'
}

console.log(MinWindowSubstring(["adobecodebanc", "abc"]))