//COUNTDOWN

const countdown = (num) => {
  let interval = setInterval(function() {
    num--;
      if(num <= 0) {
        clearInterval(interval);
        console.log('DONE');
      } 
      else {console.log(num)
      };
  },1000) 
}

countdown(5);





//COUNTUP

const countUp = (time) => {
  let timer = setInterval(function() {
    time++;
      if(time >=10) {
        clearInterval(timer);
        console.log('Wake Up! 10h are enought sleep!')
      }
      else {console.log('sleeping hours =', time);}
  },1000)
}

countUp(0);





// RANDOM GAME

const randomGame = () => {
  let tries = 0;
  let timer = setInterval(function() {
    let randomNumber = Math.random();
    tries++;
    if(randomNumber > .75) {
      clearInterval(timer);
      console.log(`It took ${tries} tries to get a random number higher than 0.75`)
    }
  },500)
}


randomGame();
