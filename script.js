/**
 * Mahiya's Birthday Experience - Advanced Script Engine
 * Fully Responsive and Feature-Rich
 * Created for Bulbul Bhai
 */

const introSequence = [
    "Hey Mahiya...", 
    "Waiting for someone special?", 
    "Today is your magic day...", 
    "Ready to open your heart?", 
    "Happy Birthday, Princess! ❤️"
];

let sequenceIndex = 0;
let letterTypingStatus = false;

// --- 1. Intro Controller ---
function startExperience() {
    const bgm = document.getElementById('bgMusic');
    bgm.volume = 0.6;
    bgm.play().catch(() => console.log("Music play interaction required."));
    
    document.getElementById('tap-msg').style.display = 'none';
    const sequenceEl = document.getElementById('word-sequence');
    sequenceEl.classList.remove('hidden');
    
    runCinematicIntro();
}

function runCinematicIntro() {
    const el = document.getElementById('word-sequence');
    if (sequenceIndex < introSequence.length) {
        el.style.opacity = 0;
        el.style.transform = "translateY(10px)";
        
        setTimeout(() => {
            el.innerHTML = introSequence[sequenceIndex];
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            sequenceIndex++;
            // শব্দ পরিবর্তনের সময় (২.৫ সেকেন্ড)
            setTimeout(runCinematicIntro, 2500);
        }, 500);
    } else {
        revealMainDashboard();
    }
}

function revealMainDashboard() {
    const overlay = document.getElementById('intro-overlay');
    const main = document.getElementById('main-content');
    
    overlay.style.opacity = 0;
    setTimeout(() => {
        overlay.style.display = "none";
        main.style.display = "flex";
        setTimeout(() => {
            main.style.opacity = 1;
        }, 100);
        initiateHeartEffect();
    }, 1200);
}

// --- 2. Stage 1: Cake Mechanism (Knife Fade-out Fix) ---
function cutTheCake() {
    const knife = document.getElementById('knife');
    const wholeCake = document.getElementById('whole-cake');
    const slicedCake = document.getElementById('sliced-cake');
    const nextBtn = document.getElementById('to-gift-btn');

    // Knife Slicing Animation
    knife.style.transform = "translate(-115px, 155px) rotate(-65deg)";
    
    setTimeout(() => {
        // Change Cake State
        wholeCake.classList.add('hidden');
        slicedCake.classList.remove('hidden');
        
        // Grand Confetti Blast
        confetti({
            particleCount: 250,
            spread: 120,
            origin: { y: 0.8 },
            colors: ['#ff4d6d', '#ffd700', '#ffffff', '#ff0a54']
        });
        
        // Knife Fades Away (আপনার রিকোয়েস্ট অনুযায়ী)
        knife.style.opacity = "0";

        // Show Next Button
        nextBtn.classList.remove('hidden');
        nextBtn.style.display = "inline-block";
    }, 800);
}

// --- 3. Stage 2: Gift Discovery ---
function openGift() {
    const box = document.getElementById('gift-box');
    const teddy = document.getElementById('teddy');
    const nextBtn = document.getElementById('to-letters-btn');

    box.classList.add('hidden');
    teddy.classList.remove('hidden');
    
    confetti({
        particleCount: 200,
        spread: 90,
        scalar: 1.5,
        ticks: 200
    });

    nextBtn.classList.remove('hidden');
    nextBtn.style.display = "inline-block";
}

// --- 4. Navigation Engine ---
function nextStage(hideId, showId, newProfilePic) {
    const currentTab = document.getElementById(hideId);
    const nextTab = document.getElementById(showId);
    const profileImg = document.getElementById('mahiya-pic');

    currentTab.style.opacity = "0";
    currentTab.style.transform = "translateX(-20px)";
    
    setTimeout(() => {
        currentTab.style.display = "none";
        nextTab.style.display = "block";
        profileImg.src = newProfilePic;
        
        setTimeout(() => {
            nextTab.style.opacity = "1";
            nextTab.style.transform = "translateX(0)";
        }, 100);
    }, 600);
}

// --- 5. Stage 3: Digital Letters ---
const romanticLetters = [
    "প্রিয় মাহিঁয়া, তুমি আমার জীবনের শ্রেষ্ঠ উপহার। তোমার হাসিতেই আমার পৃথিবীটা আলো হয়ে ওঠে। শুভ জন্মদিন! ❤️",
    "শুভ জন্মদিন আমার রানি! আজকের এই বিশেষ দিনটি তোমার মতোই সুন্দর আর মধুময় হোক। সবসময় এভাবেই থেকো। 🌹",
    "মাহিঁয়া, তুমি শুধু আমার প্রিয় নও, তুমিই আমার পুরো পৃথিবী। সারা জীবন তোমায় আগলে রাখতে চাই। ভালোবাসি তোমায়! ✨"
];

function openLetter(n) {
    if (letterTypingStatus) return;
    
    const displayBox = document.getElementById('letter-display');
    const textTarget = document.getElementById('type-text');
    
    displayBox.classList.remove('hidden');
    textTarget.innerHTML = "";
    letterTypingStatus = true;
    
    let i = 0;
    const message = romanticLetters[n - 1];
    
    function typingEffect() {
        if (i < message.length) {
            textTarget.innerHTML += message.charAt(i);
            i++;
            setTimeout(typingEffect, 65);
        } else {
            letterTypingStatus = false;
        }
    }
    typingEffect();
}

// --- 6. Heart Particle System ---
function initiateHeartEffect() {
    const rainContainer = document.getElementById('hearts-bg');
    setInterval(() => {
        const h = document.createElement('div');
        h.innerHTML = '❤️';
        h.className = 'heart';
        
        const randomLeft = Math.random() * 100;
        const randomSize = Math.random() * 25 + 15;
        const randomDuration = Math.random() * 3 + 4;
        
        h.style.left = randomLeft + 'vw';
        h.style.fontSize = randomSize + 'px';
        h.style.animationDuration = randomDuration + 's';
        h.style.opacity = Math.random() * 0.7 + 0.3;
        
        rainContainer.appendChild(h);
        
        setTimeout(() => {
            h.remove();
        }, randomDuration * 1000);
    }, 500);
}