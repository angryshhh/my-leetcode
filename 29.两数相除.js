/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === 0) return 0;
  const Max = (2**31) - 1;
  const Min = (2**31);
  console.log(Max, Min)
  let flag = true;
  if (dividend < 0) {
    dividend = -dividend;
    flag = !flag;
  }
  if (divisor < 0) {
    divisor = -divisor;
    flag = !flag;
  }
  if (divisor === 1) {
    if (flag) {
      return dividend > Max ? Max : dividend;
    } else {
      return dividend > Min ? -Min : -dividend;
    }
  }
  let result = 0;
  while (dividend >= divisor) {
    result++;
    dividend -= divisor;
  }
  if (flag) {
    return result > Max ? Max : result;
  } else {
    return result > Min ? -Min : -result;
  }
};
// @lc code=end

