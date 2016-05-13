// Code 201 Day 02
// Demo code for lecture & lab
var points = document.getElementById('points');
var user = document.getElementById('contestant');


var userName = prompt('What is your name?');
console.log('User is named ' + userName);
user.textContent = userName;
var playerScore = 0;//set starting score
var guess = false;
var questionIds = ['whereLived', 'birthplace', 'profession', 'interests', 'secretNumber'];
var questionType = ['multipleAnswers','tf','tf','tf','highorlow'];
var answerKeys = [['tokyo', 'brooklyn', 'new york', 'nyc', 'new york city'], ['y', 'YES'], ['y', 'YES'], ['n', 'NO'], 49];
var feedback = [
  ['Great start, ' + userName + '!', 'Oops, ' + userName + ', time to move on!'],
  ['Yes, ' + userName + ', you\'re really doing great!', 'Awww, no points for you, ' + userName + '.'],
  ['That\'s right, ' + userName + ', go to the head of the class!','Nope! Dang, ' + userName + ', you just got schooled!'],
  ['You got it, ' + userName + '.  It\'s all about those kids, innit?', 'Awwww! You\'ve played valiantly, ' + userName + ', but it\'s clear old Nate cares more about his kids than anything in the world.'],
  ['Spot on, ' + userName + '. Cha-CHINNNNNNG! Let\'s get to Nate\'s ATM!', 'Sorry, ' + userName + ', but that\'s too high.  Try again!','Sorry, ' + userName + ', but that\'s too low.  Try again!'] ];


for (i = 0;i < questionIds.length; i++) {
  if(i === 0 ) {
    superQuiz(questionIds[i],questionType[i], answerKeys[i],['','']);
  } else {
    superQuiz(questionIds[i],questionType[i], answerKeys[i],feedback[i-1]);
  }
  points.textContent = playerScore;
}

function superQuiz(id, qType, ansKey, feedback) {
  var questionId = document.getElementById(id);
  var question = questionId.textContent;
  if(guess === true) {
    var userResponse = prompt( feedback[0]+ question);
  } else {
    userResponse = prompt(feedback[1] + question);
  }
  if(qType === 'multipleAnswers') {
    multipleAnswers(question,userResponse, ansKey);
  } else if (qType === 'tf') {
    tf(userResponse,ansKey);
  } else if( qType === 'highorlow') {
    highOrLow(userResponse,ansKey);
  }
}

function multipleAnswers(questionMA, userResponseMA, ansKeyMA) {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < ansKeyMA.length; j++) {
      if (userResponseMA.toLowerCase() === ansKeyMA[j]) {
        guess = true;
        playerScore++;
        console.log('userResponse: ' + userResponseMA);
        return;
      } else {
        guess = false;
      }
    }
    questionMA = 'Sorry try again.';
    userResponseMA = prompt(questionMA + ' You have ' + (4 - (i + 1)) + ' guesses!');
  };
}

function tf(userResponseTA,ansKeyTA) {
  if (userResponseTA.toLowerCase() === ansKeyTA[0] || userResponseTA.toUpperCase() === ansKeyTA[1]) {
    playerScore++;
    guess = true;
  } else {
    guess = false;
  }
}

function highOrLow(userResonseHL, ansKeyHL) {
  
}

