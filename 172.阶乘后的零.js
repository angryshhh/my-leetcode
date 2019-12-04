/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  // 数阶乘序列中有多少个因数是5
  // let count = 0;
  // for (let i = 5; i <= n; i = i + 5) {
  //   let j = i;
  //   while (j >= 5) {
  //     count++;
  //     j /= 5;
  //     if (j !== ~~j) {
  //       count--;
  //       break;
  //     }
  //   }
  // }
  // return count;

  let result = 0;
  while (n) {
    result += ~~(n / 5);
    n /= 5;
  }
  return result;
};
// @lc code=end

