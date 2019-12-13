/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  // Your runtime beats 96.83 % of javascript submissions
  // Your memory usage beats 37.06 % of javascript submissions (36.2 MB)
  // let directories = [];
  // for (let i = 0; i < path.length; i++) {
  //   while (i < path.length && path[i] === '/') i++;
  //   if (i === path.length) break;
  //   let nextDashIndex = path.indexOf('/', i);
  //   let directoryName = '';
  //   if (nextDashIndex === -1) {
  //     directoryName = path.slice(i);
  //     i = path.length;
  //   } else {
  //     directoryName = path.slice(i, nextDashIndex);
  //     i = nextDashIndex;
  //   }
  //   if (
  //     directoryName === '.' ||
  //     (directoryName === '..' && directories.length === 0)
  //   ) {}
  //   else if (directoryName === '..') directories.pop();
  //   else directories.push(directoryName);
  // }
  // return '/' + directories.join('/');
  
  let directories = [];
  path.split('/').filter(directoryName => directoryName).forEach(directoryName => {
    if (directoryName === '.') {}
    else if (directoryName === '..') directories.pop();
    else directories.push(directoryName);
  });
  return '/' + directories.join('/');
};
// @lc code=end

