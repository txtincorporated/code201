// Code 201 Day 02
// Demo code for lecture & lab

var userName = prompt('What is your name?');
console.log('User is named ' + userName);

alert('Alright, ' + userName + ', let the Challenge begin. Are you ready to answer some stumpers about Nathan P. Keene?');
contestant.textContent = userName;

var playerScore = 0;//set starting score
var keepAsking = true;//limit number of iterations

while (keepAsking) {//Question 1
  points.textContent = playerScore;
  var userResponse = prompt('Will you wager that Nathan was born in Idaho?');
  console.log('userResponse: ' + userResponse);
  birthplace.textContent = 'Was NPK born in Idaho?' + ' -- ' + userResponse;

  if (userResponse.toLowerCase() === 'y' || userResponse.toUpperCase() === 'YES') {//Question 1 right, Qstn2
    playerScore ++;
    points.textContent = playerScore;
    userResponse = prompt('Yes, ' + userName + ', you\'re off to a roaring start! Now, how about Mr. Keene\'s profession:  would you say he has been an educator most of his years?');
    console.log('userResponse: ' + userResponse);
    profession.textContent = 'Did Keene use to teach?' + ' -- ' + userResponse;
  } else if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {//Question1 wrong, Qstn2
    userResponse = prompt('Awww, no points for you, ' + userName + '. Nathan\'s always been a ol\' spud at heart!  But how about Mr. Keene\'s profession:  would you say he has been an educator most of his years?');
    console.log('userResponse: ' + userResponse);
    profession.textContent = 'Did Keene use to teach?' + ' -- ' + userResponse;
    }
  if (userResponse.toLowerCase() === 'y' || userResponse.toUpperCase() === 'YES') {//Question 2 right, Qstn3
    playerScore ++;
    points.textContent = playerScore;
    userResponse = prompt('That\'s right, ' + userName + ', go to the head of the class! Now, how about his interests?  Would you say his reputation is his number one concern?');
    console.log('userResponse: ' + userResponse);
    interests.textContent = 'IS Nathan P. Keene really image-obsessed?' + ' -- ' + userResponse;
  } else if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {//Question 2 wrong, Qstn3
  userResponse = prompt('Nope! Dang, ' + userName + ', you just got schooled! Anyways, how about his interests?  Would you say his reputation is his number one concern?');
  console.log('userResponse: ' + userResponse);
  interests.textContent = 'IS Nathan P. Keene really image-obsessed?' + ' -- ' + userResponse;
  }
  if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {//Question 3 right, thx for playing
    playerScore ++;
    points.textContent = playerScore;
    userResponse = alert('You got it, ' + userName + '.  It\'s all about those kids, innit?  Now, click to see your final score!');
    keepAsking=false;
  } else {//Question 3 wrong, thx for playing
  userResponse = alert('Awwww! You\'ve played valiantly, ' + userName + ', but it\'s clear old Nate cares more about his kids than anything in the world. Now, click to see your final score!');
  keepAsking=false;
  }

} // That's all folks
