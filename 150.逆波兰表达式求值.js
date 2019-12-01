/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let nums = [];
  for (let i = 0; i < tokens.length; i++) {
    let num2, num1;
    switch (tokens[i]) {
      case '+':
        num2 = nums.pop();
        num1 = nums.pop();
        nums.push(num1 + num2);
        break;
      case '-':
        num2 = nums.pop();
        num1 = nums.pop();
        nums.push(num1 - num2);
        break;
      case '*':
        num2 = nums.pop();
        num1 = nums.pop();
        nums.push(num1 * num2);
        break;
      case '/':
        num2 = nums.pop();
        num1 = nums.pop();
        nums.push(parseInt(num1 / num2));
        break;
      default:
        nums.push(parseInt(tokens[i]));
        break;
    }
  }
  return nums[0];
};
// @lc code=end

