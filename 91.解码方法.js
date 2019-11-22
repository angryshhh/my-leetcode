/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s.length === 0) return 1;
  if (s[0] === '0') return 0;
  if (s.length === 1) return 1;
  let head = parseInt(s.slice(0, 2));
  if (head > 26) return numDecodings(s.slice(1));
  else if (head === 20 || head === 10 ) return numDecodings(s.slice(2));
  else return numDecodings(s.slice(2)) + numDecodings(s.slice(1));
};
// @lc code=end

