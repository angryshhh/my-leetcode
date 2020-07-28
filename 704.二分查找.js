/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return nums.indexOf(target);

  // if (nums.length === 0) return -1;
  // if (nums.length === 1) {
  //   if (nums[0] === target) return 0;
  //   else return -1;
  // }

  // let head = 0, tail = nums.length - 1;
  // while (head < tail) {
  //   if (nums[head] === target) return head;
  //   if (nums[tail] === target) return tail;
  //   let half = ~~((head + tail) / 2);
  //   if (nums[half] === target) return half;
  //   if (nums[half] < target) head = half + 1;
  //   else tail = half - 1;
  // }
  // return -1;
};
// @lc code=end

