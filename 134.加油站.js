/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  // runtime beats 97.5%
  // memory usage beats 46.34%
  let total = 0;
  let maxTotalStart = 0;
  let maxTotal = 0;
  for (let i = 0; i < gas.length; i++) {
    let d = gas[i] - cost[i];
    total += d;
    if ((d >= 0 && maxTotal < 0) || (maxTotal >= 0 && maxTotal + d < 0)) {
      maxTotalStart = i;
      maxTotal = d;
    } else {
      maxTotal += d;
    }
  }
  if (total >= 0) return maxTotalStart;
  else return -1;
};
// @lc code=end

