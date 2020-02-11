/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (isBadVersion(1)) return 1;
        let start = 1, end = n;
        while (end - start !== 1) {
            let half = ~~((end + start) / 2);
            if (!isBadVersion(half)) {
                start = half;
            } else {
                end = half;
            }
        }
        return end;
    };
};
// @lc code=end

