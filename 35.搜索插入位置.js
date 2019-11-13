/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // let i = 0;
  // for(; i < nums.length; i++) {
  //   if (nums[i] === target) return i;
  //   if (nums[i] > target) return i;
  // }
  // return i;
  if (nums[0] > target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;
  let low = 0, high = nums.length - 1;
  while (low < high) {
    if (nums[low] === target) return low;
    if (nums[high] === target) return high;
    if (low === high - 1) break;
    let middle = ~~((low + high) / 2);
    if (nums[middle] === target) return middle;
    nums[middle] > target ? high = middle : low = middle;
  }
  return high;
};
// @lc code=end

