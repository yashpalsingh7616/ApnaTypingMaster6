// --- DATABASE ---
const adminEnglish = [
    { title: "English Set 01: Basics", text: "The ability to type quickly and accurately is a vital skill in the modern workplace. It helps in saving time and increasing productivity." },
    { title: "English Set 02: UPSSSC", text: "UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success.UPSSSC exams require candidates to maintain a steady speed of thirty words per minute in English. Practice is the key to success." }
];

const adminHindi = [
    { title: "Hindi Set 01: Mangal", text: "उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग की परीक्षाओं में हिंदी टाइपिंग का विशेष महत्व है। इसके लिए निरंतर अभ्यास आवश्यक है।" },
    { title: "Hindi Set 02: Story", text: "एक बार की बात है एक जंगल में एक शेर रहता था। वह बहुत शक्तिशाली था और सभी जानवर उससे डरते थे।" }
];

// --- VARIABLES ---
let timer;
let timeLeft = 300;
let isStarted = false;
let backspaceCount = 0;
let currentWordIndex = 0;
let passageWords = [];
let currentLanguage = 'en';
let totalKeystrokes = 0;
let correctWords = 0;

// --- NAVIGATION (NO RELOAD) ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'flex';
}

function handleLogin() {
    const name = document.getElementById('user-name').value;
    if(!name) return alert("Enter Name");
    document.getElementById('res-candidate-name').innerText = name;
    showPage('selection-page');
}

function openModule(lang) {
    currentLanguage = lang;
    const listId = lang === 'en' ? 'en-list' : 'hi-list';
    const data = lang === 'en' ? adminEnglish : adminHindi;
    renderList(listId, data);
    showPage(lang === 'en' ? 'english-page' : 'hindi-page');
}

function renderList(listId, data) {
    document.getElementById(listId).innerHTML = data.map(p => `
        <div style="padding:10px; border-bottom:1px solid #eee; cursor:pointer;" onclick="startTyping(\`${p.text}\`)">
            ${p.title} <button class="select-btn">Start</button>
        </div>
    `).join('');
}

function backToLanguage() { showPage('selection-page'); }
function backToPassageSelection() { clearInterval(timer); showPage(currentLanguage === 'en' ? 'english-page' : 'hindi-page'); }
function goHome() { showPage('login-page'); }

// --- TYPING ENGINE ---
function startTyping(text) {
    showPage('typing-page');
    clearInterval(timer);
    timeLeft = 300;
    isStarted = false;
    backspaceCount = 0;
    currentWordIndex = 0;
    correctWords = 0;
    totalKeystrokes = 0;
    
    passageWords = text.trim().split(/\s+/);
    const display = document.getElementById('text-display');
    display.innerHTML = passageWords.map(w => `<span class="word-span">${w}</span>`).join(' ');
    display.children[0].classList.add('current-word');

    const area = document.getElementById('typing-area');
    area.value = "";
    area.disabled = false;
    area.focus();

    if(currentLanguage === 'hi') {
        area.classList.add('hindi-font');
        display.classList.add('hindi-font');
    } else {
        area.classList.remove('hindi-font');
        display.classList.remove('hindi-font');
    }

    setupEngine(area, display);
}

function setupEngine(area, display) {
    area.onkeydown = (e) => {
        if(!isStarted) startTimer();
        if(e.key === 'Backspace') backspaceCount++;
        document.getElementById('back-count').innerText = backspaceCount;
    };

    area.oninput = () => {
        totalKeystrokes++;
        const val = area.value;
        if(val.endsWith(' ')) {
            const input = val.trim();
            const currentSpan = display.children[currentWordIndex];
            
            if(input === passageWords[currentWordIndex]) {
                currentSpan.className = "word-span correct";
                correctWords++;
            } else {
                currentSpan.className = "word-span wrong";
            }

            currentWordIndex++;
            if(currentWordIndex < passageWords.length) {
                display.children[currentWordIndex].classList.add('current-word');
                area.value = "";
                display.children[currentWordIndex].scrollIntoView({behavior:'smooth', block:'center'});
            } else {
                finishTest();
            }
            document.getElementById('live-wpm').innerText = Math.round(correctWords / ((300-timeLeft)/60) || 0);
        }
    };
}

function startTimer() {
    isStarted = true;
    timer = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft/60), s = timeLeft%60;
        document.getElementById('timer').innerText = `${m}:${s<10?'0':''}${s}`;
        if(timeLeft <= 0) finishTest();
    }, 1000);
}

function finishTest() {
    clearInterval(timer);
    const timeSpent = (300 - timeLeft) / 60 || 0.1;
    const netWPM = Math.round(correctWords / timeSpent);
    const accuracy = Math.round((correctWords / currentWordIndex) * 100) || 0;

    document.getElementById('res-wpm').innerText = netWPM;
    document.getElementById('res-gross-wpm').innerText = Math.round((totalKeystrokes/5)/timeSpent) + " WPM";
    document.getElementById('res-accuracy').innerText = accuracy + "%";
    document.getElementById('res-errors').innerText = currentWordIndex - correctWords;
    document.getElementById('res-backspaces').innerText = backspaceCount;

    const statusBox = document.getElementById('res-status-box');
    const statusText = document.getElementById('res-status-text');
    const passSpeed = currentLanguage === 'en' ? 30 : 25;

    if(netWPM >= passSpeed) {
        statusText.innerText = "PASS";
        statusBox.style.backgroundColor = "#27ae60";
    } else {
        statusText.innerText = "FAIL";
        statusBox.style.backgroundColor = "#c62828";
    }

    showPage('result-page');
}
