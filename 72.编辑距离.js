/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/**
 * get from TEXT ENTRY SYSTEMS by I. SCOTT MACKENZIE, KUMIKO TANAKA-ISHII
 */
var minDistance = function(word1, word2) {
  let len1 = word1.length, len2 = word2.length;
  let d = [];
  for (let i = 0; i <= len1; i++) d.push([i, ...new Array(len2).fill(0)]);
  for (let i = 0; i <= len2; i++) d[0][i] = i;
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0)
      );
    }
  }
  return d[len1][len2];
};
// @lc code=end

