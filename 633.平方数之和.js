/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let cSqrt = c ** 0.5;
  if (~~cSqrt === cSqrt) return true;
  let halfSqrt = (c / 2) ** 0.5;
  if (halfSqrt === ~~halfSqrt) return true;
  for (let i = 0; i <= halfSqrt; i++) {
    let yuSqrt = (c - i ** 2) ** 0.5;
    if (~~yuSqrt === yuSqrt) return true;
  }
  return false;
};
// @lc code=end

