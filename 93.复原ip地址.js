/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let indexesArray = [0];
  let result = [""];
  let count = 0;
  while (count < 4) {
    let tempIndexes = [];
    while (indexesArray.length > 0) {
      let index = indexesArray.shift();
      let ipString = result.shift();
      for (let i = 1; i <= 3; i++) {
        if (index + i <= s.length) {
          let tempString = s.substring(index, index + i);
          let tempInt = parseInt(tempString);
          if (tempInt <= 255 && tempString === tempInt.toString()) {
            tempIndexes.push(index + i);
            result.push(ipString + '.' + tempString);
          }
        }
      }
    }
    indexesArray = [...tempIndexes]
    count++;
  }

  for (let i = 0; i < indexesArray.length; i++) {
    if (indexesArray[i] !== s.length) {
      result.shift();
    } else {
      result.push(result.shift().substring(1));
    }
  }
  return result;
};
// @lc code=end

