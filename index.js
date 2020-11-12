function* flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

function sumItems(array) {
  let arrayNew = [...flatten(array, Infinity)];
  console.log(arrayNew);
  let total = 0;
  for (const num of arrayNew) {
    total += num;
  }
  return total;
}

module.exports = sumItems;
