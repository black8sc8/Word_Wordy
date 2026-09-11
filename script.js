let remainingQuestions = [...allQuestions];
let remainingWordQuestions = [...wordQuestions];
let currentQuestion = {};
let score = 0;
let currentLevel = 'word';
let targetAnswer = [];

const questionBox = document.getElementById('questionBox');
const answerArea = document.getElementById('answerArea');
const wordPool = document.getElementById('wordPool');
const areaTitle = document.getElementById('areaTitle');
const scoreDisplay = document.getElementById('score');
const feedbackMessage = document.getElementById('feedbackMessage');

// 모바일 호환 TTS 및 사파리 모바일 보완
let synth = window.speechSynthesis;
let voices = [];

function loadVoices() {
    if (synth) voices = synth.getVoices();
}
loadVoices();
if (synth && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
}

function speakText(text) {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.1;

    let availableVoices = window.speechSynthesis.getVoices();
    if (availableVoices.length > 0) {
        let usVoice = availableVoices.find(v => v.lang === 'en-US' || v.lang === 'en_US');
        if (usVoice) utterance.voice = usVoice;
    }

    setTimeout(() => {
        window.speechSynthesis.speak(utterance);
    }, 50);
}

// 화면 첫 터치시 음성 잠금 해제
document.addEventListener('click', function unlockAudio() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.resume();
    }
}, { once: true });

// 스피커 버튼 클릭 시 전체 영어 문장 재생
function speakCurrentQuestion() {
    if (currentQuestion && currentQuestion.eng) {
        speakText(currentQuestion.eng);
    }
}

function setLevel(level) {
    currentLevel = level;
    document.getElementById('btnWord').classList.toggle('active', level === 'word');
    document.getElementById('btnEasy').classList.toggle('active', level === 'easy');
    document.getElementById('btnMedium').classList.toggle('active', level === 'medium');
    document.getElementById('btnHard').classList.toggle('active', level === 'hard');
    nextQuestion();
}

function nextQuestion() {
    answerArea.innerHTML = '';
    wordPool.innerHTML = '';

    // 모서리 전용 Listen 버튼 HTML 태그
    const listenButtonHTML = `<button class="tts-btn" onclick="speakCurrentQuestion()">Listen 🔊</button>`;

    if (currentLevel === 'word') {
        answerArea.style.display = 'none';
        areaTitle.innerText = "👇 정답을 선택해 주세요 👇";

        if (remainingWordQuestions.length === 0) {
            remainingWordQuestions = [...wordQuestions];
        }

        const randomIndex = Math.floor(Math.random() * remainingWordQuestions.length);
        currentQuestion = remainingWordQuestions[randomIndex];
        remainingWordQuestions.splice(randomIndex, 1);

        let isKorToEng = Math.random() < 0.5;

        if (isKorToEng) {
            questionBox.innerHTML = `${listenButtonHTML}<div>${currentQuestion.kor}</div>`;
            targetAnswer = [currentQuestion.eng];

            let options = [currentQuestion.eng];
            while (options.length < 4 && options.length < wordQuestions.length) {
                let randItem = wordQuestions[Math.floor(Math.random() * wordQuestions.length)];
                if (!options.includes(randItem.eng)) {
                    options.push(randItem.eng);
                }
            }
            options.sort(() => Math.random() - 0.5);

            options.forEach(opt => {
                let btn = document.createElement('button');
                btn.innerText = opt;
                btn.className = 'word-btn';
                btn.onclick = () => selectWordOption(opt);
                wordPool.appendChild(btn);
            });

        } else {
            questionBox.innerHTML = `${listenButtonHTML}<div>${currentQuestion.eng}</div>`;
            speakText(currentQuestion.eng);
            targetAnswer = [currentQuestion.kor];

            let options = [currentQuestion.kor];
            while (options.length < 4 && options.length < wordQuestions.length) {
                let randItem = wordQuestions[Math.floor(Math.random() * wordQuestions.length)];
                if (!options.includes(randItem.kor)) {
                    options.push(randItem.kor);
                }
            }
            options.sort(() => Math.random() - 0.5);

            options.forEach(opt => {
                let btn = document.createElement('button');
                btn.innerText = opt;
                btn.className = 'word-btn';
                btn.onclick = () => selectWordOption(opt);
                wordPool.appendChild(btn);
            });
        }

    } else {
        answerArea.style.display = 'flex';
        areaTitle.innerText = "👇 여기에 단어를 순서대로 놓아주세요 👇";

        if (remainingQuestions.length === 0) {
            remainingQuestions = [...allQuestions];
        }

        const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        currentQuestion = remainingQuestions[randomIndex];
        remainingQuestions.splice(randomIndex, 1);

        let words = currentQuestion.eng.split(' ');

        if (currentLevel === 'easy') {
            let blankIdx = Math.floor(Math.random() * words.length);
            targetAnswer = [words[blankIdx]];

            let displayWords = [...words];
            displayWords[blankIdx] = "___";
            questionBox.innerHTML = `${listenButtonHTML}<div>${currentQuestion.kor}</div><span class="easy-sentence">${displayWords.join(' ')}</span>`;

            let poolWords = [...targetAnswer];
            const fakeWords = ["cat", "dog", "red", "blue", "big", "small", "run", "happy", "sun", "sky", "is", "a"];
            while (poolWords.length < 3) {
                let randomFake = fakeWords[Math.floor(Math.random() * fakeWords.length)];
                if (!poolWords.includes(randomFake)) poolWords.push(randomFake);
            }
            poolWords.sort(() => Math.random() - 0.5);
            poolWords.forEach(word => createWordButton(word));

        } else if (currentLevel === 'medium' && words.length >= 2) {
            let blankIndices = [];
            while (blankIndices.length < 2) {
                let r = Math.floor(Math.random() * words.length);
                if (!blankIndices.includes(r)) blankIndices.push(r);
            }
            blankIndices.sort((a, b) => a - b);

            targetAnswer = blankIndices.map(idx => words[idx]);

            let displayWords = [...words];
            blankIndices.forEach(idx => { displayWords[idx] = "___"; });
            questionBox.innerHTML = `${listenButtonHTML}<div>${currentQuestion.kor}</div><span class="easy-sentence">${displayWords.join(' ')}</span>`;

            let poolWords = [...targetAnswer];
            const fakeWords = ["cat", "red", "big", "run", "happy", "sun", "go", "sky"];
            let randomFake = fakeWords[Math.floor(Math.random() * fakeWords.length)];
            while (poolWords.includes(randomFake)) {
                randomFake = fakeWords[Math.floor(Math.random() * fakeWords.length)];
            }
            poolWords.push(randomFake);
            poolWords.sort(() => Math.random() - 0.5);
            poolWords.forEach(word => createWordButton(word));

        } else {
            targetAnswer = words;
            questionBox.innerHTML = `${listenButtonHTML}<div>${currentQuestion.kor}</div>`;

            let poolWords = [...words].sort(() => Math.random() - 0.5);
            poolWords.forEach(word => createWordButton(word));
        }
    }
}

