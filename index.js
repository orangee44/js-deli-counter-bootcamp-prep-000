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
    for (var i=0; i<line.length; i++) {
      return `The line is currently: ${i+1} ${line}`
    }
    
  }
  else {
    return 'The line is currently empty.'
  }
}

  1) deli currentLine(line) says who is in line when there are people waiting:

      Error: Expected 'The line is currently: Bill,Jane,Ann' to equal 'The lineis currently: 1. Bill, 2. Jane, 3. Ann'
      + expected - actual

      -The line is currently: Bill,Jane,Ann
      +The line is currently: 1. Bill, 2. Jane, 3. Ann
