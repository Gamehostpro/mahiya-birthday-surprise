/**
 * Mahiya's Birthday Celebration - Core Engine v3.0
 * Professional JavaScript for Advanced Interactions
 * Created for Bulbul Bhai
 */

// কনফিগারেশন: ইন্ট্রো টেক্সট এবং ছবির লিস্ট
const introSequence = [
    "Hey Mahiya...", 
    "In a universe full of stars...", 
    "You are my brightest light.", 
    "Ready for your surprise? ✨"
];

// মাহিঁয়ার ছবিগুলোর লিস্ট (আপনার ৫টি বা তার বেশি ছবির নাম এখানে দিন)
const mahiyaGallery = [
    "photo1.jpg", 
    "photo2.jpg", 
    "photo3.jpg", 
    "photo4.jpg", 
    "photo5.jpg"
];

let introIdx = 0;
let currentPhotoIdx = 0;

// --- ১. কাস্টম কার্সার মুভমেন্ট ---
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('magic-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// --- ২. ব্যাকগ্রাউন্ড তারা জেনারেটর (কোড বড় করার জন্য লজিক) ---
function generateUniverse() {
    const field = document.getElementById('star-field');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--speed', Math.random() * 3 + 2 + 's');
        field.appendChild(star);
    }
}

// --- ৩. ইন্ট্রো সিকোয়েন্স কন্ট্রোলার ---
function startExperience() {
    // মিউজিক প্লে করা
    const music = document.getElementById('bgMusic');
    music.volume = 0.5;
    music.play().catch(() => console.log("User interaction required for audio."));

    document.getElementById('tap-msg').style.display = 'none';
    const seqEl = document.getElementById('word-sequence');
    seqEl.classList.remove('hidden');
    
    runCinematicIntro();
    generateUniverse();
}

function runCinematicIntro() {
    const el = document.getElementById('word-sequence');
    if (introIdx < introSequence.length) {
        el.style.opacity = 0;
        el.style.transform = "translateY(15px)";
        
        setTimeout(() => {
            el.innerHTML = introSequence[introIdx];
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            introIdx++;
            setTimeout(runCinematicIntro, 2700);
        }, 600);
    } else {
        revealMainDashboard();
    }
}

function revealMainDashboard() {
    const overlay = document.getElementById('intro-overlay');
    overlay.style.opacity = 0;
    
    setTimeout(() => {
        overlay.style.display = "none";
        const main = document.getElementById('main-content');
        main.style.display = "flex";
        setTimeout(() => { main.style.opacity = 1; }, 100);
    }, 1200);
}

// --- ৪. কেক কাটিং মেকানিজম (ছুরি গায়েব করার ফিক্স) ---
function cutTheCake() {
    const knife = document.getElementById('knife');
    const whole = document.getElementById('whole-cake');
    const sliced = document.getElementById('sliced-cake');
    const nextBtn = document.getElementById('to-wish-btn');

    // ছুরি দিয়ে কাটার এনিমেশন
    knife.style.transform = "translate(-115px, 155px) rotate(-65deg)";
    
    setTimeout(() => {
        whole.classList.add('hidden');
        sliced.classList.remove('hidden');
        
        // গ্র্যান্ড কনফেটি ইফেক্ট
        confetti({
            particleCount: 250,
            spread: 100,
            origin: { y: 0.8 },
            colors: ['#dfaf37', '#b76e79', '#ffffff']
        });
        
        // ছুরি মুছে ফেলা (আপনার রিকোয়েস্ট অনুযায়ী)
        knife.style.opacity = "0";

        nextBtn.classList.remove('hidden');
        nextBtn.style.display = "inline-block";
    }, 800);
}

// --- ৫. আতশবাজি (Magical Wish) ---
function igniteFireworks() {
    const end = Date.now() + 4 * 1000;

    (function frame() {
        confetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#dfaf37', '#ffffff'] });
        confetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#b76e79', '#ffffff'] });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    document.getElementById('to-album-btn').classList.remove('hidden');
    document.getElementById('to-album-btn').style.display = "inline-block";
}

// --- ৬. প্রিমিয়াম গ্যালারি স্লাইডার লজিক ---
function changeMahiyaPhoto(direction) {
    currentPhotoIdx += direction;
    
    // লুপ মেকানিজম
    if (currentPhotoIdx < 0) currentPhotoIdx = mahiyaGallery.length - 1;
    if (currentPhotoIdx >= mahiyaGallery.length) currentPhotoIdx = 0;
    
    const photoEl = document.getElementById('gallery-photo');
    
    // স্মুথ ট্রানজিশন ইফেক্ট
    photoEl.style.opacity = 0;
    photoEl.style.transform = "scale(0.95)";
    
    setTimeout(() => {
        photoEl.src = mahiyaGallery[currentPhotoIdx];
        photoEl.style.opacity = 1;
        photoEl.style.transform = "scale(1)";
        document.getElementById('photo-num').innerText = currentPhotoIdx + 1;
    }, 350);
}

// --- ৭. নেভিগেশন ইঞ্জিন ---
function nextStage(currentId, nextId, profileImg) {
    const current = document.getElementById(currentId);
    const next = document.getElementById(nextId);
    
    current.style.opacity = 0;
    setTimeout(() => {
        current.style.display = "none";
        next.style.display = "block";
        document.getElementById('mahiya-pic').src = profileImg;
        setTimeout(() => { next.style.opacity = 1; }, 50);
    }, 500);
}

// স্পার্কেল ইফেক্ট অন ক্লিক
function spawnClickSparkle(e) {
    const s = document.createElement('div');
    s.innerHTML = '✨';
    s.style.position = 'fixed';
    s.style.left = e.clientX + 'px';
    s.style.top = e.clientY + 'px';
    s.style.pointerEvents = 'none';
    document.body.appendChild(s);
    setTimeout(() => {
        s.style.transition = '1s ease-out';
        s.style.transform = 'translateY(-100px) scale(2)';
        s.style.opacity = '0';
        setTimeout(() => s.remove(), 1000);
    }, 20);
}