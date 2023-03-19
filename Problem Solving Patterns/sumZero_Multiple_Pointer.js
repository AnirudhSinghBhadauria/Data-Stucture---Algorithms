// [-3,-2,-1,0,1,2,3]

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  let sum = arr[right] + arr[left];

  while (right > left) {
    if (sum === 0) {
      console.log([arr[left], arr[right]]);
      return;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

sumZero([-3,-2,-1,0,1,2,3])