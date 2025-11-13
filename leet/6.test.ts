/* 6. Zigzag Conversion
Medium

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
 */


const convert = (s: string, numRows: number): string => {

  if (s.length < 2 || numRows === 1 || numRows >= s.length) return s;
  const matrix: string[][] = Array.from({ length: numRows }, () => []);
  let i: number = 0;
  let isGoingDown: boolean = false;

  for (const char of s) {
    matrix[i].push(char);
    if (i === 0 || i === numRows - 1) isGoingDown = !isGoingDown;
    isGoingDown ? i++ : i--;
  }

  return matrix.flat().join('');
}


describe('Return expected string', () => {
  test('Case 1', () => {
    expect(convert("PAYPALISHIRING", 3)).toStrictEqual("PAHNAPLSIIGYIR");
  });
  test('Case 2', () => {
    expect(convert("PAYPALISHIRING", 4)).toStrictEqual("PINALSIGYAHRPI");
  });
  test('Case 3', () => {
    expect(convert("A", 1)).toStrictEqual("A");
  });
});