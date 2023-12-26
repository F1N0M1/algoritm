let start = performance.now();
let shekerSortArray = shekersort(rndNumberArray);
const time = performance.now() - start;

console.log("=== function end for: " + time + " msec ===");

console.log(shekerSortArray);

function shekersort(array) {
  let itSorted = false;
  let arrayLengh = array.length - 1;

  while (!itSorted) {
    itSorted = true;
    for (let i = 0; i < arrayLengh; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        itSorted = false;
      }
    }
    for (let j = arrayLengh; j > arrayLengh; j--) {
      if (array[j] < array[j - 1]) {
        let tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
        itSorted = false;
      }
    }
  }
  return array;
}