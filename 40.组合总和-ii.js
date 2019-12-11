/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let result = [[]];
  let count = [0];
  for (let i = 0; i < candidates.length; i++) {
    let num = candidates[i];
    if (num > target) break;

    let numCount = 1;
    while (i + 1 < candidates.length && candidates[i + 1] === num) {
      i++;
      numCount++;
    }

    let len = result.length;
    for (let j = 0; j < len; j++) {
      let k = 1;
      while (k <= numCount) {
        if (count[j] + num * k <= target) {
          result.push([...result[j], ...new Array(k).fill(num)]);
          count.push(count[j] + num * k);
          k++;
        } else break;
      }
    }
  }

  return result.filter((value, index) => count[index] === target);
};
// @lc code=end

