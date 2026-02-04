const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

noBtn.addEventListener("click", () => {
    yesScale += 0.5;
    yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
});

function fadeInMusic(audio) {
  let vol = 0;
  const interval = setInterval(() => {
    if (vol < 1) {
      vol += 0.02;
      audio.volume = vol;
    } else clearInterval(interval);
  }, 100);
}
