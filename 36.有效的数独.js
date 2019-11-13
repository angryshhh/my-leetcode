/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let hang = [[], [], [], [], [], [], [], [], []];
  let lie = [[], [], [], [], [], [], [], [], []];
  let kuai = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      if (hang[i].includes(board[i][j])) return false;
      hang[i].push(board[i][j]);
      if (lie[j].includes(board[i][j])) return false;
      lie[j].push(board[i][j]);
      if (kuai[(~~(i / 3)) + (~~(j / 3)) * 3].includes(board[i][j])) return false;
      kuai[(~~(i / 3)) + (~~(j / 3)) * 3].push(board[i][j]);
    }
  }
  return true;
};
// @lc code=end

