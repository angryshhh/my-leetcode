/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  // if (N === 0) return 0;
  // if (N === 1) return 1;
  // return fib(N - 1) + fib(N - 2);

  // let nums = [0, 1];
  // for (let i = 2; i <= N; i++) {
  //   nums.push(nums[i - 2] + nums[i - 1]);
  // }
  // return nums[N];
  
  if (N === 0) return 0;
  if (N === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= N; i++) {
    b += a;
    a = b - a;
  }
  return b;
};
// @lc code=end

