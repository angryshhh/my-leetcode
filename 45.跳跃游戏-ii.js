/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 超时了
var jump = function(nums) {
  let len = nums.length;
  if (len === 1) return 0;
  let steps = new Array(len).fill(len);
  steps[0] = 0;
  for (let i = 0; i < len - 1; i++) {
    let step = steps[i]
    let stepSize = nums[i]
    for (let j = 1; j <= stepSize && i + j < len; j++) {
      if (steps[i + j] > step + 1) steps[i + j] = step + 1;
      if (i + j === len - 1) break;
    }
  }
  return steps[len - 1];
};
// @lc code=end

