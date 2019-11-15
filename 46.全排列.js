/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [[]];
  for (let i = nums.length - 1; i >= 0; i--) {
    let temp = [];
    for (let seq of result) {
      for (let j = 0; j <= seq.length; j++) {
        let tempSeq = [...seq];
        tempSeq.splice(j, 0, nums[i]);
        temp.push(tempSeq);
      }
    }
    result = [...temp];
  }
  return result;
};
// @lc code=end

