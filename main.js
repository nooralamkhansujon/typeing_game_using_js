


//GLOBALS

// Avilable Levels
const levels= {
  easy:15,
  medium:13,
  hard:2
}
let currentLevel = levels.medium;
const Input_levels = document.getElementById('levels');
let time  = currentLevel;
//select levels
Input_levels.addEventListener('change',function(e){
  currentLevel = Number.parseInt(this.value)+1;
  time         = currentLevel;
  console.log(currentLevel);
});  


let score = 0;
let isPlaying;

const wordInput    = document.querySelector('#word-input');
const currentWord  = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay  = document.querySelector('#time');
const message      = document.querySelector('#message');
const seconds      = document.querySelector('#seconds');
const start        = document.getElementById('start');


const words =[
  'hat',  'river','lucky',  'status','generate','stuborn','cocktail','runway',  'joke','developer','establishment',  'hero',  'football','thanks','wait','syncronous','asyncronous','direction','whichwill','love','arrange','citizen','flowers','goodmorning','nothing','happen','foods',
  'rice','master'];

  

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
  currentWord.innerHTML       =  wordlist[randIndex];
  currentWord.classList.add('text-success');
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
   if(!isPlaying & time === 0){
      message.innerHTML = "GAME Is Over!!!";
      message.classList.add('text-danger');
      score=-1;
   }

}



start.addEventListener('click',init);
