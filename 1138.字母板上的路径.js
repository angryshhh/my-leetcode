/*
 * @lc app=leetcode.cn id=1138 lang=javascript
 *
 * [1138] 字母板上的路径
 */

// @lc code=start


const indexes = {
  'a': [0, 0], 'b': [0, 1], 'c': [0, 2], 'd': [0, 3], 'e': [0, 4],
  'f': [1, 0], 'g': [1, 1], 'h': [1, 2], 'i': [1, 3], 'j': [1, 4],
  'k': [2, 0], 'l': [2, 1], 'm': [2, 2], 'n': [2, 3], 'o': [2, 4],
  'p': [3, 0], 'q': [3, 1], 'r': [3, 2], 's': [3, 3], 't': [3, 4],
  'u': [4, 0], 'v': [4, 1], 'w': [4, 2], 'x': [4, 3], 'y': [4, 4],
  'z': [5, 0]
};
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  let currChar = 'a';
  let result = '';
  for (let i = 0; i < target.length; i++) {
    let char = target[i];
    if (currChar === char) {
      result += '!';
      continue;
    } else if (currChar === 'z') {
      result += 'U';
      currChar = 'u';
    } else if (char === 'z') {
      char = 'u'
    }
    let width = indexes[char][1] - indexes[currChar][1];
    let height = indexes[char][0] - indexes[currChar][0];
    result += (height < 0 ? 'U' : 'D').repeat(Math.abs(height));
    result += (width < 0 ? 'L' : 'R').repeat(Math.abs(width));

    currChar = target[i];
    if (currChar === 'z') {
      result += 'D'
    }
    result += '!';
  }
  return result;
};
// @lc code=end

