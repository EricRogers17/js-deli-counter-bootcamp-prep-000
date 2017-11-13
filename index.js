var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName) {
  // update the line by pushing the new customer onto the array
  katzDeliLine.push(customerName);
  // return a message about their position in line
  return 'Welcome, ' + customerName + '. You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing() {
  // first check to see if there are customers waiting to be served
  if(katzDeliLine === null) {
    return 'There is nobody waiting to be served!'
  } else {
    // grab the person being served before updating array
    let nowServed = katzDeliLine[0];
    // update the array by removing the first person
    katzDeliLine.shift();
    return 'currently serving ' + nowServed + '.';
  }
}
