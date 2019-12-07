/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let sMap = {}, tMap = {};
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i], tChar = t[i];
    if (!sMap[sChar]) sMap[sChar] = tChar;
    if (sMap[sChar] !== tChar) return false;
    if (!tMap[tChar]) tMap[tChar] = sChar;
    if (tMap[tChar] !== sChar) return false;
  }
  return true;
};
// @lc code=end

