/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// 抄作业，还得细品
var numDistinct = function(s, t) {
  let result = [];
  let lenS = s.length, lenT = t.length;
  for (let i = 0; i < lenT + 1; i++) {
    result.push(new Array(lenS + 1).fill(0));
  }
  for (let i = 0; i < lenS + 1; i++) {
    result[0][i] = 1;
  }
  for (let i = 1; i < lenT + 1; i++) {
    for (let j = 1; j < lenS + 1; j++) {
      result[i][j] = result[i][j - 1];
      if (s[j - 1] === t[i - 1]) result[i][j] += result[i - 1][j - 1];
    }
  }
  return result[lenT][lenS];
};
// @lc code=end

