const CurrentTime = new Date();
const thisYear = CurrentTime.getFullYear();
const thisMonth = CurrentTime.getMonth()+1;//Month started from 0 somehow..
const thisDate = CurrentTime.getDate();
const rgp = document.querySelector(".prof");
const dmcage = document.querySelector(".dmcage");

var imgsh = ["ctrimg01.jpg","ctrimg02.jpg","ctrimg03.jpg","ctrimg04.jpg","ctrimg05.jpg"];
var age = ((thisMonth>=11)&&(thisDate>=10)) ? thisYear-2008 : thisYear-2009;
var musicmd = false;

function randInt(min=0,max=Number.MAX_SAFE_INTEGER){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function menuBtn(){
  var menu = document.querySelector(".menubar");
  var arw = document.querySelector(".menuarw");
  menu.style.width = menu.style.width=="270px" ? "0px" : "270px";
  menu.style.borderRight = menu.style.width=="270px" ? "2px solid white" : "0px solid white";
  arw.style.transform = menu.style.width=="270px" ? "translateX(-50%)rotate(90deg)" : "translateX(-50%)rotate(-90deg)";
};
function musicSet(){
  var musicbg = document.querySelector("audio");
  var musicicon = document.querySelector(".musicbtn p");
  musicmd = !musicmd
  musicicon.style.color = musicmd ? "aqua" : "white";
  musicicon.style.transform = musicmd ? "rotate(360deg)" : "rotate(0deg)";
  musicmd ? musicbg.play() : musicbg.pause();
};
function shuffleProf(){
  rgp.src = "assets/"+imgsh[randInt(0,imgsh.length-1)];
};

rgp.addEventListener("click", () => {
  rgp.style.borderRadius = "0px";
  setTimeout(() => {
    rgp.style.borderRadius = "50%";
  },1500);
});

rgp.src = "assets/"+imgsh[randInt(0,imgsh.length-1)];
dmcage.textContent = `I'm from Indonesia. Born on November 2008 (${age} Years old).`;