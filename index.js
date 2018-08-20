function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing() {
  
}


  1) deli nowServing returns the line is empty when no one is on line:
     ReferenceError: nowServing is not defined
      at Context.it (test/index-test.js:34:7)

  2) deli nowServing returns an announcement about the person it is serving, and shifts the line:
     ReferenceError: nowServing is not defined
      at Context.it (test/index-test.js:39:7)
