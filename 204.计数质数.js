/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
  let arr = new Array(n + 1);
  for (let i = 2; i < n; i++) {
    if (!arr[i]) count++;
    let temp = 2 * i;
    while (temp < n) {
      arr[temp] = true;
      temp += i;
    }
  }
  return count;
};
// @lc code=end

