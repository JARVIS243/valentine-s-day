// ------------------------
// HER NAME SETUP
// ------------------------
const herName = "Sivani"; // Replace with actual name
document.getElementById("herName").innerText = herName;
document.getElementById("herNameLetter").innerText = herName;
document.getElementById("herNameYes").innerText = herName;

// ------------------------
// FIRST SURPRISE & VIDEO LOOP
// ------------------------
function showSurprise() {
  const first = document.getElementById("surprise");
  const video = document.getElementById("secondSurpriseVideo");

  first.innerText = `You are my forever Valentine, ${herName} 😘`;
  first.style.display = "block";

  setTimeout(() => {
    video.style.display = "block";
    video.play();
    video.loop = true;
    createConfetti(30);
  }, 1500);
}

// ------------------------
// YES BUTTON → FIREWORKS + REDIRECT
// ------------------------
function sayYes() {
  
  setTimeout(() => {
    window.location.href = "yes/yes.html";
  }, 2000);
}

// ------------------------
// NO BUTTON RUN AWAY 😜
// ------------------------
function moveNo() {
  const noBtn = document.querySelector(".no-btn");
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// ------------------------
// FLOATING HEARTS
// ------------------------
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// ------------------------
// SLIDESHOW WITH CAPTIONS
// ------------------------
const photos = [
  { src:"assets/images/img1.jpg", caption:"Our first memory 💕" },
  { src:"assets/images/img2.jpg", caption:"Laughing together 😄" },
  { src:"assets/images/img3.jpg", caption:"Sunset moments 🌅" },
  { src:"assets/images/img4.jpg", caption:"Our adventures ✨" },
  { src:"assets/images/img5.jpg", caption:"Sweet smiles 😊" },
  { src:"assets/images/img6.jpg", caption:"Holding hands 🤝" },
  { src:"assets/images/img7.jpg", caption:"Forever us 💖" },
  { src:"assets/images/img8.png", caption:"Ai things 🥰" }
];

let index = 0;
const slideshow = document.getElementById("slideshow");
const caption = document.getElementById("caption");

setInterval(() => {
  index = (index + 1) % photos.length;
  slideshow.src = photos[index].src;
  caption.innerText = photos[index].caption;
}, 2500);

// ------------------------
// BACKGROUND MUSIC - AUTO LOOP
// ------------------------
const bgMusic = document.getElementById("bgMusic");
let started = false;

function startMusic() {
  if (!started) {
    bgMusic.volume = 0;
    bgMusic.play();
    fadeInMusic(bgMusic);
    started = true;
  }
}

function fadeInMusic(audio) {
  let vol = 0;
  const interval = setInterval(() => {
    if (vol < 1) {
      vol += 0.02;
      audio.volume = vol;
    } else clearInterval(interval);
  }, 100);
}

// ------------------------
// CONFETTI
// ------------------------
function createConfetti(count) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.innerHTML = "💖";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}
