/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [[]];
  for (let i = 0; i < nums.length; i++) {
    let temp = [];
    for (let set of result) {
      temp.push([nums[i], ...set]);
    }
    result = [...result, ...temp];
  }
  return result;
};
// @lc code=end

