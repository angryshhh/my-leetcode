/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  // let len = nums.length;
  // while (true) {
  //   let obj = {};
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     const value = nums[i];
  //     if (value > 0 && value <= len) {
  //       if (!obj[value]) {
  //         obj[value] = 1;
  //         count++;
  //       }
  //     }
  //   }
  //   if (len === count) break;
  //   len = count;
  // }
  // return len + 1;
  let obj = {}, len = nums.length;
  for (let i = 0; i < len; i++) {
    let val = nums[i];
    if (val > 0) obj[val] = 1;
  }
  let i = 1;
  while (obj[i++]);
  return i - 1;
}
// @lc code=end

