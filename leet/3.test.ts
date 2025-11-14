/* 3 Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

// time complexity O(n)
// space complexity O(1)
const lengthOfLongestSubstring = (string: String): number => {
  let res = 0;
  let dict = new Map();

  for (let rightIndex = 0, leftIndex = 0; rightIndex < string.length; rightIndex++) {
    let char = string[rightIndex];
    if (dict.has(char)) leftIndex = Math.max(dict.get(char) + 1, leftIndex);
    res = Math.max(res, rightIndex - leftIndex + 1);
    dict.set(char, rightIndex);
  }
  
  return res;
}



describe('Test lengthOfLongestSubstring', () => {
  test('Case 1: "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toStrictEqual(3);
  });
  test('Case 2: "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toStrictEqual(1);
  });
  test('Case 3: "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toStrictEqual(3);
  });
  test('Case 4: "abba"', () => {
    expect(lengthOfLongestSubstring('abba')).toStrictEqual(2);
  });
});