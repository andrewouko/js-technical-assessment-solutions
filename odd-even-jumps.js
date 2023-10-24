/* You are given an integer array arr. From some starting index, you can make a series of jumps. The (1st, 3rd, 5th, ...) jumps in the series are called odd-numbered jumps, and the (2nd, 4th, 6th, ...) jumps in the series are called even-numbered jumps. Note that the jumps are numbered, not the indices.

You may jump forward from index i to index j (with i < j) in the following way:

During odd-numbered jumps (i.e., jumps 1, 3, 5, ...), you jump to the index j such that arr[i] <= arr[j] and arr[j] is the smallest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
During even-numbered jumps (i.e., jumps 2, 4, 6, ...), you jump to the index j such that arr[i] >= arr[j] and arr[j] is the largest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
It may be the case that for some index i, there are no legal jumps.
A starting index is good if, starting from that index, you can reach the end of the array (index arr.length - 1) by jumping some number of times (possibly 0 or more than once).

Return the number of good starting indices. */

/* Example
Input: arr = [10,13,12,14,15]
Output: 2
Explanation: 
From starting index i = 0, we can make our 1st jump to i = 2 (since arr[2] is the smallest among arr[1], arr[2], arr[3], arr[4] that is greater or equal to arr[0]), then we cannot jump any more.
From starting index i = 1 and i = 2, we can make our 1st jump to i = 3, then we cannot jump any more.
From starting index i = 3, we can make our 1st jump to i = 4, so we have reached the end.
From starting index i = 4, we have reached the end already.
In total, there are 2 different starting indices i = 3 and i = 4, where we can reach the end with some number of
jumps. */

/* Example 2
Input: arr = [2,3,1,1,4]
Output: 3
Explanation: 
From starting index i = 0, we make jumps to i = 1, i = 2, i = 3:
During our 1st jump (odd-numbered), we first jump to i = 1 because arr[1] is the smallest value in [arr[1], arr[2], arr[3], arr[4]] that is greater than or equal to arr[0].
During our 2nd jump (even-numbered), we jump from i = 1 to i = 2 because arr[2] is the largest value in [arr[2], arr[3], arr[4]] that is less than or equal to arr[1]. arr[3] is also the largest value, but 2 is a smaller index, so we can only jump to i = 2 and not i = 3
During our 3rd jump (odd-numbered), we jump from i = 2 to i = 3 because arr[3] is the smallest value in [arr[3], arr[4]] that is greater than or equal to arr[2].
We can't jump from i = 3 to i = 4, so the starting index i = 0 is not good.
In a similar manner, we can deduce that:
From starting index i = 1, we jump to i = 4, so we reach the end.
From starting index i = 2, we jump to i = 3, and then we can't jump anymore.
From starting index i = 3, we jump to i = 4, so we reach the end.
From starting index i = 4, we are already at the end.
In total, there are 3 different starting indices i = 1, i = 3, and i = 4, where we can reach the end with some
number of jumps. */

// function findNextIndex(condition, cmp_val, start, arr) {
//     // Conditionally set initial result value based on the condition
//   let result_val =
//     condition === "largest"
//       ? Number.NEGATIVE_INFINITY
//       : Number.POSITIVE_INFINITY;
//   let result_index = null;
//   let comparison;
//   for (let j = start; j < arr.length; j++) {
//     comparison =
//       condition === "largest"
//         ? cmp_val >= arr[j] && arr[j] > result_val
//         : cmp_val <= arr[j] && arr[j] < result_val;
//     if (comparison) {
//       result_index = j;
//       result_val = arr[j];
//     }
//   }
//   return result_index;
// }

// function canReachEnd(starting_index, arr) {
//   // we are already at the end of the array
//   if (starting_index === arr.length - 1) return true;

//   let jump_count = 1;
//   let i = starting_index;
//   let next_index = 0;

//   while (i < arr.length) {
//     // handle logic to find next index
//     const condition = jump_count % 2 === 0 ? "largest" : "smallest";
//     next_index = findNextIndex(condition, arr[i], i + 1, arr);
//     // determine what to return based on next_index
//     if (next_index === null || next_index === arr.length - 1) {
//       // returns true if at end of arr
//       // or false otherwise
//       return next_index === arr.length - 1;
//     }
//     jump_count++;
//     i = next_index;
//   }
//   return false;
// }

// function countGoodStartingIndices(arr) {
//   let good_starting_indices = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (canReachEnd(i, arr)) good_starting_indices++;
//   }
//   return good_starting_indices;
// }
function findNextIndex(arr, start, condition) {
  let res_val =
    condition === "smallest"
      ? Number.POSITIVE_INFINITY
      : Number.NEGATIVE_INFINITY;
  let res_index = -1;
  for (let i = start + 1; i < arr.length; i++) {
    if (
      (condition === "smallest" && arr[start] <= arr[i] && arr[i] < res_val) ||
      (condition === "largest" && arr[start] >= arr[i] && arr[i] > res_val)
    ) {
      res_val = arr[i];
      res_index = i;
    }
  }
  return res_index;
}
function canReachEnd(index, arr) {
  if (index === arr.length - 1) return true;
  let jump_count = 1,
    start = index,
    condition = "smallest",
    next_index = null;
  while (start < arr.length) {
    condition = jump_count % 2 !== 0? "smallest" : "largest";
    next_index = findNextIndex(arr, start, condition);
    if (next_index === -1 || next_index === arr.length - 1) {
      return next_index === arr.length - 1;
    }
    jump_count++;
    start = next_index;
  }
  return false;
}
function countGoodStartingIndices(arr) {
  let good_starting_indices = 0;
  for (let i = 0; i < arr.length; i++) {
    if (canReachEnd(i, arr)) good_starting_indices++;
  }
  return good_starting_indices;
}

console.log(countGoodStartingIndices([10, 13, 12, 14, 15]));

console.log(countGoodStartingIndices([2, 3, 1, 1, 4]));
