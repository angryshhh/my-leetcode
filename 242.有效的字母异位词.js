/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sArray = [...s].sort(), tArray = [...t].sort();
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== tArray[i]) return false;
  }
  return s.length === t.length;
};
// @lc code=end

