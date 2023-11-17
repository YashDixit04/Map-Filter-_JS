// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const doubleNum = numbers.map(num => num * 2)

// console.log(doubleNum)


// numbers.forEach(function(number) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// })

// function printSquare(numbers) {
//   numbers.forEach(function(number) {
//     const square = number * number;
//     console.log(square);
//   });
// }
// printSquare(numbers);


// function doubleArray(numbers){
//   const doubleNum = numbers.map(num => num*2);
//   return doubleNum;
// }

// const doubleNum = doubleArray(numbers)
// console.log(doubleNum)

// function greetNames(name){
//   let data = namesArray.forEach(name => console.log("hello, " + name))
//   return data;
// }

// const namesArray = ["Alice", "Bob", "Yash", "Kaushik", "Ashish", "Shubham"]
// greetNames(namesArray)


// funtion calculateTotal(price){
//   let value = 0
//    price.forEach(value += price)
//   return value;
// }
// const priceArray =[10,20, 30 ,40]
// const fullVal = calculateTotal(priceArray);
// console.log(fullVal);

// function calculateTotal(prices) {
//   let totalPrice = 0;

//   prices.forEach(price => totalPrice += price );

//   return totalPrice;
// }

// const pricesArray = [10, 20, 30, 40];
// const total = calculateTotal(pricesArray);
// console.log(total);


// function greetCal(prices){
//   let total =0;
//   prices.forEach(value => total += value)
//   return total;
// }

// const totalval = greetCal(pricesArray)
// console.log(totalval)


// const celsiusTempa = [{value:0},{value:15},{value:30},{value:45}]
// const fahreheit = celsiusTempa.map(temp => (temp.value * 9/5) +32)
// console.log(fahreheit)

// const name =["john", "yash", "akshita", "dixit"]   ------ FOrEach
// const capitalize =[];

// name.forEach(function(nameInfo){
//   capitalize.push(nameInfo.charAt(0).toUpperCase() + nameInfo.slice(1))
// })

// console.log(capitalize)


// const name =["john", "yash", "akshita", "dixit"]
// const upperCase = name.map(names => names.charAt(0).toUpperCase() + names.slice(1))
// console.log(upperCase)

// const words =["john", "yash", "akshita", "dixit"]

// let totalLength = [];
// words.forEach(function(word) {
//   totalLength.push(word.length);
// });
// let total = words.map(name => name.length);
// console.log(total)


// const people = [ { name:"yash", age:22},{ name:"Akshita", age:28},{ name:"laskh", age:8},{ name:"Yashi", age:2},]

// function getAdultName(people){
//   let adultName = people.filter(adult => adult.age > 18 ).map(adult =>adult.name);
//   return adultName;
// }
// const adultName = getAdultName(people)

// console.log(adultName)


// const studentScores = {
//   Alice: 75,
//   Bob: 89,
//   Charlie: 92,
//   David: 88,
// };
// let doubleScore = Object.fromEntries(
//   Object.entries(studentScores).map(([name, score]) => ([name, score * 2]))
// );
// console.log(doubleScore)


const expenses = {
    groceries: [50, 75, 30],
    dining: [20, 40, 60],
    entertainment: [15, 25, 35],
  };
  const totalExpenses = {};
  
  Object.entries(expenses).forEach(([category, expenseList]) => {
    // Calculate the total expense for each category
    const categoryTotal = expenseList.reduce((total, expense) => total + expense, 0);
  
    // Add the category and its total expense to the new object
    totalExpenses[category] = categoryTotal;
  });
  
  console.log(totalExpenses);
  
  