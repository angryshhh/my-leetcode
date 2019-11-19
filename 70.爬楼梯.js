/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 斐波那契数列第n项
 */
var climbStairs = function(n) {
  let i = 1;
  let arr = [1, 1];
  while (i < n) {
    let temp = arr[1];
    arr[1] += arr[0];
    arr[0] = temp;
    i++;
  }
  return arr[1];
};
// @lc code=end

