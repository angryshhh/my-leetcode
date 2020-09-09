/*
 * @lc app=leetcode.cn id=829 lang=javascript
 *
 * [829] 连续整数求和
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
  let result = 1;
  for (let i = 2; i < N; i++) {
    let minus = i * (i + 1) / 2;
    if (minus > N) {
      break;
    }
    if ((N - minus) % i === 0) {
      result++;
    }
  }
  return result;
};
// @lc code=end

