/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  let result = [0];
  for (let i = 0; i < n; i++) {
    let plus = 2 ** i;
    for (let j = result.length - 1; j >= 0; j--) {
      result.push(result[j] + plus);
    }
  }
  return result;
};
// @lc code=end

