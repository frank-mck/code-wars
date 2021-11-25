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