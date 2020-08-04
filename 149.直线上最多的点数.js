/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length <= 2) return points.length;
  let funcsMap = {};
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let func = calcFun(points[i], points[j]);
      if (func === '') continue;
      if (!funcsMap[func]) funcsMap[func] = true;
    }
  }

  console.log(funcsMap)
  if (Object.keys(funcsMap).length === 0)
    return points.length;
  for (let func in funcsMap) {
    let sum = 0;
    for (let point of points) {
      if (pointIsOnFunc(point, func)) sum++;
    }
    if (sum > max) max = sum;
  }
  return max;
};

/**
 * @param {number[]} point1
 * @param {number[]} point2
 * @return {stirng}
 */
function calcFun(point1, point2) {
  if (point1[0] === point2[0] && point1[1] === point2[1]) {
    return '';
  } else if (point1[0] === point2[0]) {
    return 'v,' + point1[0];
  } else {
    let a = (point1[1] - point2[1]) / (point1[0] - point2[0]);
    let k = point1[1] - a * point1[0];
    return a + ',' + k;
  }
}

/**
 * @param {number[]} point
 * @param {string} func
 * @return {stirng}
 */
function pointIsOnFunc(point, func) {
  let [a, k] = func.split(',');
  if (a === 'v') {
    return point[0].toString() === k;
  } else {
    a = parseFloat(a);
    k = parseFloat(k);
    
    return Math.abs(point[1] - k - a * point[0]) < 0.0000000001;
  }
}
// @lc code=end

