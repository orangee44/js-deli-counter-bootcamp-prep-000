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
  var i = 0;
  if (line.length > 0) {
    while (i < line.length) {
      return `${i+1}. ${line[i]}` 
      i++;
    }
  }
  else {
    return "The line is currently empty."
  }
}

// function currentLine(katzDeli) {
//
//   for (let i = 0; i < katzDeli.length; i++) {
//     line.push(` `+[i+1]+`. `  + katzDeli[i])
//   }
//   return(`The line is currently:` + line);
// }
