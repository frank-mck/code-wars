// Regex Password Validation
function validate(password) {
  return /^(?=[a-zA-Z0-9]*[0-9])(?=[a-zA-Z0-9]*[a-z])(?=[a-zA-Z0-9]*[A-Z])[a-zA-Z0-9]{6,}$/g.test(password);
}

// Duplicate encoder
function duplicateEncode(word){
  return word.toLowerCase().split("").map(str => {
    let duplicates = word.toLowerCase().split("").filter(letter => letter === str)
    if (duplicates.length > 1) {
      return ')'
    } else if (duplicates.length === 1) {
      return '('
    }
  }).join("")  
}

// Counting duplicates
function duplicateCount(text){
  let result = {};
  text.toLowerCase().split("").map(letter => {
    if (result[letter]) {
      result[letter] = result[letter] + 1
    } else {
      result[letter] = 1
    }
  })
  return Object.values(result).filter(num => num > 1).length;
}

// Shortest steps to a number 
function shortestStepsToNum(num) {
  var ticks = 0;
  while (num > 1)
    num % 2 == 0 ? num /= 2 : num--, ticks++;
  return ticks
}

// Take a Ten Minute Walk
function isValidWalk(walk) {
  let startingPoint = 0;
  if (walk.length !== 10) {
    return false;
  }
  walk.map(letter => {
    if (letter === 'n') {
      startingPoint += 1
    } else if(letter === 's') {
      startingPoint -= 1
    } else if (letter === 'w') {
      startingPoint += 2;
    } else if (letter === 'e'){
      startingPoint -= 2;
    }
  })
return startingPoint === 0 ? true : false;
}

// Move zeros
var moveZeros = function (arr) {
  let withoutZeros = arr.filter(el => /[1-9]/ig.test(el) ? parseInt(el) : /[0]/ig.test(el) ? false : true);
  let zeros = arr.join("").match(/[0]/g).map(Number)
  return withoutZeros.concat(zeros)
}

// Playing with digits
function digPow(n, p){
  let result = 0
  n.toString().split("").map((num, i) => result += num **(p+i));
  let k = Math.floor(result / n);
  return k * n == result ? k : -1
}