// Given a string s, return the length of the longest repeating substrings. If no repeating substring exists, return 0.

// Example 1:

// Input: s = "abcd"
// Output: 0
// Explanation: There is no repeating substring.
// Example 2:

// Input: s = "abbaba"
// Output: 2
// Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice.
// Example 3:

// Input: s = "aabcaabdaab"
// Output: 3
// Explanation: The longest repeating substring is "aab", which occurs 3 times.

// using arrays
// function longestRepeatingSubstring(s){
//     let substr = "";
//     const map = new Map();
//     let maxLength = 0;
//     let maxCount = 0;

//     /**
//      * STEP ONE
//      *
//      * Generate all possible 2+ char substrings of the given string using sliding window
//      *
//      * If the substring appears more than once, then we get its length
//      * Compare the length with the current max length to get the new max length
//      *
//      * At this point we can also calculate the max count
//      * Compare the current count of the substring in the map to the max count to get the new max count
//      */
//     for(let i = 0; i < s.length; i++){
//         for(let j = i + 2; j <= s.length; j++){
//             substr = s.slice(i, j);
//             map.set(substr, (map.get(substr) || 0) + 1);
//             if(map.get(substr) > 1){
//                 maxLength = Math.max(maxLength, substr.length);
//                 maxCount = Math.max(maxCount, map.get(substr));
//             }
//         }
//     }
//     return maxCount;

//     // /**
//     //  * STEP TWO`
//     //  *      *
//     //  * Create a map of the the longest substring
//     //  *
//     //  *
//     //  * Might not be necessary, but it just shows we can generate a map of the longest repeating substrings and their counts
//     //  */

//     // const longestRepeatingSubstrings = new Map();

//     // for(const [substr, count] of map){
//     //     if(substr.length === maxLength && count > 1){
//     //         longestRepeatingSubstrings.set(substr, count);
//     //     }
//     // }
//     // return longestRepeatingSubstrings
// }

// // using suffix array instead
// // NB:// will not work for
// // aabcaabdaab
// function longestRepeatingSubstring(s){
//     /**
//      * STEP ONE
//      *
//      *
//      *
//      * Create suffix array
//      * 1. init arrays with length of string s
//      * 2. create comparison function
//      * 3. sort string s using the suffix array indices
//      *      a. a < b, a > b, a++, b++, a === n , b === n, 0
//      *
//      *
//      * E.g suffix array of banana
//      * a
//      * anana
//      * ana
//      * banana
//      * nana
//      * n
//      *
//      */
//     const suffix_array = Array(s.length);
//     const original = Array(s.length);

//     for(let i = 0; i < s.length; i++){
//         original[i] = i
//         suffix_array[i] = i;
//     }
//     const compare_fn = (a, b) => {
//         if(s[a] < s[b]) return -1;
//         if(s[a] > s[b]) return 1;
//         a++
//         b++
//         // a is smaller than b
//         if(a === s.length) return -1;
//         // a is larger than b
//         if(b === s.length) return 1;
//         // equal
//         return 0;
//     };
//     // console.log(suffix_array.sort((a, b) => s[a].localeCompare(s[b])))

//     suffix_array.sort(compare_fn);

//     /**
//      * STEP TWO
//      *
//      * Find the longest common prefix
//      *
//      *
//      * 1. generate suffixes using the indexes of the suffix array from i to length
//      * 2. if characters in indexes update the max substring length and max substring
//      */

//     let maxLen = 0; // Maximum common prefix length
//     let maxSubstring = ''; // Longest repeating substring
//     const maxSubstringMap = {}; // map of longest repeated substrings and their counts

//     console.log(suffix_array)

//     for (let i = 0; i < suffix_array.length; i++) {
//         const suffix1 = s.substring(suffix_array[i]);
//         const suffix2 = s.substring(suffix_array[i + 1]);

//         console.log(suffix1, suffix2)

//         let common_prefix_len = 0;
//         while(common_prefix_len < suffix1.length && common_prefix_len < suffix2.length && suffix1[common_prefix_len] === suffix2[common_prefix_len]) {
//             common_prefix_len++;
//         }

//         // console.log('cmn prefix len', common_prefix_len)

//         if(common_prefix_len >= maxLen && common_prefix_len > 1){
//             maxLen = common_prefix_len;
//             maxSubstring = s.substring(suffix_array[i], suffix_array[i] + common_prefix_len);
//             maxSubstringMap[maxSubstring] = (maxSubstringMap[maxSubstring] || 0) + 1
//         }
//     }
//     return maxSubstringMap
// }

// Using a binary search opeation to divide and conquer
// reduces time complexity to O(N log N)
// function longestRepeatingSubstring(s) {
//   // check if a substring of a given length
//   // appears more than once in s
//   const search = (substring_length) => {
//     let substr = "";
//     const set = new Set();
//     for (let i = 0; i + substring_len < s.length; i++) {
//       substr = s.slice(i, i + substring_length);
//       if (set.has(substr)) return i;
//       set.add(substr);
//     }
//     return -1;
//   };

//   // binary search algorithm
//   let left = 0,
//     right = s.length - 1,
//     max_len = 0,
//     substring_len = -1;
//   // let j = 1;
//   while (left <= right) {
//     // mid point represents the length of the substrings we will search
//     substring_len = Math.floor((right + left) / 2);
//     // if we find a repeating substring
//     if (search(substring_len) !== -1) {
//       // increase the left index to search for longer substrings
//       left = substring_len + 1;
//     }
//     // if we don't find a repeating substring
//     else {
//       // reduce the right index to find shorter substrings
//       right = substring_len - 1;
//     }
//     // j++;
//   }
//   //   console.log(j)
//   return right;
// }

// using a sliding window
// brute force approach
function longestRepeatingSubstring(s){
  let maxLen = 0;
  for(let i = 0; i < s.length; i++){
    let substr = ""
    let end = i
    while(end < s.length){
      substr += s[end];
      let curr_substr_pos = s.indexOf(substr, 0)
      if(curr_substr_pos > -1 && s.indexOf(substr, curr_substr_pos + 1) > -1){
        maxLen = Math.max(maxLen, substr.length)
      }
      end++;
    }
  }
  return maxLen
}


console.log(longestRepeatingSubstring("banana"));

// console.log(longestRepeatingSubstring("abbaba"));

// console.log(longestRepeatingSubstring("aabcaabdaab"));

// console.log(longestRepeatingSubstring("aaabaabbbaaabaabbaabbbabbbaaaabbaaaaaabbbaabbbbbbbbbaaaabbabbaba"))

// console.log(longestRepeatingSubstring("aaaaa"))
