// Exercise 1
const arr = [9, 5, "2", "ab2", "3", -1, "ab1"];
const arr2 = [-1, 1, 10000, "2", "3", 400, 5, 9, "bgt", "ab2", "ab1"];

// the idea here is convert all values to number and if they are
// valid number then we can compare them, if they are not valid numbers
// then i convert them to string and procede with a string comparation

const compareFunction = arr.sort((a, b) => {
  const aNum = Number(a);
  const bNum = Number(b);

  const isAValidNumber = !isNaN(aNum);
  const isBValidNumber = !isNaN(bNum);

  if (isAValidNumber && isBValidNumber) {
    // a and b are valid numbers
    return aNum - bNum;
  } else if (isAValidNumber && !isBValidNumber) {
    // a is a valid number and b is not
    return -1;
  } else if (!isAValidNumber && isBValidNumber) {
    // a is not a valid number and b is
    return 1;
  } else {
    // neither is a valid number
    const aStr = String(a);
    const bStr = String(b);
    return aStr.localeCompare(bStr);
  }
});

arr.sort(compareFunction);
arr2.sort(compareFunction);

// Exercise 2
const sum = (a, b) => {
  if (a & b) {
    return a + b;
  }

  return (b) => sum(a, b);
};

console.log(sum(2, 5), sum(2)(5));

// Exercise 3
function minMaxDates(dates) {
  const parsedDates = dates.map((date) => Date.parse(date));
  const minDate = new Date(Math.min(...parsedDates));
  const maxDate = new Date(Math.max(...parsedDates));
  return { minDate, maxDate };
}

const dates = [
  "2022-06-20T12:10:36-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
  "2022-06-20T12:10:36-04:00",
  "2022-06-01T22:12:12-04:00",
];

const { minDate, maxDate } = minMaxDates(dates);
console.log(minDate, maxDate);
