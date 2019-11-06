/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.53%)
 * Likes:    804
 * Dislikes: 0
 * Total Accepted:    192.8K
 * Total Submissions: 340.2K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  }
  let xStr = x.toString();
  return xStr === [...xStr].reverse().join('');
  // let n = 2;
  // while (10**n <= x) {
  //   n++;
  // }
  // let i = 1;
  // while (n > 1) {
  //   let high = ~~(x / (10 ** (n - 1)));
  //   let low = x % 10;
  //   if (high !== low) {
  //     return false;
  //   }
  //   x -= high * (10 ** (n - 1));
  //   x = (x - low) / 10;
  //   n -= 2;
  // }
  // return true;
};
// @lc code=end

