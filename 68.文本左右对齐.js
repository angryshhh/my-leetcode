/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let lens = [];
  let lines = [];
  let len = 0;
  let wordsInLine = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length + len + wordsInLine.length > maxWidth) {
      lines.push([...wordsInLine]);
      lens.push(len);
      wordsInLine = [];
      len = 0;
    }
    wordsInLine.push(word);
    len += word.length;
    if (i === words.length - 1) {
      lines.push([...wordsInLine]);
      lens.push(len);
    }
  }
  for (let i = 0; i < lines.length - 1; i++) {
    wordsInLine = lines[i];
    let str = '';
    if (wordsInLine.length === 1) {
      str = wordsInLine[0];
      str += new Array(maxWidth - str.length).fill(' ').join('');
    } else {
      len = lens[i];
      let yu = (maxWidth - len) % (wordsInLine.length - 1)
      let spaceLen = (maxWidth - len - yu) / (wordsInLine.length - 1);
      let spaceStr = new Array(spaceLen).fill(' ').join('');
      for (let j = 0; j < wordsInLine.length - 1; j++) {
        str += (wordsInLine[j] + spaceStr);
        if (j < yu) str += ' ';
      }
      str += wordsInLine[wordsInLine.length - 1];
    }
    
    lines[i] = str;
  }
  wordsInLine = lines[lines.length - 1];
  let str = wordsInLine.join(' ');
  str += new Array(maxWidth - str.length).fill(' ').join('');
  lines[lines.length - 1] = str;
  return lines;
};
// @lc code=end

