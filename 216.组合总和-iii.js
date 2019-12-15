/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  if (k === 0 || n === 0) return [];
  if (k === 1 && n <= 9) return [[n]];
  let result = [];
  for (let i = 1; i <= 9; i++) {
    if (i * k > n) break;
    let backResult = combinationSum3(k - 1, n - i * k);
    for (let arr of backResult) {
      let temp = [];
      for (let x of arr) {
        if (x + i > 9) {
          temp = [];
          break;
        }
        temp.push(x + i);
      }
      if (temp.length){
        result.push([i, ...temp]);
      }
    }
  }
  return result;
};
// @lc code=end

