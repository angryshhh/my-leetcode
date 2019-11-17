/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  if (intervals[0][0] > newInterval[1]) return [newInterval, ...intervals];
  if (intervals[intervals.length - 1][1] < newInterval[0]) return [...intervals, newInterval];
  
  let first = 0, last = intervals.length - 1;
  while (intervals[first][1] < newInterval[0]) first++;
  while (intervals[last][0] > newInterval[1]) last--;
  newInterval = [
    intervals[first][0] < newInterval[0] ? intervals[first][0] : newInterval[0],
    intervals[last][1] > newInterval[1] ? intervals[last][1] : newInterval[1]
  ];  
  return [...intervals.slice(0, first), newInterval, ...intervals.slice(last + 1)];
};
// @lc code=end

