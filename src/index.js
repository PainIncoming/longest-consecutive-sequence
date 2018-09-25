module.exports = function longestConsecutiveLength(arr) {
  let longest = { curr: 1, max: 1 },
    length = arr.length;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      if (++longest.curr > longest.max) longest.max = longest.curr;
    } else if (arr[i] !== arr[i + 1]) longest.curr = 1;
  }

  return length ? longest.max : 0;
}