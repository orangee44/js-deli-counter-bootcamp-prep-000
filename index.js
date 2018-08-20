function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine === null) {
    return 'There is nobody waiting to be served!'
  }
}
