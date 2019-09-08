/*
Example 1:

detectBoxSize([
  ['x', 'x'],
  ['o', 'o']
])

Returns "2x2"

Example 2:

detectBoxSize([
  ['x', 'x', 'o'],
  ['o', 'o', 'ñ'],
  ['o', 'x', 'ñ'],
])

Returns "3x3"
*/
function detectBoxSize(box) {
    if (!box) {
        return null;
    }
    if (!box.every(row => row.length === box[0].length)) {
        throw new Error('All input array should be with the same size');
    }
    return box.length + 'x' + box.length;
}
export default detectBoxSize;
