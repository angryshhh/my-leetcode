/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] >= prices[i + 1]) continue;
    let j = i + 1;
    while (j < prices.length - 1 && prices[j] <= prices[j + 1]) j++;
    profit += (prices[j] - prices[i]);
    i = j;
  }
  return profit;
};
// @lc code=end

