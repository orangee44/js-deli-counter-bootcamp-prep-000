function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length>0) {
    return `Currently serving ${katzDeli.shift()}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  if (line.length > 0) {
    return `The line is currently: ${line}`
  }
  else {
    return 'The line is curretly empty.'
  }
}


  1) deli currentLine(line) returns "The line is currently empty." if no one isin line:

      Error: Expected 'The line is currently: ' to equal 'The line is currentlyempty.'
      + expected - actual

      -The line is currently:
      +The line is currently empty.

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.it (test/index-test.js:46:31)
