/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  // let str = '1';
  // let i = 1;
  // while (i < n) {
  //   let tempStr = '';
  //   let len = str.length;
  //   let j = 0;
  //   let count = 1;
  //   while (j < len) {
  //     if (j < len - 1 && str[j] === str[j + 1]) {
  //       count++;
  //       j++;
  //     } else {
  //       tempStr += `${count}${str[j]}`;
  //       j++;
  //       count = 1;
  //     }
  //   }
  //   str = tempStr;
  //   i++;
  // }
  // return str;
  let prev = '1'
    for(let i = 1; i < n; i++){
        prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`)
    }
    return prev
};
// @lc code=end

