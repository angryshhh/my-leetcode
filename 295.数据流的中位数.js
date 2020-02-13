/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.nums.push(num);

  let start = 0, end = this.nums.length;
  while (start < end) {
    let mid = ~~((start + end) / 2);
    if (num > this.nums[mid]) start = mid + 1;
    else end = mid;
  }
  this.nums.splice(start, 0, num);
  this.nums.pop();
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let len = this.nums.length;
  return len % 2 ?
    this.nums[~~(len / 2)] :
    (this.nums[len / 2 - 1] + this.nums[len / 2]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

