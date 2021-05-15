//Exercise: Level 1
/*
1) Declare an empty array;
2) Declare an array with more than 5 number of elements
3) Find the length of your array
4) Get the first item, the middle item and the last item of the array
5) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
6) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7) Print the array using console.log()
8) Print the number of companies in the array
9) Print the first company, middle and last company
10) Print out each company
11) Change each company name to uppercase one by one and print them out
12) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
14) Filter out companies which have more than one 'o' without the filter method
15) Sort the array using sort() method
16) Reverse the array using reverse() method
17) Slice out the first 3 companies from the array
18) Slice out the last 3 companies from the array
19) Slice out the middle IT company or companies from the array
20) Remove the first IT company from the array
21) Remove the middle IT company or companies from the array
22) Remove the last IT company from the array
23) Remove all IT companies

*/

// Solution 1
const arrEmpty = [];

// Solution 2
const arr = Array(5).fill("9");

// Solution 3
const arr5 = ["Math", "Physics", "Chemistry", "design", "Geography", "Agric"];
let arrLength = arr5.length;
console.log(arrLength);

// Solution 4
const firstElement = arr5[0];
const lastElement = arr5[arr5.length - 1];
const middleIndex = Math.floor(arr5.length / 2);
const middleElement = arr5[middleIndex];

console.log(lastElement);
console.log(middleIndex, middleElement);

// Solution 5
const mixedArrays = [
  "Bliss",
  true,
  2019,
  { coutry: "Russia" },
  { siblings: ["henry", "david", "Pure"] },
];

// solution 6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Solution 7
console.log(itCompanies);

// Solution 8
const numberOfCompaines = itCompanies.length;

// solution 9
const firstCompany = itCompanies[0];
const middleItIndex = Math.ceil(itCompanies.length / 2);
const middleItCompany = itCompanies[middleIndex];
const lastItCompany = itCompanies[itCompanies.length - 1];

console.log("***", middleItCompany, lastItCompany);

// Solution 10
const singleCompany = itCompanies.toString();
console.log(singleCompany);

// Solution 11

const comp = itCompanies.join().toUpperCase();
console.log(comp);

// Solution 12
const copyArray = itCompanies.slice();
const popedOut = copyArray.pop();
const newIT = copyArray.toString();
const changed = "and " + popedOut;
console.log(`${newIT} ${changed} are big IT companies `);

// Solution 13
const isPresent = "Joedons";
if (itCompanies.includes(isPresent)) {
  console.log("Yes we have the company Listed");
} else {
  console.log("Will soon join");
}

// Solution 14
const greaterThan1 = itCompanies.join().includes("o" > 1);
console.log(greaterThan1);

// Solution 15
const sortCompanies = itCompanies.sort();
console.log(sortCompanies);

// Solution 16
const reversedCompany = itCompanies.reverse();
console.log(reversedCompany);

// Solution 17
const removeFirst3 = itCompanies.slice(0, 3);
console.log(removeFirst3);

// Solution 18
const removeLast3 = itCompanies.slice(-3);
console.log(removeLast3);

// Solution 19

const removeMidEl = itCompanies.slice(3, 4);
console.log(removeMidEl);

// Solution 20
const firstEl = itCompanies.shift();

// Solution 21
const copiedAr = itCompanies.slice();
const removeMid = copiedAr.splice(3, 1);

//Solution 22
const lastEl = copiedAr.pop();

// Solution 23
const removeAll = copiedAr.splice();
console.log(removeAll);

//Exercise: Level 2
/*
1) Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

2) First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13

3) In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'

4) In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

5) In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

6) Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/

console.log("");
console.log("");
console.log("");
console.log("");
console.log("SOLUTION ============= Exercise 2");

// Solution 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let removePuntucation = text.replace(/[.,]/g, "");
let arrEl = removePuntucation.split(" ");
let arrLen = arrEl.length;
console.log(arrEl, arrLen);

// Solution 3
const shoppingCart = ["Milk", "Coffe", "Tea", "Honey"];
let addItemOne = shoppingCart.unshift("Meat");
let addItemTwo = shoppingCart.push("Sugar");
let removeHoney = shoppingCart.splice(4, 1);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

// Solution 4
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
}

// Solution 5
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let checkWebTech = webTechs.includes("Sass")
  ? console.log(webTechs)
  : console.log(webTechs.push("Sass"));

console.log(webTechs);

// Solution 6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Exercise: Level 3
/*
1) The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

2) Find the middle country(ies) in the countries array

3) Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
*/

console.log("");
console.log("");
console.log("");
console.log("");
console.log("SOLUTION ============= Exercise 3");

//https://www.tutorialspoint.com/calculating-median-of-an-array-javascript
// Solution 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortedAge = ages.sort();
let minAge = Math.min(...ages);
let maxAge = Math.max(...ages);

function calculateMedian(ages) {
  if (ages.length % 2 === 0) {
    const first = ages[ages.length / 2 - 1];
    const second = ages[ages.length / 2];
    const median = (first + second) / 2;
    return median;
  } else {
    const medNum = Math.floor(ages.length / 2);
    const median = ages[medNum];
    return median;
  }
}

const calculateAvgAge = ages.reduce((acc, sum) => acc + sum, 0) / ages.length;
console.log(calculateAvgAge);

const range = maxAge - minAge;
console.log(range);

const removeFirstTenCountries = countries.slice(0, 10);
console.log(removeFirstTenCountries);

// Solution 2
const midIndex = Math.floor(countries.length / 2);
const middleCountry = countries[midIndex];
console.log(middleCountry);

// Soluion 3
const equalPart = countries.length / 2;
const countriesLength = countries.length;
console.log(countriesLength);
