module.exports = function longestConsecutiveLength(arr) {
  let longest    = { curr: 1, max: 1 },
      collection = new Set(arr);

  collection.forEach(item => {
    for (let next = item + 1; collection.has(next); next++) {
        if (++longest.curr > longest.max) longest.max = longest.curr;
    }

    longest.curr = 1;
  });

  return collection.size ? longest.max : 0;
}