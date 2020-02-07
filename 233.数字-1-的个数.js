/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  if (n <= 0) return 0
  if (n < 10) return 1;

  let digits = n.toString().length;
  let tens = 10 ** (digits - 1);
  let head = ~~(n / tens);
  let tail = n % tens;
  return head * countDigitOne(tens - 1)
    + countDigitOne(tail)
    + (head === 1 ? tail + 1 : tens);
};
// @lc code=end

