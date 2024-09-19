var playIcon = document.querySelector('#PlayIcon ');
var puzzlesIcon = document.querySelector('#PuzzlesIcon ');
var learnIcon = document.querySelector('#LearnIcon ');
var watchIcon = document.querySelector('#WatchIcon ');
var newsIcon = document.querySelector('#NewsIcon ');
var socialIcon = document.querySelector('#SocialIcon ');
var moreIcon = document.querySelector('#MoreIcon ');



var playNav = document.querySelector('.play-wrapper');
var puzzlesNav = document.querySelector('.puzzles-wrapper');
var learnNav = document.querySelector('.learn-wrapper');
var watchNav = document.querySelector('.watch-wrapper');
var newsNav = document.querySelector('.news-wrapper');
var socialNav = document.querySelector('.social-wrapper');
var moreNav = document.querySelector('.more-wrapper');

console.log("suyash");
playIcon.addEventListener('mouseover', ()=>{
    playNav.classList.add("active"); 
})
playIcon.addEventListener('mouseleave', ()=>{
    playNav.classList.remove("active"); 
})

puzzlesIcon.addEventListener('mouseover', ()=>{
    puzzlesNav.classList.add("active"); 
})
puzzlesIcon.addEventListener('mouseleave', ()=>{
    puzzlesNav.classList.remove("active"); 
})

learnIcon.addEventListener('mouseover', ()=>{
    learnNav.classList.add("active"); 
})
learnIcon.addEventListener('mouseleave', ()=>{
    learnNav.classList.remove("active"); 
})

watchIcon.addEventListener('mouseover', ()=>{
    watchNav.classList.add("active"); 
})
watchIcon.addEventListener('mouseleave', ()=>{
    watchNav.classList.remove("active"); 
})

newsIcon.addEventListener('mouseover', ()=>{
    newsNav.classList.add("active"); 
})
newsIcon.addEventListener('mouseleave', ()=>{
    newsNav.classList.remove("active"); 
})

socialIcon.addEventListener('mouseover', ()=>{
    playNav.classList.add("active"); 
})
socialIcon.addEventListener('mouseleave', ()=>{
    playNav.classList.remove("active"); 
})

moreIcon.addEventListener('mouseover', ()=>{
    playNav.classList.add("active"); 
})
moreIcon.addEventListener('mouseleave', ()=>{
    playNav.classList.remove("active"); 
})

const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".left")
const wrapper = document.querySelectorAll(".wrapper")
const smallNav = document.querySelector(".smallNav")
const logo = document.querySelector(".smallNav .logo")

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
    smallNav.classList.toggle("active");
    wrapper.classList.toggle("active");
    logo.classList.toggle("active");
})

