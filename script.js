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
let maxTime = 300; // 5 Minutes default
let timeLeft = maxTime;
let isStarted = false;
let backspaceCount = 0;
let totalKeystrokes = 0;
let correctWordsCount = 0;
let wrongWordsCount = 0;

let passageWords = [];
let currentWordIndex = 0;
let currentLanguage = 'en'; // 'en' or 'hi'
let candidateName = "User";

// --- NAVIGATION & LOGIN ---
function handleLogin() {
    const nameInput = document.getElementById('user-name').value;
    if(!nameInput) return alert("Kripya apna naam likhein!");
    
    candidateName = nameInput;
    // Result page par naam set kar dete hain abhi se
    document.getElementById('res-candidate-name').innerText = candidateName;

    document.getElementById('login-page').style.display = 'none';
    document.getElementById('selection-page').style.display = 'flex';
}

function openModule(lang) {
    currentLanguage = lang;
    document.getElementById('selection-page').style.display = 'none';
    const pageId = lang === 'en' ? 'english-page' : 'hindi-page';
    const listId = lang === 'en' ? 'en-list' : 'hi-list';
    const data = lang === 'en' ? adminEnglish : adminHindi;
    
    document.getElementById(pageId).style.display = 'flex';
    renderList(listId, data, lang);
}

function renderList(listId, data, lang) {
    const list = document.getElementById(listId);
    list.innerHTML = data.map(p => `
        <div class="p-item" onclick="startTyping(\`${p.text}\`)">
            <div class="p-info">
                <strong>${p.title}</strong>
            </div>
            <button class="select-btn">Select</button>
        </div>
    `).join('');
}

// Custom Text Logic
function startCustom(lang) {
    currentLanguage = lang;
    const inputId = lang === 'en' ? 'en-custom' : 'hi-custom';
    const text = document.getElementById(inputId).value;
    
    if(text.trim().length < 10) return alert("Text bahut chhota hai. Thoda aur likhein.");
    startTyping(text);
}

// --- TYPING CORE ---
function startTyping(text) {
    // Hide all pages, show typing page
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById('typing-page').style.display = 'flex';

    // Reset All Variables
    clearInterval(timer);
    timeLeft = 300; // Reset to 5 mins
    isStarted = false;
    backspaceCount = 0;
    totalKeystrokes = 0;
    correctWordsCount = 0;
    wrongWordsCount = 0;
    currentWordIndex = 0;

    // Reset UI
    document.getElementById('back-count').innerText = "0";
    document.getElementById('live-wpm').innerText = "0";
    document.getElementById('timer').innerText = "05:00";
    document.getElementById('typing-area').value = "";
    document.getElementById('typing-area').disabled = false;
    document.getElementById('typing-area').focus();

    // Setup Text Display
    const display = document.getElementById('text-display');
    passageWords = text.trim().split(/\s+/);
    display.innerHTML = passageWords.map(word => `<span class="word-span">${word}</span>`).join(' ');
    
    // Highlight first word
    display.children[0].classList.add('current-word');

    // Apply Fonts based on Language
    const area = document.getElementById('typing-area');
    if(currentLanguage === 'hi') {
        area.classList.add('hindi-font');
        display.classList.add('hindi-font');
    } else {
        area.classList.remove('hindi-font');
        display.classList.remove('hindi-font');
    }
    
    // Engine Start
    setupEngine();
}

function setupEngine() {
    const area = document.getElementById('typing-area');
    const display = document.getElementById('text-display');

    // Keydown for Backspace & Timer Start
    area.onkeydown = (e) => {
        if (!isStarted) startTimer();
        
        if (e.key === 'Backspace') {
            backspaceCount++;
            document.getElementById('back-count').innerText = backspaceCount;
        }
    };

    // Input Handling
    area.oninput = (e) => {
        const value = area.value;
        
        // Count Keystrokes (Gross speed ke liye)
        // Note: Hum sirf length check kar rahe hain growth ki
        totalKeystrokes++; 

        const currentSpan = display.children[currentWordIndex];
        const currentWordText = passageWords[currentWordIndex];

        // Word Match Logic (Space dabane par)
        if (value.endsWith(' ')) {
            const inputWord = value.trim();
            
            if (inputWord === currentWordText) {
                currentSpan.className = "word-span correct";
                correctWordsCount++;
            } else {
                currentSpan.className = "word-span wrong";
                wrongWordsCount++;
            }
            
            // Move to next word
            currentWordIndex++;
            
            // Live Stats Update
            calculateLiveStats();

            // Check if passage ended
            if (currentWordIndex < passageWords.length) {
                // Highlight next
                display.children[currentWordIndex].classList.add('current-word');
                // Clear input
                area.value = "";
                // Auto Scroll
                display.children[currentWordIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                finishTest();
            }
        }
    };
}

function startTimer() {
    isStarted = true;
    timer = setInterval(() => {
        timeLeft--;
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        document.getElementById('timer').innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        if (timeLeft <= 0) finishTest();
    }, 1000);
}

// Live WPM update during test
function calculateLiveStats() {
    const timeSpentInMins = (maxTime - timeLeft) / 60;
    if(timeSpentInMins === 0) return;

    // Formula: Correct Words / Time
    const wpm = Math.round(correctWordsCount / timeSpentInMins);
    document.getElementById('live-wpm').innerText = wpm;
}

// --- RESULT CALCULATION ---
function finishTest() {
    clearInterval(timer);
    document.getElementById('typing-area').disabled = true;

    // Calculations
    const timeSpentInMins = (maxTime - timeLeft) / 60;
    const effectiveTime = timeSpentInMins === 0 ? 0.01 : timeSpentInMins; // Avoid divide by zero

    // 1. Net Speed (UPSSSC Formula-ish: Correct Words / Time)
    const netWPM = Math.round(correctWordsCount / effectiveTime);

    // 2. Gross Speed (Total Keystrokes / 5 / Time)
    // Standard typing formula: 5 chars = 1 word
    const grossWPM = Math.round((totalKeystrokes / 5) / effectiveTime);

    // 3. Accuracy
    const totalAttempted = correctWordsCount + wrongWordsCount;
    const accuracy = totalAttempted === 0 ? 0 : Math.round((correctWordsCount / totalAttempted) * 100);

    // 4. Pass/Fail Logic
    let status = "FAIL";
    let statusColor = "#e74c3c"; // Red

    if (currentLanguage === 'en') {
        if (netWPM >= 30) { status = "PASS"; statusColor = "#2ecc71"; } // Green
    } else {
        if (netWPM >= 25) { status = "PASS"; statusColor = "#2ecc71"; }
    }

    // --- POPULATE RESULT PAGE ---
    document.getElementById('res-wpm').innerText = netWPM;
    document.getElementById('res-gross-wpm').innerText = grossWPM + " WPM";
    document.getElementById('res-accuracy').innerText = accuracy + "%";
    document.getElementById('res-errors').innerText = wrongWordsCount;
    document.getElementById('res-backspaces').innerText = backspaceCount;
    document.getElementById('res-keystrokes').innerText = totalKeystrokes;

    const statusBox = document.getElementById('res-status-box');
    const statusText = document.getElementById('res-status-text');
    
    statusText.innerText = status;
    statusBox.style.backgroundColor = statusColor;

    // Switch Screen
    document.getElementById('typing-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'flex';
}

function backToLanguage() { location.reload(); }
function backToPassageSelection() { location.reload(); }
