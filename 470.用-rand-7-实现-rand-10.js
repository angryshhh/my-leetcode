/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */

const arr = [
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1,  1,  1,  1,  2,  2,  2, -1],
  [-1,  3,  3,  3,  4,  4,  4, -1],
  [-1,  5,  5,  5,  6,  6,  6, -1],
  [-1,  7,  7,  7,  8,  8, -1, -1],
  [-1,  8,  9,  9,  9, -1, -1, -1],
  [-1, 10, 10, 10, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1]
];
var rand10 = function() {
  let a = 0, b = 0;
  while (arr[a][b] < 0) {
    a = rand7();
    b = rand7();
  }
  return arr[a][b];
};
// @lc code=end

