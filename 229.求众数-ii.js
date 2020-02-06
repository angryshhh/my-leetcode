/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let floor = ~~(nums.length / 3);
  let result = [];
  let count = {};
  for (let num of nums) {
    if (count[num] > 0) count[num]++;
    else if (count[num] === 0) continue;
    else count[num] = 1;

    if (count[num] > floor) {
      result.push(num);
      count[num] = 0;
    }
    if (result.length === 2) break;
  }
  return result;
};
// @lc code=end

