module.exports = function longestConsecutiveLength(array) {
  if(array.length < 2) return array.length;
  let length = 1;
  array.sort((a, b) => a - b);
  let result = 0;
  for(let i = 1; i < array.length; i++) {
    if(array[i] === array[i - 1] + 1) {
      length += 1;
    } else if(array[i] === array[i - 1]) {
      continue;
    } else {
      result = Math.max(result, length);
      length = 1;
    }
  }
  return result;
}