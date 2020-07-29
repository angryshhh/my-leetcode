/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  // let result = [];
  // for (let interval of intervals) {
  //   if (result.length === 0) result.push(interval);
  //   else {
  //     let temp = result.pop();
  //     if (temp[1] < interval[0]) {
  //       result.push(temp);
  //       result.push(interval);
  //     } else if (temp[1] > interval[1]) {
  //       result.push(temp);
  //     } else {
  //       result.push([temp[0], interval[1]]);
  //     }
  //   }
  // }
  // return result;

  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let result = [intervals[0]];
  let resultIndex = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > result[resultIndex][1]) {
      result.push(intervals[i]);
      resultIndex++;
    } else {
      result[resultIndex][1] =
        Math.max(intervals[i][1], result[resultIndex][1]);
    }
  }
  return result;
};
// @lc code=end

