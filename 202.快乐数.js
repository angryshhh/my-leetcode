/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let map = {};
  while (!map[n]) {
    map[n] = true;
    let temp = 0;
    while (n) {
      let yu = n % 10;
      temp += yu ** 2;
      n -= yu;
      n /= 10;
    }
    if (temp === 1) return true;
    n = temp;
  }
  return false;
};
// @lc code=end

