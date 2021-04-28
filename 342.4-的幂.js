/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  // return n > 0 && n !== 2 && 1073741824 % n === 0;
  let result = {
    1073741824: 1,
    268435456: 1,
    67108864: 1,
    16777216: 1,
    4194304: 1,
    1048576: 1,
    262144: 1,
    65536: 1,
    16384: 1,
    4096: 1,
    1024: 1,
    256: 1,
    64: 1,
    16: 1,
    4: 1,
    1: 1,
  };
  return result[n] === 1;
};
// @lc code=end

