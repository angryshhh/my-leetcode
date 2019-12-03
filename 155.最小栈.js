/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = null;
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min === null || this.min > x) this.min = x;
}
/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let result = this.stack.pop();
  if (this.stack.length === 0) this.min = null;
  else if (result === this.min) {
    this.min = Math.min(...this.stack);
  }
  return result;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length > 0) return  this.stack[this.stack.length - 1];
  else return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

