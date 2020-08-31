/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let repeatCountStack = [1];
  let repeatStringStack = [''];
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i])) {
      // num
      let nextQuoteIndex = s.indexOf('[', i);
      let countString = s.substring(i, nextQuoteIndex);
      repeatCountStack.push(parseInt(countString));
      repeatStringStack.push('');
      i = nextQuoteIndex;
    } else if (s[i] === ']') {
      let repeatCount = repeatCountStack.pop();
      let repeatString = repeatStringStack.pop();
      repeatStringStack[repeatStringStack.length - 1] += repeatString.repeat(repeatCount);
    } else {
      repeatStringStack[repeatStringStack.length - 1] += s[i];
    }
  }

  return repeatStringStack[0];
};
// @lc code=end

