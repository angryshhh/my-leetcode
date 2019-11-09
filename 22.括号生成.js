/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (71.78%)
 * Likes:    600
 * Dislikes: 0
 * Total Accepted:    51.9K
 * Total Submissions: 71.8K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 如果将所有'('按序换为1，3，5…的奇数序列，将所有')'按序换为2，4，6…的偶数序列，得到的数字序列，存在这样的规律：以1起始，奇数大于左边的任意数，偶数大于左边的任意偶数。
// 所以在生成新序列时，以'('起始 ，下一个数必须小于等于2n；若是偶数，需要当前序列最大偶数小于最大奇数，然后加入')'，并让该序列的最大偶数+2；若是奇数，则加入'('。当序列长度为2n时退出。
// 代码如下，时间复杂度O(n*m)，m是最终生成的序列个数，应该和n有数学关系，但我不确定具体关系。


// var generateParenthesis = function(n) {
//   if (n === 0) return [];
//   if (n === 1) return ['()'];
//   let resultObj = {'(': [1, 0]}, tempObj = {};
//   let count = 1;
//   let limit = 2 * n;
//   while (count < limit) {
//     for (let sequence in resultObj) {
//       for (let i = 0; i < 2; i++) {
//         if (resultObj[sequence][i] + 2 > limit) {
//           continue;
//         }
//         if (i === 1 && resultObj[sequence][i] > resultObj[sequence][0]) {
//           break;
//         }
//         let newSequence = sequence + (i === 0 ? '(' : ')');
//         if (!tempObj[newSequence]) {
//           // tempObj[newSequence] = resultObj[sequence];  // 引用，不行
//           tempObj[newSequence] = [...resultObj[sequence]];
//         }
//         tempObj[newSequence][i] = tempObj[newSequence][i] + 2;
//       }
//     }
//     resultObj = {...tempObj};
//     tempObj = {};
//     count++;
//   }
//   return Object.keys(resultObj);
// };

var generateParenthesis = function(n) {
  if (n === 0) return [];
  if (n === 1) return ['()'];
  let result = ['('], sequenceQuote = [[1, 0]];
  let length = 1;
  let limit = 2 * n;
  while (length < limit) {
    let tempResult = [], tempSequenceQuote = [];
    for (let i = 0; result[i]; i++) {
      for (let j = 0; j < 2; j++) {
        let quotes = [...(sequenceQuote[i])];
        if (quotes[j] + 2 > limit) {
          continue;
        }
        if (j === 1 && quotes[j] > quotes[0]) {
          break;
        }
        let newSequence = result[i] + (j === 0 ? '(' : ')');
        tempResult.push(newSequence);
        quotes[j] += 2;
        tempSequenceQuote.push(quotes);
      }
    }
    result = tempResult;
    sequenceQuote = tempSequenceQuote;
    length++;
  }
  return result;
};

// @lc code=end

