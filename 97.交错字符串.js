/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  // let s1i = 0, s2i = 0, s3i = 0;
  // let len1 = s1.length, len2 = s2.length, len3 = s3.length;
  // if (len1 + len2 !== len3) return false;
  // while ((s1i < len1 || s2i < len2) && s3i < len3) {
  //   if (s1i < len1 && s2i < len2 && s1[s1i] === s2[s2i] && s1[s1i] === s3[s3i]) {
  //     return isInterleave(s1.slice(s1i + 1), s2.slice(s2i), s3.slice(s3i + 1)) ||
  //       isInterleave(s1.slice(s1i), s2.slice(s2i + 1), s3.slice(s3i + 1));
  //   } else {
  //     if (s1i < len1 && s1[s1i] === s3[s3i]) {
  //       s1i++;
  //     } else if (s2i < len2 && s2[s2i] === s3[s3i]) {
  //       s2i++;
  //     } else break;
  //   }
  //   s3i++;
  // }
  // return (s1i + s2i) === len3 ;
  let len1 = s1.length, len2 = s2.length, len3 = s3.length;
  if (len1 + len2 !== len3) return false;
  let d = new Array(len1 + 1);
  for (let i = 0; i < len1 + 1; i++) d[i] = new Array(len2 + 1);
  d[0][0] = true;
  for (let i = 1; i < len1 + 1; i++) {
    d[i][0] = d[i - 1][0] && s1[i - 1] === s3[i - 1];
  }
  for (let i = 1; i < len2 + 1; i++) {
    d[0][i] = d[0][i - 1] && s2[i - 1] === s3[i - 1];
  }
  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      d[i][j] =
        (d[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (d[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }
  return d[len1][len2];
};
// @lc code=end

