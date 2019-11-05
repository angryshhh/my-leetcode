/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let length = s.length;
  while (length > 0) {
    let start = 0;
    while (s[start + length - 1]) {
      let i = 0;
      while (
        i + 1 < length - i - 1 &&
        s[start + i] === s[start + length - i - 1]
      ) {
        i++;
      }
      if (s[start + i] === s[start + length - i - 1]) {
        return s.slice(start, start + length);
      }
      start++;
    }
    length--;
  }
  return '';
};
// @lc code=end

