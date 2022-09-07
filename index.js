// 1 - getting the highest digit
const num = +prompt("Enter your number");
const greatestDigit = (num = 0, greatest = 0) => {
   if(num){
      const max = Math.max(num % 10, greatest);
      return greatestDigit(Math.floor(num / 10), max);
   };
   return greatest;
};
console.log(greatestDigit(num));

//2 - getting the power of the number
const pow = (n, e) => {
    let num = n;
    for (let i = 1; i < e; i++) {
      num *= n;
    }
    return num;
  }

console.log(pow);


//3 - Capitalization
const string = "vlad";
const string2 = string.charAt(0).toUpperCase() + string.slice(1);
console.log(string2);

//4 - after tax
const calculateSalaryAfterTax = (beforeTax) => {
    let salary = beforeTax - (beforeTax * 0.195);
    return salary;
}

//5 - get random number 
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max + min);
}

console.log(getRandomNumber(1, 10));

//6 - count character occurence

function counLetters (str, letter) {
  let count = 0;

  for(let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count+=1;
    } 
  }
  return count;
}

const userString = prompt("Enter your string: "); 
const letterToCheck = prompt("Enter a letter to check: ");

const result = counLetters (userString, letterToCheck);

console.log(result);










