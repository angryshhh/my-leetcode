/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.00%)
 * Likes:    1432
 * Dislikes: 0
 * Total Accepted:    214.3K
 * Total Submissions: 646.1K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = new String(x);
  if (result[0] === '-') {
    return isOver(new Number('-' + [...result.slice(1, result.length)].reverse().join('')));
  } else {
    return isOver(new Number([...result].reverse().join('')));
  }
};

function isOver(number) {
  if (
    number < -(2**31) ||
    number > (2**31) - 1
  ) {
    return 0;
  }
  return number;
}
// @lc code=end

