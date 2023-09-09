/* 
1232. Check If It Is a Straight Line

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 
*/

function straightLine(cordinates) {
  if (cordinates.length <= 2) return undefined;
  const y2 = cordinates[1][1];
  const y1 = cordinates[0][1];
  const x2 = cordinates[1][0];
  const x1 = cordinates[0][0];

  const m = y2 - y1 / x2 - x1;

  for (let i = 0; i < cordinates.length - 1; i++) {
    const y2 = cordinates[i + 1][1];
    const y1 = cordinates[i][1];
    const x2 = cordinates[i + 1][0];
    const x1 = cordinates[i][0];

    if (y2 - y1 / x2 - x1 !== m) return false;
  }

  return true;
}

console.log(
  straightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);
