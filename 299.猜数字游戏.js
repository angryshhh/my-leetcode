/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bulls = 0, cows = 0;
  let set = {};
  for (let i = 0; i < secret.length; i++) {
    if (!set[secret[i]]) {
      set[secret[i]] = 1;
    } else {
      set[secret[i]]++;
    }
  }

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
      set[secret[i]]--;
    }
  }

  for (let i = 0; i < secret.length; i++) {
    if ((secret[i] !== guess[i]) && set[guess[i]]) {
      cows++;
      set[guess[i]]--;
    }
  }
  return `${bulls}A${cows}B`;
};
// @lc code=end

