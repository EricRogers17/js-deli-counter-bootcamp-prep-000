var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName) {
  // update the line by pushing the new customer onto the array
  katzDeliLine.push(customerName);
  // return a message about their position in line
  return 'Welcome, ' + customerName + '. You are number ' + katzDeliLine.length + ' in line.'
}
