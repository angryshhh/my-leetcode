/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  for (let value of candidates) {
    if (value > target) continue;
    if (value === target) {
      result.push([value]);
    } else {
      let deepResult = combinationSum(candidates, target - value);
      if (deepResult.length === 0) continue;
      for (let solve of deepResult) {
        if (solve[0] >= value) {  // 去重
          result.push([value, ...solve]);
        }
      }
    }
  }  
  return result;
};
// @lc code=end

