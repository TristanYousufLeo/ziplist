const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function ziplist(first, second) {
  const finalList = [];
  for (let i = 0; i < first.length; i++) {
    finalList.push(first[i], second[i]);
  }
  return finalList;
}

console.log(ziplist(list1, list2));

const zipListTheSimpleWay = (first, second) => _.zip(first, second);

console.log(zipListTheSimpleWay(list1, list2));
