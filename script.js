
let remainingQuestions = [...allQuestions];
let currentQuestion = {};
let score = 0;
let currentLevel = 'easy';
let targetAnswer = [];

const questionBox = document.getElementById('questionBox');
const answerArea = document.getElementById('answerArea');
const wordPool = document.getElementById('wordPool');
const scoreDisplay = document.getElementById('score');
const feedbackMessage = document.getElementById('feedbackMessage');

// 모바일 음성 음원 로드
let synth = window.speechSynthesis;
let voices = [];

function loadVoices() {
    if (synth) {
        voices = synth.getVoices();
    }
}
loadVoices();
if (synth && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
}

// TTS 음성 재생
function speakText(text) {
    if (!synth) return;
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.1;

    if (voices.length > 0) {
        const usVoice = voices.find(v => v.lang === 'en-US' || v.lang.includes('en'));
        if (usVoice) utterance.voice = usVoice;
    }

    synth.speak(utterance);
}

// 난이도 변경 함수
function setLevel(level) {
    currentLevel = level;
    document.getElementById('btnEasy').classList.toggle('active', level === 'easy');
    document.getElementById('btnMedium').classList.toggle('active', level === 'medium');
    document.getElementById('btnHard').classList.toggle('active', level === 'hard');
    nextQuestion();
}

// 다음 문제 출제
function nextQuestion() {
    answerArea.innerHTML = '';
    wordPool.innerHTML = '';
    
    if (remainingQuestions.length === 0) {
        remainingQuestions = [...allQuestions];
    }
    
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions[randomIndex];
    remainingQuestions.splice(randomIndex, 1);
    
    let words = currentQuestion.eng.split(' ');

    if (currentLevel === 'easy') {
        // 🐣 초급 모드: 빈칸 1개 (목표 단어 1개)
        let blankIdx = Math.floor(Math.random() * words.length);
        targetAnswer = [words[blankIdx]];

        let displayWords = [...words];
        displayWords[blankIdx] = "___";
        questionBox.innerHTML = `${currentQuestion.kor}<br><span class="easy-sentence">${displayWords.join(' ')}</span>`;

        let poolWords = [...targetAnswer];
        const fakeWords = ["cat", "dog", "red", "blue", "big", "small", "run", "happy", "sun", "sky", "is", "a", "in", "on", "go"];
        
        while (poolWords.length < 3) {
            let randomFake = fakeWords[Math.floor(Math.random() * fakeWords.length)];
            if (!poolWords.includes(randomFake)) {
                poolWords.push(randomFake);
            }
        }
        
        poolWords.sort(() => Math.random() - 0.5);
        poolWords.forEach(word => createWordButton(word));

    } else if (currentLevel === 'medium' && words.length >= 2) {
        // 🐥 중급 모드: 빈칸 2개 (목표 단어 2개)
        let blankIndices = [];
        while (blankIndices.length < 2) {
            let r = Math.floor(Math.random() * words.length);
            if (!blankIndices.includes(r)) blankIndices.push(r);
        }
        blankIndices.sort((a, b) => a - b);

        targetAnswer = blankIndices.map(idx => words[idx]);

        let displayWords = [...words];
        blankIndices.forEach(idx => { displayWords[idx] = "___"; });
        questionBox.innerHTML = `${currentQuestion.kor}<br><span class="easy-sentence">${displayWords.join(' ')}</span>`;

        let poolWords = [...targetAnswer];
        const fakeWords = ["cat", "red", "big", "run", "happy", "sun", "go", "sky", "blue", "a"];
        
        let randomFake = fakeWords[Math.floor(Math.random() * fakeWords.length)];
        while (poolWords.includes(randomFake)) {
            randomFake = fakeWords[Math.floor(Math.random() * fakeWords.length)];
        }
        poolWords.push(randomFake);
        
        poolWords.sort(() => Math.random() - 0.5);
        poolWords.forEach(word => createWordButton(word));

    } else {
        // 🦅 상급 모드: 전체 단어 개수
        targetAnswer = words;
        questionBox.innerText = currentQuestion.kor;

        let poolWords = [...words].sort(() => Math.random() - 0.5);
        poolWords.forEach(word => createWordButton(word));
    }
}

function createWordButton(word) {
    let btn = document.createElement('button');
    btn.innerText = word;
    btn.className = 'word-btn';
    btn.onclick = () => moveWord(btn);
    wordPool.appendChild(btn);
}

// 단어 이동 및 자동 정답 검사
function moveWord(btn) {
    speakText(btn.innerText);

    if (btn.parentElement === wordPool) {
        btn.className = 'answer-btn';
        answerArea.appendChild(btn);
    } else {
        btn.className = 'word-btn';
        wordPool.appendChild(btn);
    }

    // 🌟 정답 칸에 올려진 단어 개수가 필요한 단어 수와 같아지면 자동으로 정답 확인!
    if (answerArea.children.length === targetAnswer.length) {
        setTimeout(() => {
            checkAnswer();
        }, 300); // 클릭 후 짧은 여운을 주기 위해 0.3초 대기 후 검사
    }
}

function showMessage(msg, isCorrect) {
    feedbackMessage.innerText = msg;
    feedbackMessage.className = `feedback-message show ${isCorrect ? 'correct' : 'wrong'}`;
    
    setTimeout(() => {
        feedbackMessage.classList.remove('show');
    }, 1500);
}

function checkAnswer() {
    let userAnswer = Array.from(answerArea.children).map(btn => btn.innerText).join(' ');
    let expectedAnswer = targetAnswer.join(' ');
    
    if (userAnswer === expectedAnswer) {
        showMessage("참 잘했어요! 💯 정답입니다!", true);
        speakText(currentQuestion.eng);

        score++;
        scoreDisplay.innerText = score;
        
        setTimeout(() => {
            nextQuestion();
        }, 1500);

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
