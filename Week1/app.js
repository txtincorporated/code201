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
    highOrLow(question,userResponse,ansKey);
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

function highOrLow(questionHL,userResponseHL, ansKeyHL) {
  while (userResponseHL != ansKeyHL) {
    if (userResponseHL > ansKeyHL) {
      alert('Sorry, ' + userName + ', but that\'s too high.  Try again!');
    } else if (userResponseHL < ansKeyHL) {
      alert('Sorry, ' + userName + ', but that\'s too low.  Try again!');
    }
    userResponseHL = prompt(questionHL);
    console.log('userGuess: ' + userResponseHL);
  }
  alert('Spot on, ' + userName + '. Cha-CHINNNNNNG! Let\'s get to Nate\'s ATM!');
  playerScore ++;
  guess = true;
}


 // That's all folks
