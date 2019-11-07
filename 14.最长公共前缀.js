/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.70%)
 * Likes:    755
 * Dislikes: 0
 * Total Accepted:    143.9K
 * Total Submissions: 408.6K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs[0] || strs[0].length === 0) {
    return '';
  }
  let length = strs[0].length;
  let result = '';
  for (let i = 0; i < length; i++) {
    for (let str of strs) {
      if (!str[i] || str[i] !== strs[0][i]) {
        return result;
      }
    }
    result += strs[0][i];
  }
  return result;
};
// @lc code=end