// alert('Alright, ' + userName + ', let the Challenge begin. Are you ready to answer some stumpers about Nathan P. Keene?');
// contestant.textContent = userName;
// var playerScore = 0;//set starting score
//
// var ansKeyMA = ['Tokyo', 'Brooklyn', 'New York', 'NYC', 'New York City'];
// var livedIn = false;
// var question = document.getElementById(questionsIds[i]);
// var promptString = question.textContent;
//
//
// for (i = 0; i < 3; i++) {
//   var userResponse = prompt(promptString1 + ' You have ' + (4 - (i + 1)) + ' guesses!');
//
//   var guess = false;
//   for (j = 0; j < cities.length; j++) {
//     if (userResponse.toLowerCase() === cities[j].toLowerCase()) {
//       guess = true;
//     }
//   }
//   if (guess) {
//     playerScore ++;
//     console.log('userResponse: ' + userResponse);
//     break;
//   } else {
//     promptString1 = 'Sorry try again.';
//   }
// };
//
// var keepAsking = true;//limit number of iterations
//
// while (keepAsking) {//Question 1
//   whereLived.textContent = 'Where else has he lived?' + ' -- ' + userResponse;
//   points.textContent = playerScore;
//   if (playerScore >= 1) {
//     var userResponse = prompt('Great start, ' + userName + '! Next question: will you wager that Nathan was born in Idaho?');
//     console.log('userResponse: ' + userResponse);
//     birthplace.textContent = 'Was NPK born in Idaho?' + ' -- ' + userResponse;
//   } else {
//     var userResponse = prompt('Oops, ' + userName + ', time to move on! Will you wager that Nathan was born in Idaho?');
//     console.log('userResponse: ' + userResponse);
//     birthplace.textContent = 'Was NPK born in Idaho?' + ' -- ' + userResponse;
//
//   }
//   if (userResponse.toLowerCase() === 'y' || userResponse.toUpperCase() === 'YES') {//Question 1 right, Qstn2
//     playerScore ++;
//     points.textContent = playerScore;
//     userResponse = prompt('Yes, ' + userName + ', you\'re really doing great! Now, how about Mr. Keene\'s profession:  would you say he has been an educator most of his years?');
//     console.log('userResponse: ' + userResponse);
//     profession.textContent = 'Did Keene use to teach?' + ' -- ' + userResponse;
//   } else if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {//Question1 wrong, Qstn2
//     userResponse = prompt('Awww, no points for you, ' + userName + '. Nathan\'s always been an ol\' spud at heart!  But how about Mr. Keene\'s profession:  would you say he has been an educator most of his years?');
//     console.log('userResponse: ' + userResponse);
//     profession.textContent = 'Did Keene use to teach?' + ' -- ' + userResponse;
//   }
//   if (userResponse.toLowerCase() === 'y' || userResponse.toUpperCase() === 'YES') {//Question 2 right, Qstn3
//     playerScore ++;
//     points.textContent = playerScore;
//     userResponse = prompt('That\'s right, ' + userName + ', go to the head of the class! Now, how about his interests?  Would you say his reputation is his number one concern?');
//     console.log('userResponse: ' + userResponse);
//     interests.textContent = 'IS Nathan P. Keene really image-obsessed?' + ' -- ' + userResponse;
//   } else if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {//Question 2 wrong, Qstn3
//     userResponse = prompt('Nope! Dang, ' + userName + ', you just got schooled! Anyways, how about his interests?  Would you say his reputation is his number one concern?');
//     console.log('userResponse: ' + userResponse);
//     interests.textContent = 'IS Nathan P. Keene really image-obsessed?' + ' -- ' + userResponse;
//   }
//   if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {//Question 3 right, thx for playing
//     playerScore ++;
//     points.textContent = playerScore;
//     userResponse = alert('You got it, ' + userName + '.  It\'s all about those kids, innit?  Now, click for your final challenge!');
//     keepAsking=false;
//   } else {//Question 3 wrong, thx for playing
//     points.textContent = playerScore;
//     interests.textContent = 'IS Nathan P. Keene really image-obsessed?' + ' -- ' + userResponse;
//     userResponse = alert('Awwww! You\'ve played valiantly, ' + userName + ', but it\'s clear old Nate cares more about his kids than anything in the world. Now, click to play a riveting game of chance!');
//     keepAsking=false;
//   }
// }
//
// console.log('Nathan\'s PIN number is ' + secretNum);
// while (secretNum != 49) {
//   var secretNum = prompt('Now it\'s time to see if we can get into ol\' NPK\'s bank account and make off with his millions!  Can you guess the first two digits of his secret number?');
//   if (secretNum > 49) {
//     alert('Sorry, ' + userName + ', but that\'s too high.  Try again!');
//   } else if (secretNum < 49) {
//     alert('Sorry, ' + userName + ', but that\'s too low.  Try again!');
//   } else {
//     alert('Spot on, ' + userName + '. Cha-CHINNNNNNG! Let\'s get to Nate\'s ATM!');
//   }
//   playerScore ++;
//   points.textContent = playerScore;
//   console.log('userGuess: ' + secretNum);
//   secretNumber.textContent = 'All of Nathan P. Keene\'s cashola' + ' -- ' + secretNum;
// }


 // That's all folks
