/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // Your runtime beats 98.79 % of javascript submissions
  // Your memory usage beats 30.64 % of javascript submissions (35.1 MB)
  let map = {};
  for (let i = 0; i < numbers.length; i++) {
    let d = target - numbers[i];
    map[d] = i + 1;
    for (let j = i + 1; j < numbers.length; j++) {
      let num  = numbers[j];
      if (num === d) return [i + 1, j + 1];
      if (map[num]) return [map[num], j + 1];
      if (numbers[j] > d) break;
      map[target - num] = j + 1;
    }
  }
  return [];
};
// @lc code=end

