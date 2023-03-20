function averagePair(array, target) {
  let i = 0;
  let j = array.length - 1;

  let first = array[i];
  let second = array[j];

  while (j > i) {
    let avg = (first + second) / 2;

    if (avg === target) {
      console.log("TRUE");
      return;
    } else if (avg > target) {
      i++;
    } else {
      j--;
    }
    console.log("FALSE");
    return;
  }
}

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
