/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (n < k) return [];
  if (k === 0) return [];
  let result = [];
  for (let i = 1; i <= n - k + 1; i++) {
    let temp = combine(n - i, k - 1);
    if (temp.length === 0) result.push([i]);
    else {
      for (let comb of temp) {
        result.push([i, ...comb.map(value => value + i)]);
      }
    }
  }
  return result;
};
// @lc code=end

