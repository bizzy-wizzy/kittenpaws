// Personalize name here 👇
const crushName = "Kitten Paws 🐾"; // change this 😌

document.getElementById("name").textContent = crushName;

// Screens
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const yesScreen = document.getElementById("yesScreen");

document.getElementById("startBtn").addEventListener("click", () => {
  intro.classList.add("hidden");
  main.classList.remove("hidden");
});

// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  yesScreen.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  response.textContent = "Nice try 😏";
});

// Easter egg 🗝️
document.addEventListener("keydown", (e) => {
  if (e.key === "v") {
    alert("Secret unlocked 💖 You’re officially adorable.");
  }
});

// Floating hearts generator 💕
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 4 + "s";
  heart.style.fontSize = 12 + Math.random() * 20 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);
