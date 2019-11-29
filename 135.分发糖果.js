/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function(ratings) {
  if (ratings.length === 0) return 0;
  let len = ratings.length;
  let nums = new Array(len).fill(1);
  let total = 0;
  for (let i = 0; i < len; i++) {
    if (i === len - 1 || (i < len - 1 && ratings[i] === ratings[i + 1])) {
      total += nums[i];
    } else if (ratings[i] < ratings[i + 1]) {
      let j = i;
      while (j < len - 1 && ratings[j] < ratings[j + 1] ) j++;
      nums[j] = j - i + 1;
      total += (j - i + 1) * (j - i) / 2;
      i = j - 1;
    } else if (ratings[i] > ratings[i + 1]) {
      let j = i;
      while (j < len - 1 && ratings[j] > ratings[j + 1] ) j++;
      total += (j - i + 2) * (j - i - 1) / 2;
      total += Math.max(nums[i], j - i + 1);
      i = j - 1;
    }    
  }
  return total;
};
// @lc code=end

