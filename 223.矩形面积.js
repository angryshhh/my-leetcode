/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  let sum = (C - A) * (D - B) + (G - E) * (H - F);
  if (
    (A <= E && C <= E) ||
    (E <= A && G <= A) ||
    (B <= F && D <= F) ||
    (F <= B && H <= B)
  ) return sum;

  let verticals = [A, C, E, G], horizontals = [B, D, F, H];
  verticals.sort((a, b) => a - b);
  horizontals.sort((a, b) => a - b);
  return sum -
    (verticals[2] - verticals[1]) *
    (horizontals[2] - horizontals[1]);
};
// @lc code=end

