/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  let maxes = new Array(prices.length + 2).fill(0);
  for (let i = prices.length - 1; i >= 0; i--) {
    maxes[i] = maxes[i + 1];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        let sum = prices[j] - prices[i] + maxes[j + 2];
        if (maxes[i] < sum) maxes[i] = sum;
      }
    }
  }
  return maxes[0];
};
// @lc code=end

