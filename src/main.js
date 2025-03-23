document.getElementById("giftBox").addEventListener("click", () => {
  console.log("Gift box clicked!");
  // Hide the gift box
  document.getElementById("giftBox").style.display = "none";

  // Show the message with animation
  const message = document.getElementById("message");
  message.classList.remove("hidden");
  message.style.opacity = "1";
  message.style.transform = "translate(-50%, -50%)";

  // 🎉 Fire Confetti using the global confetti function
  if (typeof confetti === "function") {
      confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 }
      });
  } else {
      console.error("Confetti is not defined. Check if the script is loaded.");
  }

  // ❤️ Start Floating Hearts
  startHearts();
  playMusic();
});


function playMusic() {
    document.getElementById("giftMusic").play();
}

// ❤️ Floating hearts animation
function startHearts() {
  setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
  }, 500);
}
