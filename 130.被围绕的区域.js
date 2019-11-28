/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  // runtime beats 83.33%
  // memory usage beats 100%
  let m = board.length;
  if (m === 0) return;
  let n = board[0].length;
  if (n === 0) return;
  function linkedToBorder(i, j) {
    if (board[i][j] === 'O') {
      board[i][j] = 'B';
      if (i - 1 >= 0) linkedToBorder(i - 1, j);
      if (i + 1 < m) linkedToBorder(i + 1, j);
      if (j - 1 >= 0) linkedToBorder(i, j - 1);
      if (j + 1 < n) linkedToBorder(i, j + 1);
    }
  }
  for (let i = 0; i < n; i++) linkedToBorder(0, i);
  for (let i = 1; i < m; i++) linkedToBorder(i, n - 1);
  for (let i = n - 2; i >= 0; i--) linkedToBorder(m - 1, i);
  for (let i = m - 2; i > 0; i--) linkedToBorder(i, 0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'B') board[i][j] = 'O';
      else if (board[i][j] === 'O') board[i][j] = 'X';
    }
  }
};
// @lc code=end

