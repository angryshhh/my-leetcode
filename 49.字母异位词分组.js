/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let result = {};
  for (let str of strs) {
    let key = [...str].sort().join('');
    if (!result[key]) result[key] = [str];
    else result[key].push(str);
  }
  return Object.values(result);
};
// @lc code=end

