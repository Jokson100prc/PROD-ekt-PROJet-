const arr = [144, 56, 6, 734, 186, 44, 17, 29];
console.table(arr);


// FILTER
const oddNumber = arr.filter(number => number % 2);
console.table(oddNumber);
const evenNumber = arr.filter(number => (number % 2) - 1);
console.table(evenNumber);

// MAP
const people = arr.map(people => people + " people")
console.table(people);
const triple = arr.map(triple => triple * 3)
console.table(triple);

arr.forEach((item, index) => arr[index] = item * 2.5);
console.table(arr);