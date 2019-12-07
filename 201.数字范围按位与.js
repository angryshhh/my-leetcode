/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    /*
	示例
		转二进制    不变的位置  变化的位置
	56	111000		1110		00
	57	111001		1110		01
	58	111010		1110		10
	
	与运算结果
	56  111000		1110		00 
	
	*/

  if (m === 0) return 0;
	if (m === n) return m;
	let change = (n - m).toString(2).length;
	return (m & n) >> change << change;
};
// @lc code=end

