function sawToothSequenceSolution(arr){
    console.log('array', arr)
    // stores the count of strictly increasing subarrays
    let count = 0;
    const n = arr.length;
 
    // consider all subarrays `arr[i, j]` starting from index `i`
    // and ending at index `j`
    let sub_arrs = []
    for (let i = 0; i < n -1; i++)
    {
        // subarrays containing two elements
        const sub_arr = arr.slice(i, (i + 2))
        sub_arrs.push(sub_arr)
        console.log("sub arrays", sub_arrs)



        // for (let j = i + 1; j < n; j++)
        // {
        //     /* // if the previous element is not less than the current element,
        //     // then subarray `arr[i, j]` is not strictly increasing
        //     if (arr[j - 1] >= arr[j])
        //     {
        //         // don't consider index from `j+1` onwards
        //         break;
        //     }
 
        //     // if subarray `arr[i, j]` is strictly increasing,
        //     // increment the total count

        //     // if the previous element is not less than the current element,
        //     // then subarray `arr[i, j]` is not strictly increasing
        //     if (arr[j - 1] >= arr[j])
        //     {
        //         // don't consider index from `j+1` onwards
        //         break;
        //     }
        //     ++count; */

        //     /* // subarray
        //     const sub_arr = arr.slice(i, (j+1))
        //     console.log('sub array', sub_arr)

        //     const is_sawtooth = sub_arr.every((v, i) => {
        //         // console.log(v, sub_arr[i + 1])
        //         return v != sub_arr[i + 1]
        //     })
        //     console.log('is sawtooth', is_sawtooth)
        //     if(is_sawtooth) count++; */

            

        // }
    }
 
    // return the count of strictly increasing subarrays
    console.log(count)
    return count;
}

sawToothSequenceSolution([9, 8, 7, 6, 5])
sawToothSequenceSolution([10, 10, 10])
sawToothSequenceSolution([1, 2, 1, 2, 1])