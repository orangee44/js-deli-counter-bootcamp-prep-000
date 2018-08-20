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
     ReferenceError: katzDeliLine is not defined
      at nowServing (file://index.html:10:35)
      at Context.it (test/index-test.js:39:14)
