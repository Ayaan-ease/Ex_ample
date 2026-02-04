const text = document.getElementById("text");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const inbox = document.getElementById("inbox");
const submitAnswer = document.getElementById("submitAnswer");
const answer = document.getElementById("answer");
const song = document.getElementById("loveSong");

/* 🔴 PASTE DIRECT .GIF LINKS BELOW 🔴 */
const noResponses = [
  { text: "Are you sure?", gif: "https://media.tenor.com/L04oJsVbVD0AAAAi/sad-dudu.gif" },
  { text: "Don’t do this to me!! 😭", gif: "https://media.tenor.com/QOzMqPvW8PUAAAAi/love-you.gif" },
  { text: "Yaar itne nakhre 😔", gif: "https://media1.tenor.com/m/SV215vlI5OkAAAAC/msa-halo.gif" }
];

const yesValentine = {
  text: "I knew it, you can’t live without me 😌💖",
  gif: "https://media.tenor.com/55-kH7JnV0cAAAAi/dubu.gif"
};

const sadResponse = {
  text: "Are you really sure? 💔",
  gif: "https://media1.tenor.com/m/u7Md4C5Ah-0AAAAC/crying-anime-boy.gif"
};

const finalYes = {
  text: "Come here…🤍",
  gif: "https://media.tenor.com/16JLRwPfDfAAAAAi/dudu-bubu-dancing-so-cute.gif"
};

let noCount = 0;
let stage = 1;

/* 🏃 NO BUTTON RUNS */
noBtn.addEventListener("mouseover", () => {
  if (stage === 1) {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }
});

/* ❌ NO CLICK */
noBtn.addEventListener("click", () => {
  if (stage === 1) {
    const response = noResponses[noCount % noResponses.length];
    text.innerText = response.text;
    gif.src = response.gif;
    noCount++;
  } else {
    text.innerText = sadResponse.text;
    gif.src = sadResponse.gif;
  }
});

/* ✅ YES CLICK */
yesBtn.addEventListener("click", () => {
  if (stage === 1) {
    stage = 2;

    // 🚫 HIDE BUTTONS IMMEDIATELY (NO GLITCH)
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // 💖 Update UI
    text.innerText = yesValentine.text;
    gif.src = yesValentine.gif;

    // 🎵 PLAY SONG (user interaction safe)
    song.play().catch(() => {});

    // ⏱️ SHOW INBOX AFTER SHORT PAUSE
    setTimeout(() => {
      inbox.classList.remove("hidden");
    }, 1500);
  }
});

/* 💬 SUBMIT INBOX */
submitAnswer.addEventListener("click", () => {
  const val = answer.value.toLowerCase();

  inbox.classList.add("hidden");

  if (val.includes("yes") || val.includes("haan") || val.includes("ok")) {
    text.innerText = finalYes.text;
    gif.src = finalYes.gif;
  } else {
    text.innerText = sadResponse.text;
    gif.src = sadResponse.gif;
  }
});
