const fs = require("fs");
fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const lines = data.split("\n");
  const arr1 = [];
  const arr2 = [];
  lines.forEach((line) => {
    const numbers = line.split(/\s+/); // Bo'sh joylar orqali ajratish
    if (numbers.length === 2) {
      arr1.push(parseInt(numbers[0])); // Birinchi sonni array1 ga qo'shish
      arr2.push(parseInt(numbers[1])); // Ikkinchi sonni array2 ga qo'shish
    }
  });
  function findDistance(array1, array2) {
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    let distance = 0;

    for (let i = 0; i < array1.length; i++) {
      distance += Math.abs(array1[i] - array2[i]);
    }
    return distance;
  }
  function secondQuestion(array1, array2) {
    let total = 0;
    for (let i = 0; i < array1.length; i++) {
      let count = 0;
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          ++count;
          if (array2.length - 1 === j) {
            total += Math.abs(array1[i] * count);
            break;
          } else {
            continue;
          }
        } else if (array2.length - 1 === j && count !== 0) {
          total += Math.abs(array1[i] * count);
          break;
        } else if (array2.length - 1 === j && count === 0) {
          total += Math.abs(array1[i] * count);
        }
      }
    }
    return total;
  }
  console.log(secondQuestion(arr1, arr2));
});
