function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine) {
    return `Currently serving ${katzDeliLine[0]}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

  1) deli nowServing returns the line is empty when no one is on line:

      Error: Expected 'Currently serving undefined.' to equal 'There is nobody waiting to be served!'
      + expected - actual

      -Currently serving undefined.
      +There is nobody waiting to be served!

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.it (test/index-test.js:34:30)
