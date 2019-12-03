/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  // Your runtime beats 89.8 % of javascript submissions
  // Your memory usage beats 16.67 % of javascript submissions (33.9 MB)
  if (numerator === 0) return '0';
  if (denominator === 1) return '' + numerator;
  if (denominator === -1) return '' + -numerator;

  let fu = false;
  if (numerator < 0) {
    numerator = -numerator;
    fu = !fu;
  }
  if (denominator < 0) {
    denominator = -denominator;
    fu = !fu;
  }

  let beforePoint = ~~(numerator / denominator);
  numerator %= denominator;
  if (numerator === 0) return '' + beforePoint;
  
  let afterPoint = [];
  let stack = [numerator];
  while (numerator) {
    numerator *= 10;
    let tempResult = ~~(numerator / denominator);
    afterPoint.push(tempResult);
    numerator %= denominator;
    let index = stack.indexOf(numerator);
    if (index > -1) {
      afterPoint.splice(index, 0, '(');
      afterPoint.push(')');
      break;
    }
    stack.push(numerator);
  }
  return `${fu ? '-' : ''}${beforePoint}.${afterPoint.join('')}`;
};
// @lc code=end

