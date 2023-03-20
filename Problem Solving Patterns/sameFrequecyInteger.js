function sameFrequencyInteger(one, two) {
  let numberOne = one.toLocaleString();
  let numberTwo = two.toLocaleString();

  let ONE = {};
  let TWO = {};

  if (numberOne.length !== numberTwo.length) {
    console.log("FALSE");
    return;
  }

  for (let val of numberOne) {
    ONE[val] ? ONE[val]++ : (ONE[val] = 1);
  }

  for (let val of numberTwo) {
    TWO[val] ? TWO[val]++ : (TWO[val] = 1);
  }

  for (key in ONE) {
    if (ONE[key] !== TWO[key]) {
      console.log("FALSE");
      return;
    }
  }

  console.log("TRUE");
}

sameFrequencyInteger(802, 208);
