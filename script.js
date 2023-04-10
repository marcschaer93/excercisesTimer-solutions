
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