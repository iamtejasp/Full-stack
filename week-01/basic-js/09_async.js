function findSum(num) {
  let a = 0;
  for (let i = 1; i <= num; i++) {
    a = a + i;
  }

  return a;
}

//it will wait for 1s to execute
setTimeout(() => {
  console.log(findSum(100));
}, 1000);

console.log("Hello");
