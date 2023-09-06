function findFirstNonRepeatingChar(str) {
  const char_count = {};
  str.split("").forEach((c) => {
    if (!char_count[c]) char_count[c] = 1;
    else char_count[c]++;
  });
  console.log(char_count);
  for (const [key, value] of Object.entries(char_count)) {
    if (value === 1) return key;
  }
}
const t_str = "the quick brown fox jumps then quickly blow air";
console.log("Test string : ", t_str);
console.log("findFirstNonRepeatingChar : ", findFirstNonRepeatingChar(t_str));

function removeDuplicateChar(str) {
  const char_count = {};
  str.split("").forEach((c) => {
    if (!char_count[c]) char_count[c] = 1;
    else char_count[c]++;
  });
  console.log(char_count);
  let output = [];
  for (const [key, value] of Object.entries(char_count)) {
    if (value === 1) output.push(key);
  }
  return output.join("");
}
console.log("removeDuplicateChar : ", removeDuplicateChar(t_str));
