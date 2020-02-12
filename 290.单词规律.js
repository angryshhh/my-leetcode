/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let p = [...pattern];
    let s = str.split(' ');
    if (p.length !== s.length) return false;
    let pMap = {};
    let sMap = {};
    for (let i = 0; i < s.length; i++) {
      if (pMap[p[i]] === undefined) {
        pMap[p[i]] = i;
      }
      if (sMap[s[i]] === undefined) {
        sMap[s[i]] = i;
      }
      if (pMap[p[i]] !== sMap[s[i]]) return false;
    }
    return true;
};
// @lc code=end

