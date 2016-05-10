// Code 201 Day 02
// Demo code for lecture & lab

var userName = prompt('What is your name?');
console.log('User is named ' + userName);

alert('Alright, ' + userName + ' Let the Challenge begin. Are you ready to answer some stumpers about Nathan P. Keene?');

var keepAsking = true;

while (keepAsking) {
  var userResponse = prompt('Was, I born on the moon?');
  console.log('userResponse: ' + userResponse);

  if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
    alert('Nope, I was actualy born on the moon. I\'ma moonian computer language.');
    keepAsking = false;
  } else if (userResponse === 'Y') { // TODO: Make this more robust!
    alert('Nice, I was born on the moon');
    keepAsking = false;
  } else {
    alert('Ooops!, you should have given a Y or N, so you loose this round.');
  }

} // while
