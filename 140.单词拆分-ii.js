/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  // might only one case exceed time limit
  // if (s.length === 0) return [];
  // let heads = [''];
  // let tails = [s];
  // let result = [];
  // while (heads.length) {
  //   let head = heads.shift();
  //   let tail = tails.shift();
  //   if (tail === '') {
  //     result.push(head);
  //     continue;
  //   }
  //   for (let word of wordDict) {
  //     if (tail.indexOf(word) === 0) {
  //       if (head.length === 0) heads.push(word);
  //       else heads.push(`${head} ${word}`);
  //       tails.push(tail.slice(word.length));
  //     }
  //     else console.log(head, tail);
  //   }
  // }
  // return result;

  if (s.length === 0) return [];
  let result = [];
  for (let word of wordDict) {
    if (word === s) {
      result.push(word);
    } else if (word === s.substring(0, word.length)) {
      let temp = wordBreak(s.substring(word.length), wordDict);
      for (let string of temp) {
        result.push(word + ' ' + string);
      }
    }
  }
  return result;
};
// @lc code=end

