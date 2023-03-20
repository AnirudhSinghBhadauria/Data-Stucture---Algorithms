function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);

  let i = 0;
  let j = 1;

  while (j < args.length) {
     if(args[i] === args[j]) {
          console.log('FALSE');
          return;
     }
     i++;
     j++;
  }
  console.log('TRUE');
}


areThereDuplicates(1,2,3,4,4,6,7,8);