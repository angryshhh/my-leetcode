/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let result = [[]];
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
      count++;
    }
    let len = result.length;
    for (let j = 0; j < len; j++) {
      let temp = [...result[j]];
      for (let k = 0; k < count; k++) {
        temp.push(nums[i]);
        result.push([...temp]);
      }
    }
  }
  return result;
};
// @lc code=end

