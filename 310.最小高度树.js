/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 2) return [0, 1];
  let matrix = Array.from({length: n}, () => []);
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    matrix[a].push(b);
    matrix[b].push(a);
  }
  
  let minDepth = n;
  let result = [];
  for (let i = 0; i < n; i++) {
    if (matrix[i].length === 1) continue;// avoid some node to reduce runtime
    let visited = new Array(n).fill(false);
    let level = [i];
    visited[i] = true;
    let depth = 0;
    while (level.length) {
      let nextLevel = [];

      for (let a of level) {
        for (let b of matrix[a]) {
          if (!visited[b]) {
            visited[b] = true;
            nextLevel.push(b);
          }
        }
      }
      if (nextLevel.length) depth++;
      level = [...nextLevel];
    }
    if (depth === minDepth) {
      result.push(i);
    } else if (depth < minDepth) {
      minDepth = depth;
      result = [i];
    }
  }
  return result;
};
// @lc code=end

