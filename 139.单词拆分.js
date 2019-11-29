/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // runtime beats 97.56%
  // memory usage beats 42.25%
  if (s.length === 0) return true;
  let len = s.length;
  let dp = new Array(len).fill(false);
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (wordDict.includes(s.slice(j, i + 1)) && (j === 0 || dp[j - 1])) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len - 1];
};
// @lc code=end

