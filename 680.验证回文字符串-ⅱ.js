/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let head = 0, tail = s.length - 1;
  while (head < tail && s[head] === s[tail]) {
    head++;
    tail--;
  }
  if (s[head] === s[tail]) return true;

  let newHead1 = head, newTail1 = tail - 1;
  while (newHead1 < newTail1 && s[newHead1] === s[newTail1]) {
    newHead1++;
    newTail1--;
  }
  if (s[newHead1] === s[newTail1]) return true;

  let newHead2 = head + 1, newTail2 = tail;
  while (newHead2 < newTail2 && s[newHead2] === s[newTail2]) {
    newHead2++;
    newTail2--;
  }
  if (s[newHead2] === s[newTail2]) return true;
  
  return false;
};
// @lc code=end