function selectWordOption(selected) {
    if (/[a-zA-Z]/.test(selected)) {
        speakText(selected);
    }

    if (selected === targetAnswer[0]) {
        showMessage("참 잘했어요! 💯 정답입니다!", true);
        score += 10;
        scoreDisplay.innerText = score;
        setTimeout(() => nextQuestion(), 1200);
    } else {
        showMessage("앗, 다시 한 번 생각해보자! 🤔", false);
        wordPool.classList.add('shake');
        setTimeout(() => wordPool.classList.remove('shake'), 400);
    }
}

function createWordButton(word) {
    let btn = document.createElement('button');
    btn.innerText = word;
    btn.className = 'word-btn';
    btn.onclick = () => moveWord(btn);
    wordPool.appendChild(btn);
}

function moveWord(btn) {
    speakText(btn.innerText);

    if (btn.parentElement === wordPool) {
        btn.className = 'answer-btn';
        answerArea.appendChild(btn);
    } else {
        btn.className = 'word-btn';
        wordPool.appendChild(btn);
    }

    if (answerArea.children.length === targetAnswer.length) {
        setTimeout(() => checkAnswer(), 300);
    }
}

function showMessage(msg, isCorrect) {
    feedbackMessage.innerText = msg;
    feedbackMessage.className = `feedback-message show ${isCorrect ? 'correct' : 'wrong'}`;
    setTimeout(() => feedbackMessage.classList.remove('show'), 1500);
}

function checkAnswer() {
    let userAnswer = Array.from(answerArea.children).map(btn => btn.innerText).join(' ');
    let expectedAnswer = targetAnswer.join(' ');
    
    if (userAnswer === expectedAnswer) {
        showMessage("참 잘했어요! 💯 정답입니다!", true);
        speakText(currentQuestion.eng);

        score += 10;
        scoreDisplay.innerText = score;
        setTimeout(() => nextQuestion(), 1500);

    } else {
        showMessage("앗, 다시 한 번 생각해보자! 🤔", false);
        answerArea.classList.add('shake');
        setTimeout(() => answerArea.classList.remove('shake'), 400);
        
        Array.from(answerArea.children).forEach(btn => {
            btn.className = 'word-btn';
            wordPool.appendChild(btn);
        });
    }
}

nextQuestion();
