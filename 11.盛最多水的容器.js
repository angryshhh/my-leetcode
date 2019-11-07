/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (57.46%)
 * Likes:    884
 * Dislikes: 0
 * Total Accepted:    98.4K
 * Total Submissions: 166.4K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 * 
 * 
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// var maxArea = function(height) {
//   let heightObj = {};
//   height.forEach((h, index) => {
//     if (!heightObj[h]) {
//       heightObj[h] = [index];
//     } else {
//       heightObj[h].push(index);
//     }
//   });
//   let sortedHeight = [...new Set(height)].sort((a, b) => b - a);
//   let i = 0;
//   let maxResult = 0;
//   let crossed = [];

//   while (sortedHeight[i]) {
//     let result = 0;
//     crossed = [...heightObj[sortedHeight[i]], ...crossed];
//     result = (Math.max(...crossed) - Math.min(...crossed)) * sortedHeight[i];
//     if (result > maxResult) {
//       maxResult = result;
//     }
//     i++;
//   }
//   return maxResult;
// };
var maxArea = function(height) {
  let front = 0, back = height.length - 1;
  let result = 0;
  while (front !== back) {
    let temp = (back - front) * (height[front] < height[back] ? height[front] : height[back]);
    if (temp > result) {
      result = temp;
    }
    if (height[front] < height[back]) {
      front++;
    } else {
      back--;
    }
  }
  return result;
}
// @lc code=end

