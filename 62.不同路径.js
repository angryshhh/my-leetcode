/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * 排列组合问题，令max = max(m, n), min = min(m - 1, n - 1)
 * 即min个相同的球，放进max个不同的盒子，允许盒子为空
 * 公式为C(min)(min + max - 1)
 * 也即C(min(m - 1, n - 1))(m + n - 2)
 */
var uniquePaths = function(m, n) {
  let min = Math.min(m - 1, n - 1);
  let total = m + n - 2;
  let result = 1;
  for (let i = 0; i < min; i++) {
    result = result * total;
    total--;
  }
  while (min > 1) {
    result /= min;
    min--;
  }
  return result;
};
// @lc code=end

