var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName) {
  // update the line by pushing the new customer onto the array
  katzDeliLine.push(customerName);
  // return a message about their position in line
  return 'Welcome, ' + customerName + '. You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing(katzDeliLine) {
  // first check to see if there are customers waiting to be served
  if(katzDeliLine[0] === undefined) {
    return 'There is nobody waiting to be served!'
  } else {
    // grab the person being served before updating array
    let nowServed = katzDeliLine[0];
    // update the array by removing the first person
    katzDeliLine.shift();
    return 'Currently serving ' + nowServed + '.';
  }
}

function currentLine(katzDeliLine) {
  var lineup = '';
  if(katzDeliLine[0] === undefined) {
    return 'The line is currently empty.';
  } else {
    for(let i = 0; i < katzDeliLine.length; i++) {
      lineup = i + katzDeliLine[i] + ', '
    }
  }
  return 'The line is currently: ' + lineup;
}
