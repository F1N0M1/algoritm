let start = performance.now();
let quickSortArray = quicksort(rndNumberArray);
const time = performance.now() - start;

console.log("=== function end for: " + time + " msec ===");

console.log(quickSortArray);
function quicksort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quicksort(left).concat(pivot, quicksort(right));
}
