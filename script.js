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
