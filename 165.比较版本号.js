/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  // Your runtime beats 88.71 % of javascript submissions
  // Your memory usage beats 26.09 % of javascript submissions (33.7 MB)
  let versionArray1 = version1.split('.');
  let versionArray2 = version2.split('.');
  let i = 0, len1 = versionArray1.length, len2 = versionArray2.length;
  while (i < len1 && i < len2) {
    let versionInt1 = parseInt(versionArray1[i]);
    let versionInt2 = parseInt(versionArray2[i]);
    if (versionInt1 < versionInt2) return -1;
    if (versionInt1 > versionInt2) return 1;
    i++;
  }
  while (i < len1) {
    let versionInt = parseInt(versionArray1[i]);
    if (versionInt) return 1;
    i++;
  }
  while (i < len2) {
    let versionInt = parseInt(versionArray2[i]);
    if (versionInt) return -1;
    i++;
  }
  return 0;
};
// @lc code=end

