/* Binary search
const nums = [-1, 0, 3, 5, 9, 12];
const target1 = 9; // Target exists in the array
const target2 = 2; // Target does not exist in the array

Expected output
binarySearch(nums, target1) should return 4
binarySearch(nums, target2) should return -1 */

/**
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - Target value to search for
 * @return {number} - Index of the target if found, otherwise -1
 */
function binarySearch(nums, target) {
  let left = 0, right = nums.length - 1;
  while(left <= right) {
    const mid = Math.floor((right + left)/2);
    if(target === nums[mid]) return mid;

    if(target > nums[mid]){
        left = mid + 1;
    }
    if(target < nums[mid]){
        right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));