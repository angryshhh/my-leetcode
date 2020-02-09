/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num >= 10) {
    let newNum = 0;
    while (num >= 1) {
      newNum += num % 10;
      num = ~~(num / 10);
    }
    num = newNum;
  }
  return num;
};
// @lc code=end

