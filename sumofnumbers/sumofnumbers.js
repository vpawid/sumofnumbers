const arr = [2, 4, 6, 8,];

function sumFor(theList) {
  let total = 0;
  for (const item of theList) {
    total += item;
  }
  return total;
}

console.log(sumFor(arr));

function sumWhile(theList) {
  let total = 0;
  let itter = 0;
  while (itter < theList.length) {
    total += theList[itter];
    itter++;
  }
  return total;
}

console.log(sumWhile(arr));


function sumRecursion(theList) {
  if (theList.length === 0) {
    return 0;
  }
  return theList[0] + sumRecursion(theList.slice(1, theList.length));
}
console.log(sumRecursion(arr));

function sumTheSimpleWay(theList) {
  return _.reduce(theList, (memo, num) => {
    return memo + num;
  }, 0);
}
console.log(sumTheSimpleWay(arr));
