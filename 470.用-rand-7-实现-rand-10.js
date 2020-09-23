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
var rand10 = function() {
  // let a = 7, b = 7;
  // while (a ** 2 + b ** 2 > 49) {
  //   a = rand7();
  //   b = rand7();
  // }
  // if (a === 1 && b <= 3) {
  //   return 1;
  // } else if (a === 1 && b <= 6) {
  //   return 2;
  // } else if (a === 2 && b <= 3) {
  //   return 3;
  // } else if (a === 2 && b <= 6) {
  //   return 4;
  // } else if (a === 3 && b <= 3) {
  //   return 5;
  // } else if (a === 3 && b <= 6) {
  //   return 6;
  // } else if (a === 4 && b <= 3) {
  //   return 7;
  // } else if (a === 4 && b <= 5) {
  //   return 8;
  // } else if (a === 5 && b === 1) {
  //   return 8;
  // } else if (a === 5 && b <= 4) {
  //   return 9;
  // } else if (a === 6 && b <= 3) {
  //   return 10;
  // }

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

  let a = 0, b = 0;
  while (arr[a][b] < 0) {
    a = rand7();
    b = rand7();
  }
  return arr[a][b];
};
// @lc code=end

