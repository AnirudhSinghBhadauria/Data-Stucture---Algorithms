function anagram(str1, str2) {
  if (str1.trim().length !== str2.trim().length) {
    console.log("Length did not match!");
    return;
  }

  let stringOne = {};

  for (let val of str1) {
    stringOne[val] ? stringOne[val]++ : (stringOne[val] = 1);
  }

  for (val of str2) {
    if (!stringOne[val]) {
      console.log("Charater did not exist in both strings.");
      return;
    } else {
      stringOne[val]--;
    }
  }
  console.log("valid anagram");
}

anagram("anagram", "margana");
