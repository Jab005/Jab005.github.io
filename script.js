var musicmd = false;
var imgsh = ["ctrimg01.jpg","ctrimg02.jpg","ctrimg03.jpg","ctrimg04.jpg","ctrimg05.jpg"];

const rgp = document.querySelector(".prof");

//func copy #2
function randInt(min=0,max=Number.MAX_SAFE_INTEGER){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function menuBtn(){
  var menu = document.querySelector(".menubar");
  var arw = document.querySelector(".menuarw");
  menu.style.width = menu.style.width=="300px" ? "0px" : "300px";
  arw.style.transform = menu.style.width=="300px" ? "translateX(-50%)rotate(90deg)" : "translateX(-50%)rotate(-90deg)";
};
function musicSet(){
  var musicbg = document.querySelector("audio");
  var musicicon = document.querySelector(".musicbtn p");
  musicmd = !musicmd
  musicicon.style.color = musicmd ? "aqua" : "white";
  musicicon.style.transform = musicmd ? "rotate(360deg)" : "rotate(0deg)";
  musicmd ? musicbg.play() : musicbg.pause();
};

rgp.src = "assets/"+imgsh[randInt(0,imgsh.length-1)];
rgp.addEventListener("click", () => {
  rgp.style.borderRadius = "0px";
  setTimeout(() => {
    rgp.style.borderRadius = "50%";
  },1500);
});