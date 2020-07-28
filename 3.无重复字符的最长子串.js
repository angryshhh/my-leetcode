/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // if (s.length === 0) return 0;
  // let i = 0, j = 1;
  // let count = 0;
  // while (j < s.length) {
  //   let index = s.indexOf(s[j], i);
  //   if (index !== -1 && index !== j) {
  //     count = (count < (j - i)) ? j - i : count;
  //     i = index + 1;
  //   }
  //   j++;
  // }
  // return (count < (j - i)) ? j - i : count;

  if (s === "") return 0;
  if (s.length === 1) return 1;
  let dp = [1];
  let charLastIndex = {[s[0]]: 0};
  let maxSubLength = 1;
  for (let i = 1; i < s.length; i++) {
    if ((!charLastIndex[s[i]] && charLastIndex[s[i]] !== 0) ||
      i - charLastIndex[s[i]] > dp[i - 1]) {
      dp.push(dp[i - 1] + 1);
    } else {
      dp.push(i - charLastIndex[s[i]]);
    }
    charLastIndex[s[i]] = i;
    maxSubLength = Math.max(maxSubLength, dp[i]);
  }
  return maxSubLength;
};
// @lc code=end

