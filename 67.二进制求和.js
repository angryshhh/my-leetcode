/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  let lenA = a.length, lenB = b.length;
  let max = Math.max(lenA, lenB);
  let result = new Array(max).fill('0');
  a = new Array(max - lenA).fill('0').join('') + a;
  b = new Array(max - lenB).fill('0').join('') + b;
  let i = max - 1;
  let jin = 0;
  while (i >= 0) {
    let ai = parseInt(a[i]), bi = parseInt(b[i]);
    if (jin + ai + bi === 3) {
      jin = 1;
      result[i] = '1';
    } else if (jin + ai + bi === 2) {
      jin = 1;
      result[i] = '0';
    } else if (jin + ai + bi === 1) {
      jin = 0;
      result[i] = '1';
    } else if (jin + ai + bi === 0) {
      jin = 0;
      result[i] = '0';
    }
    i--;
  }
  return (jin ? '1' : '') + result.join('');
};
// @lc code=end

