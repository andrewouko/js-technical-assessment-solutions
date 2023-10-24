/* Given a string s, find the length of the longest substring without repeating characters.

Example 1
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


Example 2
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring */

// uses a sliding window technique
function lengthOfSubstring(s) {
    let map = new Map();
    let start = 0;
    let longestSubstr = "";
    for(let end = 0; end < s.length; end++){
        let current_char = s[end];
        // update the start index if current char has been seen before
        if(map.has(current_char))
            start = map.get(current_char) + 1;
        // last seen index of char in string
        map.set(current_char, end);
        // update longest substring
        if((end - start + 1) > longestSubstr.length){
            longestSubstr = s.slice(start, end + 1);
        }
    }
    return longestSubstr.length;
}

console.log(lengthOfSubstring("abcabcbb"))
console.log(lengthOfSubstring("pwwkew"))