/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (result.indexOf(s[i]) > -1) continue;

    while (result.length) {
      let char = result.pop();
      if (char < s[i] || s.indexOf(char, i) === -1) {
        result.push(char);
        break;
      }
    }
    result.push(s[i]);
  }
  return result.join('');
};
// @lc code=end

