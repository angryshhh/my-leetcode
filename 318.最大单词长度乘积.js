/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let result = 0;
  let uniqueChars = words.map(word => {
    let newSet = new Set([...word]);
    return newSet.size > 26 ? null : Array.from(newSet);
  });
  for (let i = 0; i < uniqueChars.length - 1; i++) {
    if (uniqueChars[i]) {
      let uniqueLen1 = uniqueChars[i].length;

      for (let j = i + 1; j < uniqueChars.length; j++) {
        if (uniqueChars[j]) {
          let uniqueLen2 = uniqueChars[j].length;
          if (
            new Set([...uniqueChars[i], ...uniqueChars[j]]).size
            === uniqueLen1 + uniqueLen2
          ) {
            let mulLen = words[i].length * words[j].length;
            result = mulLen > result ? mulLen : result;
          }
        }
      }
    }
  }
  return result;
};
// @lc code=end

