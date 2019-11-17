/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.length === 0) return 0;
  let last = s.length - 1;
  while (s[last] === ' ') last--;
  if (last === -1) return 0;
  let first = last;
  while (s[first] !== ' ') {
    first--;
    if (first === -1) break;
  }
  first++;
  return last - first + 1;
};
// @lc code=end

