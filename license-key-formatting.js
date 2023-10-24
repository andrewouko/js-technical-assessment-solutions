/* You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key. */

/* Example 1
Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed. */

/* Example 2
Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above. */

/* Example 3
Input: s = "2-4A0r7-4k", k = 4
Expected: 24A0-R74K */

/* function licenseKeyFormatting(s, k) {
    const parts = s.toUpperCase().split("-")
    for (let i = 1; i < parts.length; i++) {
        while(parts[i].length < k){
            for(let j = i+1; j < parts.length; j++) {
                const pad = parts[j].slice(0, (k - parts[i].length) + 1)
                parts[i] += pad
                parts[j] = parts[j].replace(pad, "")
                if(parts[j].length === 0){
                    parts.splice(j, 1);
                }
            }
            
        }
    }
    return parts.join(`-`)
};
 */

function licenseKeyFormatting(s, k) {
  // length of first group is either the number characters in each group or the remainder
  // if not evenly divisible
  const formatted = s.toUpperCase().split("-").join("");
  const first_grp_len = formatted.length % k || k;
  const first_grp = formatted.substring(0, first_grp_len);
  let rem_grp = formatted.substring(first_grp_len);
  if (rem_grp.length) {
    const reg = new RegExp(`(.{${k}})`, "g");
    rem_grp = rem_grp.replace(reg, "$1-");
    if (rem_grp.charAt(rem_grp.length - 1) === "-")
      rem_grp = rem_grp.slice(0, -1);
    return `${first_grp}-${rem_grp}`
  }
  return `${first_grp}`;
}

// console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))
// console.log(licenseKeyFormatting("2-5g-3-J", 2))
// console.log(licenseKeyFormatting("2-4A0r7-4k", 4))
console.log(licenseKeyFormatting("r", 1));
