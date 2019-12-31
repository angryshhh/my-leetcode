/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let result = [];
  let start = nums[0];
  let end = start;
  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== end + 1) {
      if (start === end) result.push('' + start);
      else result.push(`${start}->${end}`);
      if (i !== nums.length) {
        start = nums[i];
        end = start;
      }
    } else {
      end++;
    }
  }
  return result;
};
// @lc code=end

