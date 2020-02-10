/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  let toNineteen = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  let tens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function helper(num) {
    if (num === 0) return [];
    if (num < 20) {
      return [toNineteen[num - 1]];
    }
    if (num < 100) {
      return [
        tens[~~(num / 10) - 2],
        ...helper(num % 10),
      ];
    }
    if (num < 1000) {
      return [
        toNineteen[~~(num / 100) - 1],
        'Hundred',
        ...helper(num % 100),
      ];
    }
    let result = [];
    ['Thousand', 'Million', 'Billion'].forEach((str, index) => {
      if (num >= 1000) {
        if (~~(num / 1000) % 1000) {
          result = [str, ...helper(num % 1000), ...result];
        } else {
          result = [...helper(num % 1000), ...result];
        }
      } else if (num > 0) {
        result = [...helper(num), ...result];
      }
      num = ~~(num / 1000);
    });
    if (num) return [...helper(num), ...result];
    else return result;
  }

  return num === 0 ? 'Zero' : helper(num).join(' ');
};
// @lc code=end

