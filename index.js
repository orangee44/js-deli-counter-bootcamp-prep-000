function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine > 0) {
    return katzDeliLine[0]
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

