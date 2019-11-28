/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if (s.length === 0) return [];
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let temp = s.slice(0, i + 1);
    if (temp === [...temp].reverse().join('')) {
      for (let backResult of partition(s.slice(i + 1))) {
        result.push([temp, ...backResult]);
      }
    }
  }
  if (s === [...s].reverse().join('')) result.push([s]);
  return result;
};
// @lc code=end

