/*
 * @lc app=leetcode.cn id=514 lang=javascript
 *
 * [514] 自由之路
 */

// @lc code=start
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
  let targetIndexes = {};
  for (let i = 0; i < ring.length; i++) {
    if (key.includes(ring[i])) {
      if (!targetIndexes[ring[i]]) {
        targetIndexes[ring[i]] = [i]
      } else {
        targetIndexes[ring[i]].push(i);
      }
    }
  }

  let fromIndexes = [0];
  let currentMinSteps = [0];
  for (let char of key) {
    let toIndexes = targetIndexes[char];
    let minSteps = [];
    for (let toIndex of toIndexes) {
      let minStep = ring.length * key.length;
      for (let i = 0; i < fromIndexes.length; i++) {
        let fromIndex = fromIndexes[i];
        let currentStep = currentMinSteps[i];
        let diff = Math.abs(fromIndex - toIndex);
        let step = Math.min(diff, ring.length - diff) + currentStep;
        if (step < minStep) {
          minStep = step;
        }
      }
      minSteps.push(minStep);
    }
    fromIndexes = toIndexes;
    currentMinSteps = minSteps;
  }
  return Math.min(...currentMinSteps) + key.length;
};
// @lc code=end

