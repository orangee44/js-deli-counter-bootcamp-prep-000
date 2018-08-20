function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length>0) {
    return `Currently serving ${katzDeli[0]}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

  1) deli nowServing returns an announcement about the person it is serving, and shifts the line:

      Error: Expected [ 'Steven', 'Blake', 'Avi' ] to equal [ 'Blake', 'Avi' ]
      + expected - actual

       [
      -  "Steven"
         "Blake"
         "Avi"
       ]

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.it (test/index-test.js:40:24)
