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

// Detect pangram
function isPangram(string){
  return string.match(/([a-z])(?!.*\1)/ig).length === 26;
}

// Human readable

function humanReadable (seconds) {
  let formatSeconds = new Intl.DateTimeFormat('en-GB', {timeStyle: "medium" }).format(seconds * 1000);
  if (seconds >= 86399) {
    let hours = Math.floor(seconds / 3600);
    let mins = formatSeconds.slice(2);
    return hours + mins;
  } else {
    return formatSeconds;
  }
}

// RGB to hex 'to be refactored'

function rgb(r, g, b){
  let rangeChecker = [r, g, b].map(num => {
    if (num > 255) {
      return 255;
    } else if (num < 0) {
      return 0;
    } else {
      return num;
    }
  });
 
  let rgb = [...rangeChecker].map(num => parseFloat(num / 16).toFixed(2).split("."));
  
  let hexValues = rgb.map(num => {
    let {0: left, 1: right} = num;   
    left = parseFloat(left)
    right = Math.round(right * 0.01 * 16);
    return [left, right];
  });
  
  const convertToHex = (num) => {
    if (num == 10) {
      return 'A';
    } else if(num == 11) {
      return 'B';
    } else if(num == 12) {
      return 'C';
    } else if(num == 13) {
      return 'D';
    } else if(num == 14) {
      return 'E';
    } else if(num == 15) {
      return 'F';
    } else if(num > 15) {
      return 'F';
    } else if(num < 0) {
      return '0';
    } else {
      return num.toString()
    }
  }
  
  return hexValues.map(values => {
    let {0: left, 1: right} = values;
    let result = ''
    result += convertToHex(left);
    result += convertToHex(right);
    return result;
  }).join("")
}

//  Maximum Subarray - O(n) solution
var maxSubArray = function(nums) {
  // to hold value of max sum encountered
 let maxSum = -Infinity;
   
 // to hold value of current sum as we iterate
 let currSum = 0;
 
 for (let i = 0; i < nums.length; i++) {
   /*
     take currSum as the max between the current num
     or the result of adding current num to currSum.
   */
   currSum = Math.max(currSum + nums[i], nums[i]);
   /*
     update max sum if currSum exceeds it.
   */
   maxSum = Math.max(maxSum, currSum);
 }
 
 return maxSum;
};