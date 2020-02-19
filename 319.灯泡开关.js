/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  // 因素个数，为奇数则开，为偶数则关
  // 也即开方是整数即为开
  // 因此总数为小于等于n的平方数
  // 也即n开方取底
  return ~~(n ** 0.5);
  // return Math.floor(Math.sqrt(n));
};
// @lc code=end

