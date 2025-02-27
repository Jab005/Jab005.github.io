const CurrentTime = new Date();
var thisYear = CurrentTime.getFullYear();
var thisMonth = CurrentTime.getMonth()+1;//Month started from 0 somehow..
var thisDate = CurrentTime.getDate();

const imgi = document.querySelector(".imgctr img");
const hmpg = document.querySelector(".gohome");
const tart = document.querySelector("topper h1");
const sound = document.querySelector("audio");
const mscic = document.querySelector(".musicbtn p");
const hart = document.querySelector(".atch");
const part = document.querySelector(".parc");
const mart = document.querySelector(".mscp");

var musicmd = false;

function musicSet(){
  if(thisMonth==1||thisMonth==12){
    musicmd = !musicmd
    mscic.style.color = musicmd ? "aqua" : "white";
    mscic.style.transform = musicmd ? "rotate(360deg) translateY(-2px)" : "rotate(0deg) translateY(-2px)";
    musicmd ? sound.play() : sound.pause();
  }else console.log("no");
};

hmpg.addEventListener("click", () => {
  window.location.href = "../";
});

// Core Function

function forceDecember(date=thisDate,year=thisYear){
  thisDate = date;
  thisYear = year;
  thisMonth = 12;
  imgi.src = "assets/last-december.jpg";
  tart.textContent = `End of Year ${thisYear}`;
  sound.src = "assets/December-BLZ.mp3";
  sound.load();
  setTimeout(() => {
    try{
      musicmd ? sound.play() : sound.pause();
    }catch(e){
      console.error(e);
      alert("Hmm.. it seems background music having a trouble while playing...\nPlease try again to play.");
      musicSet();
      mscic.style.transform = "rotate(0deg) translateY(-2px)";
    };
  },1000);
  hart.textContent = `It's December again.. The last year of ${thisYear}...`;
  part.innerHTML = "Oh wow, did you realized it? Now it's December again...<br>Is that feels so quick or so slow? And how it's going so far for you? Is it better, worse, or neutral?<br>Friend, I want you to think for a moment..<br>What's your goal this year? Have you achieved it?<br>Yes..? Ok so, good job for you! It's like an achievement that most people failed to achieve.. You deserve that, it's good for you!<br>..or No..? Well friend, It's ok. It's good to have an ambition rather than not, you can try to achieve it in the next year.<br>I believe you can achieve it! Don't let everything stopped you from achieving it!<br>...<br>That's..<br>Hey, wanna wait until January..? Let's wait together.<br><i>Hope it.. gonna be.. better and best year for us next time...</i>";
  mart.innerHTML = '<br>> Background music: <a class="mscm" href="https://youtu.be/D3ps_IXYicI?si=AqhACFyU1i605XhW">December</a> - by BLZ';
};
function forceJanuary(date=thisDate,year=thisYear){
  thisDate = date;
  thisYear = year;
  thisMonth = 1;
  imgi.src = "assets/new-year.jpg";
  tart.textContent = `New Year ${thisYear}`;
  sound.src = "assets/January-BLZ.mp3";
  sound.load();
  setTimeout(() => {
    try{
      musicmd ? sound.play() : sound.pause();
    }catch(e){
      console.error(e);
      alert("Hmm.. it seems background music having a trouble while playing...\nPlease try again to play.");
      musicSet();
      mscic.style.transform = "rotate(0deg) translateY(-2px)";
    };
  },1000);
  hart.textContent = `Happy New Year ${thisYear}!`;
  part.innerHTML = `Friend, see! It's January ${thisYear}! Happy New Year for you!<br>I hope that you'll be better this year.. Because you've gone so far today... I hope that you can achieve your goals this time!<br>Try! Try it! Never give up quickly!<br>I know that everytime, everyone will face different problematic situations. But, never give up!<br>Even it's seems impossible, but you'll pass it, I know you will..<br>I believe you can, believe in yourself that you can!<br>...<br>That's..<br>I hope we'll meet at the end of year back.<br>Let see what will happen to you in the future..<br><i>I wish we'll be fine, we.. will.. be.. fine</i>...`;
  mart.innerHTML = '<br>> Background music: <a class="mscm" href="https://youtu.be/Zg_F21_732o?si=SwUeSGuLpsOSRm9D">January</a> - by BLZ';
};
function forceCloseSite(date=thisDate,month=thisMonth,year=thisYear){
  if((month==1)||(month==12)){
    alert("Site is closed when current month is not December or January.\nTry on another month.");
    return;
  };
  imgi.src = "assets/last-december.jpg";
  sound.src = "assets/December-BLZ.mp3";
  sound.load();
  setTimeout(() => {
    /*
    - Here is still unexpected bug comes: Transforming after valid month (e.g. Natural logic: midnight last January -> midnight first February (not tested yet, maybe need some refresh and it'll be fixed as it's not related to refreshed page), other aspects: function (January -> February, tested)) will stops music but still active-blue indication of button is shown and no console logging (failed try-catch). Needs to be discovered later.
    - NOTE: ternary works fine w/o timeout-try-catch, the damaged sector seems to be come from timeout and try-catch (it feels like higher vulnerability here).
    */
    try{
      musicmd ? () => {musicSet();console.log("no");} : () => {};
    }catch(e){
      console.error(e);
      sound.pause();
      mscic.style.transform = "rotate(0deg) translateY(-2px)";
    }
  },1000);
  tart.textContent = "It's Not The Time";
  hart.textContent = "Friend, it hasn't even december yet..";
  part.innerHTML = "Hello friend, looking for this page contents? Well I guess you didn't follow what I've said before...<br>Friend.. We'll meet in the next December.. ok?<br>Be patient!";
  mart.innerHTML = '<br>> Background music: <a class="mscm" href="https://youtu.be/Zg_F21_732o?si=SwUeSGuLpsOSRm9D">January</a> - by BLZ';
};

if(thisMonth==1){
  console.log("Hello January!");
  forceJanuary();
}else if(thisMonth==12){
  console.log("Hello.. December...");
  forceDecember();
}else{
  console.log("Hello friend, looking for this website content? Wait till December, ok?");
  forceCloseSite();
};