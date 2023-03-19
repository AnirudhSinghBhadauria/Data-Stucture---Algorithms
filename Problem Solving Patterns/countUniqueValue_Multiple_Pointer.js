//  i
// [-3,-2,-1,0,1,2,3]
//      j

const countUniqueValue = (array) => {
  let one = 0;

  for (let two = 1; two < array.length; two++) {
    if (array[one] !== array[two]) {
      one++;
      array[one] = array[two];
    }
  }

  console.log(one + 1);
};

countUniqueValue([-3, -2, -1, 0, 1, 2, 3]);
