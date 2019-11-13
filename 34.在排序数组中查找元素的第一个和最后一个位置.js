/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
  // let first = 0, last = nums.length - 1;
  // if (last === -1) return [-1, -1];
  // if (first === last && nums[first] !== target) return [-1, -1];
  // let i = 0;
  // while (first < last - 1) {
  //   let middle = ~~((first + last) / 2);
  //   if (nums[middle] < target) {
  //     first = middle;
  //   } else if (nums[middle] > target) {
  //     last = middle;
  //   } else {
  //     break;
  //   }
  // }
  // if (first === last - 1 && (nums[first] !== target && nums[last] !== target)) {
  //   return [-1, -1]
  // }
  // while (nums[first] < target) first++;
  // while (nums[last] > target) last--;
  // return [first, last];
};
// @lc code=end

