/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  let result = [];
  let splited = text.split(' ');
  for (let i = 0; i < splited.length - 2; i++) {
    if (splited[i] === first && splited[i + 1] === second) {
      result.push(splited[i + 2]);
    }
  }
  return result;
};
// @lc code=end

