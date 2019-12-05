--
-- @lc app=leetcode.cn id=175 lang=mysql
--
-- [175] 组合两个表
--

-- @lc code=start
-- Write your MySQL query statement below
SELECT FirstName, LastName, City, State
from Person left join Address
ON Person.PersonId = Address.PersonId;
-- @lc code=end

