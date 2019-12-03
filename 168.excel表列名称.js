/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  // const map = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // let result = '';
  // while (n > 0) {
  //   let index = n % 26;
  //   result = map[index] + result;
  //   n = ~~((n - 1) / 26);
  // }
  // return result;
  let result = '';
  while (n > 0) {
    result = String.fromCharCode((n - 1) % 26 + 65) + result;
    n = ~~((n - 1) / 26);
  }
  return result;
};
// @lc code=end

