const sakuraContainer = document.getElementById('sakura-container');

function createSakura() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    sakura.style.left = Math.random() * window.innerWidth + 'px';
    sakura.style.animationDuration = 5 + Math.random() * 5 + 's';
    sakura.innerText = '🌸';
    sakuraContainer.appendChild(sakura);
    setTimeout(() => sakura.remove(), 10000);
}

setInterval(createSakura, 300);
const envelope = document.getElementById('envelope');
const envelopeSection = document.getElementById('envelope-section');
const questionSection = document.getElementById('question-section');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const subheading = document.getElementById('subheading');
const valentineGif = document.getElementById('valentine-gif');
const yaySection = document.getElementById('yay-section');
const nextLetterBtn = document.getElementById('next-letter-btn');
const letterSection = document.getElementById('letter-section');
const letterBg = document.getElementById('letter-bg');

const initialGif = "dance.gif";
const noGifs = ["GIF/sad1.gif", "GIF/sad2.gif", "GIF/sad3.gif", "GIF/sad4.gif", "GIF/sad5.gif", "GIF/sad6.gif", "GIF/sad7.gif"];
const yesGif = "after-yes.gif";

envelope.addEventListener('click', () => {
    envelopeSection.classList.add('hidden');
    questionSection.classList.remove('hidden');
});

let phrases = [
    "Please?",
    "Luh? Sige na kasi!",
    "Kulit mo ah!",
    "SABING MAG YES NA EH!",
    "AYAW MO NA BA SAKIN?",
    "LUH! ISA PA TALAGA",
    "LAST NA TOH!"
];

let clickCount = 0;

noBtn.addEventListener('click', () => {
    if (clickCount < phrases.length) {
        subheading.innerText = phrases[clickCount];

        valentineGif.src = noGifs[clickCount % noGifs.length];

        noBtn.style.position = 'absolute';
        noBtn.style.top = Math.random() * (window.innerHeight - 100) + 'px';
        noBtn.style.left = Math.random() * (window.innerWidth - 100) + 'px';

        clickCount++; 
    } else {
        noBtn.remove();

        subheading.innerText = "As if you have any other choice? MAG YES KA NA!";

        valentineGif.src = "GIF/hello.gif";
    }
});

yesBtn.addEventListener('click', () => {
    valentineGif.src = yesGif;
    questionSection.classList.add('hidden');
    yaySection.classList.remove('hidden');
});

nextLetterBtn.addEventListener('click', () => {
    yaySection.classList.add('hidden');
    letterSection.classList.remove('hidden');
});

const faceImages = [
    "PICS/face1.png",
    "PICS/face2.png",
    "PICS/face4.png",
    "PICS/face5.png",
];

faceImages.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('bg-face');

    // Left or Right side
    if (index < 3) { 
        img.style.left = Math.random() * 20 + "%"; // left 0-20%
        img.style.top = Math.random() * 70 + "%";
    } else {
        img.style.left = 70 + Math.random() * 20 + "%"; // right 70-90%
        img.style.top = Math.random() * 70 + "%";
    }

    letterBg.appendChild(img);
});