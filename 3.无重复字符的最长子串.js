/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  let i = 0, j = 1;
  let count = 0;
  while (j < s.length) {
    let index = s.indexOf(s[j], i);
    if (index !== -1 && index !== j) {
      count = (count < (j - i)) ? j - i : count;
      i = index + 1;
    }
    j++;
  }
  return (count < (j - i)) ? j - i : count;
};
// @lc code=end

