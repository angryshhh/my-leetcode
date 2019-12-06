/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // Your runtime beats 31 % of javascript submissions
  // Your memory usage beats 39.15 % of javascript submissions (35.3 MB)
  // for (let i = 0; i < k; i++) {
    // nums.unshift(nums.pop());
  // }

  // Your runtime beats 93.65 % of javascript submissions
  // Your memory usage beats 6.61 % of javascript submissions (36.3 MB)
  // let len = nums.length;
  // k %= len;
  // nums.splice(len, 0, ...nums.slice(0, len - k));
  // nums.splice(0, len - k);

  // our runtime beats 99.18 % of javascript submissions
  // Your memory usage beats 78.77 % of javascript submissions (35.1 MB)
  k %= nums.length;
  nums.unshift(...nums.splice(-k, k));
};
// @lc code=end

