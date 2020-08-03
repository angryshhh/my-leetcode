/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (27.71%)
 * Likes:    168
 * Dislikes: 0
 * Total Accepted:    16.4K
 * Total Submissions: 59.5K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入：
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * 输出：[]
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (s.length === 0 || words.length === 0)
    return [];
  let sLen = s.length, wordLen = words[0].length;
  let subLen = wordLen * words.length;
  let counter = {};
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (counter[words[i]]) {
      counter[words[i]]++;
    } else {
      counter[words[i]] = 1;
    }
  }
  for (let i = 0; i <= sLen - subLen; i++) {
    let tempCounter = {...counter};
    let flag = true;
    for (let j = 0; j < words.length; j++) {
      let tempStr = s.substring(i + j * wordLen, i + j * wordLen + wordLen);
      if (tempCounter[tempStr]) {
        tempCounter[tempStr]--;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(i);
    }
  }
  return result;
};
// @lc code=end

