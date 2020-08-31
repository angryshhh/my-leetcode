/*
 * @lc app=leetcode.cn id=915 lang=javascript
 *
 * [915] 分割数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
  // let leftMax = A.shift();
  // let count = 1;
  // while (A.length) {
  //   if (leftMax <= Math.min(...A)) {
  //     return count;
  //   } else {
  //     let num = A.shift();
  //     if (num > leftMax) {
  //       leftMax = num;
  //     }
  //     count++;
  //   }
  // }

  // let length = A.length;
  // let leftMax = new Array(length).fill(A[0]);
  // let rightMin = new Array(length).fill(A[length - 1]);
  // for (let i = 1; i < length; i++) {
  //   leftMax[i] = Math.max(A[i], leftMax[i - 1]);
  //   rightMin[length - i - 1] = Math.min(A[length - i - 1], rightMin[length - i]);
  // }
  // for (let i = 0; i < length - 1; i++) {
  //   if (leftMax[i] <= rightMin[i + 1]) {
  //     return i + 1;
  //   }
  // }
  // return length;

  let length = A.length;
  let rightMin = new Array(length).fill(A[length - 1]);
  // let rightMin = [A[length - 1]];
  let leftMax = A[0];
  for (let i = length - 2; i >= 0; i--) {
    rightMin[i] = Math.min(A[i], rightMin[i + 1]);
    // rightMin.unshift(Math.min(A[i], rightMin[0]));
  }
  for (let i = 0; i < length - 1; i++) {
    leftMax = Math.max(leftMax, A[i]);
    if (leftMax <= rightMin[i + 1]) {
      return i + 1;
    }
  }
  return length;
};
// @lc code=end

