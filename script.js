const CurrentTime = new Date();
const thisYear = CurrentTime.getFullYear();
const thisMonth = CurrentTime.getMonth()+1;//Month started from 0 somehow..
const thisDate = CurrentTime.getDate();
const rgp = document.querySelector(".prof");
const dmcage = document.querySelector(".dmcage");
const menu = document.querySelector(".menubar");
const arw = document.querySelector(".menuarw");
const musicbg = document.querySelector("audio");
const musicicon = document.querySelector(".musicbtn p");

var age = (thisMonth>=11) ? thisYear-2008 : thisYear-2009;
var musicmd = false;

function randInt(min=0,max=Number.MAX_SAFE_INTEGER){
  return Math.floor(Math.random()*(max-min+1))+min;
};
function menuBtn(){
  menu.style.width = menu.style.width=="270px" ? "0px" : "270px";
  menu.style.borderRight = menu.style.width=="270px" ? "2px solid white" : "0px solid white";
  arw.style.transform = menu.style.width=="270px" ? "translateX(-50%)translateY(-1px)rotate(90deg)" : "translateX(-50%)translateY(-1px)rotate(-90deg)";
};
function musicSet(){
  musicmd = !musicmd
  musicicon.style.color = musicmd ? "aqua" : "white";
  musicicon.style.transform = musicmd ? "rotate(360deg)" : "rotate(0deg)";
  musicmd ? musicbg.play() : musicbg.pause();
};
function shuffleProf(){
  rgp.src = "assets/ctrimg0"+String(randInt(1,5))+".jpg";
};

rgp.addEventListener("click", () => {
  rgp.style.borderRadius = "0px";
  setTimeout(() => {
    rgp.style.borderRadius = "50%";
  },1500);
});

shuffleProf();
dmcage.textContent = `I'm from Indonesia. Born on November 2008 (${age} Years old).`;