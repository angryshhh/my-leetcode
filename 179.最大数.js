/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  let result = nums.sort((a, b) => 
    parseInt(b.toString() + a.toString()) -
    parseInt(a.toString() + b.toString())
  ).join('');
  if (result[0] === '0') return '0';
  return result;
};
// @lc code=end

