/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = -1;
  let d = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min || min === -1) {
      min = prices[i];
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] < prices[i]) {
          i = j - 1;
          break;
        }
        if (prices[j] - prices[i] >= d) {
          d = prices[j] - prices[i];
          maxIndex = j;
        }
      }
    }
  }
  return d;
};
// @lc code=end

