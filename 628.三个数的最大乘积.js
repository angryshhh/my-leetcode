/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let maxThree = [], minTwo = [];
  for (let i = 0; i < nums.length; i++) {
    maxThree.push(nums[i]);
    maxThree.sort((a, b) => b - a);
    if (maxThree.length === 4) {
      maxThree.pop()
    }
    minTwo.push(nums[i]);
    minTwo.sort((a, b) => a - b);
    if (minTwo.length === 3) {
      minTwo.pop();
    }
  }
  console.log(maxThree, minTwo)
  return Math.max(maxThree[0] * maxThree[1] * maxThree[2],
    minTwo[0] * minTwo[1] * maxThree[0]);
};
// @lc code=end

