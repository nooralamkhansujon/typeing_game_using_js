window.addEventListener('load',init);


//GLOBALS

// Avilable Levels
const levels= {
  easy:5,
  medium:3,
  hard:2
}

//change the levels
const currentLevel = levels.medium;

let time =currentLevel;
let score =0;
let isPlaying;

const wordInput    = document.querySelector('#word-input');
const currentWord  = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay  = document.querySelector('#time');
const message      = document.querySelector('#message');
const seconds      = document.querySelector('#seconds');

const words =[
  'hat',  'river','lucky',  'status','generate','stuborn','cocktail',
  'runway',  'joke','developer','establishment',  'hero',  'football',
  'thanks','wait','syncronous','asyncronous','direction','whichwill','love',
  'arrange','citizen','flowers','goodmorning','nothing','happen','foods',
  'rice','master'
];

//initialze game

function init(){
  //Load word from array
  showWord(words);
  //start matching on word wordInput
  wordInput.addEventListener('click',startMatch);
  //Call countdown every second
  setInterval(countdown,1000);
  // Chek game status
  setInterval(checkStatus,50);
}

function startMatch(){
    if(mathcWords()){
        isPlaying=true;
        time=currentLevel+1;
        showWord(words);
        wordInput.value='';
        score++;
    }
    //if score is -1 display 0;
    if(score == -1){
        scoreDisplay.innerHTML=0;
    }
    else{
       scoreDisplay.innerHTML=score;
    }

}
//math currentWord to word Input
function mathcWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML="Correct!!";
    return true;
  }else{
    message.innerHTML='';
    return false;
  }
}

function showWord(wordlist){

  /// Generate radnom array Index
  const randIndex = Math.floor(Math.random()*wordlist.length);
  //Output random word
  currentWord.innerHTML =wordlist[randIndex];
}
function countdown()
{
  // Make sure time is not run out
  if(time >0){
    //decrement;
    time--;
  }
  else if (time === 0){
    // game is over
    isPlaying=false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus(){
   if(!isPlaying & time ===0){
      message.innerHTML = "GAME Is Over!!! ";
      score=-1;
   }

}
