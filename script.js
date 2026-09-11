/* =========================================================
   🌈 다인이의 영어 공부 - script.js
   ---------------------------------------------------------
   기능
   1. 홈 화면
   2. 단어연습 / 초급 / 중급 / 상급
   3. 오답노트
   4. localStorage 저장
   5. 점수 저장
   6. 오답 횟수 저장
   7. 오답노트 TTS
   8. 문제 TTS
   9. PC / 모바일 웹 / Android WebView 대응
   ========================================================= */


/* =========================================================
   1. 기본 변수
   ========================================================= */

let remainingQuestions = [...allQuestions];
let remainingWordQuestions = [...wordQuestions];

let currentQuestion = {};
let currentLevel = "word";
let targetAnswer = [];

let score = 0;

let isQuestionLocked = false;
let answerCheckTimer = null;


/* =========================================================
   2. localStorage 설정
   ========================================================= */

const SCORE_STORAGE_KEY = "daini_english_score";
const WRONG_NOTE_STORAGE_KEY = "daini_english_wrong_notes";


/* =========================================================
   3. DOM 요소
   ========================================================= */

const questionBox =
    document.getElementById("questionBox");

const answerArea =
    document.getElementById("answerArea");

const wordPool =
    document.getElementById("wordPool");

const areaTitle =
    document.getElementById("areaTitle");

const scoreDisplay =
    document.getElementById("score");

const feedbackMessage =
    document.getElementById("feedbackMessage");


/* 홈 화면 */

const homeScreen =
    document.getElementById("homeScreen");


/* 공부 화면 */

const studyScreen =
    document.getElementById("studyScreen");


/* 오답노트 화면 */

const wrongNoteScreen =
    document.getElementById("wrongNoteScreen");

const wrongNoteList =
    document.getElementById("wrongNoteList");

const homeScore =
    document.getElementById("homeScore");

const wrongCount =
    document.getElementById("wrongCount");

const currentLevelTitle =
    document.getElementById("currentLevelTitle");


/* =========================================================
   4. 화면 확인용 함수
   ========================================================= */

function elementExists(element) {
    return element !== null &&
           element !== undefined;
}


/* =========================================================
   5. 점수 불러오기
   ========================================================= */

function loadScore() {

    try {

        const savedScore =
            localStorage.getItem(
                SCORE_STORAGE_KEY
            );

        if (
            savedScore !== null &&
            !isNaN(Number(savedScore))
        ) {
            score = Number(savedScore);
        } else {
            score = 0;
        }

    } catch (error) {

        console.log(
            "점수 불러오기 오류:",
            error
        );

        score = 0;
    }

    updateScoreDisplay();
}


/* =========================================================
   6. 점수 저장
   ========================================================= */

function saveScore() {

    try {

        localStorage.setItem(
            SCORE_STORAGE_KEY,
            String(score)
        );

    } catch (error) {

        console.log(
            "점수 저장 오류:",
            error
        );
    }
}


/* =========================================================
   7. 점수 화면 업데이트
   ========================================================= */

function updateScoreDisplay() {

    if (elementExists(scoreDisplay)) {
        scoreDisplay.innerText = score;
    }

    if (elementExists(homeScore)) {
        homeScore.innerText = score;
    }
}


/* =========================================================
   8. 점수 추가
   ========================================================= */

function addScore(points) {

    const amount =
        Number(points) || 0;

    score += amount;

    saveScore();
    updateScoreDisplay();
}


/* =========================================================
   9. 오답노트 불러오기
   ========================================================= */

function getWrongNotes() {

    try {

        const saved =
            localStorage.getItem(
                WRONG_NOTE_STORAGE_KEY
            );

        if (!saved) {
            return [];
        }

        const parsed =
            JSON.parse(saved);

        if (Array.isArray(parsed)) {
            return parsed;
        }

        return [];

    } catch (error) {

        console.log(
            "오답노트 불러오기 오류:",
            error
        );

        return [];
    }
}


/* =========================================================
   10. 오답노트 저장
   ========================================================= */

function saveWrongNotes(notes) {

    try {

        localStorage.setItem(
            WRONG_NOTE_STORAGE_KEY,
            JSON.stringify(notes)
        );

    } catch (error) {

        console.log(
            "오답노트 저장 오류:",
            error
        );
    }

    updateWrongCount();
}


/* =========================================================
   11. 오답 추가
   ---------------------------------------------------------
   같은 문제를 여러 번 틀리면
   새로운 카드가 계속 생기는 것이 아니라
   count가 증가하도록 처리
   ========================================================= */

function addWrongNote(wrongAnswer) {

    if (
        !currentQuestion ||
        !currentQuestion.eng
    ) {
        return;
    }

    const notes =
        getWrongNotes();

    const level =
        currentLevel;

    const kor =
        currentQuestion.kor || "";

    const eng =
        currentQuestion.eng || "";

    const normalizedWrongAnswer =
        wrongAnswer === undefined ||
        wrongAnswer === null
            ? ""
            : String(wrongAnswer);


    /* 같은 문제 찾기 */

    const existingIndex =
        notes.findIndex(function (note) {

            return (
                note.level === level &&
                note.kor === kor &&
                note.eng === eng
            );

        });


    /* 이미 오답노트에 있는 문제 */

    if (existingIndex !== -1) {

        const existingNote =
            notes[existingIndex];

        existingNote.count =
            Number(existingNote.count || 0) + 1;

        existingNote.wrongAnswer =
            normalizedWrongAnswer;

        existingNote.lastWrongAt =
            new Date().toISOString();

        notes.splice(
            existingIndex,
            1
        );

        notes.unshift(
            existingNote
        );

    }

    /* 처음 틀린 문제 */

    else {

        const newNote = {

            id:
                Date.now() +
                "_" +
                Math.random()
                    .toString(36)
                    .substring(2, 9),

            level: level,

            kor: kor,

            eng: eng,

            wrongAnswer:
                normalizedWrongAnswer,

            count: 1,

            createdAt:
                new Date().toISOString(),

            lastWrongAt:
                new Date().toISOString()
        };

        notes.unshift(
            newNote
        );
    }


    saveWrongNotes(notes);
}


/* =========================================================
   12. 오답 삭제
   ========================================================= */

function deleteWrongNote(id) {

    const notes =
        getWrongNotes();

    const filtered =
        notes.filter(function (note) {

            return note.id !== id;

        });

    saveWrongNotes(filtered);

    renderWrongNotes();
}


/* =========================================================
   13. 오답노트 전체 삭제
   ========================================================= */

function clearWrongNotes() {

    const notes =
        getWrongNotes();

    if (notes.length === 0) {
        return;
    }

    const confirmed =
        window.confirm(
            "오답노트를 모두 삭제할까요?"
        );

    if (!confirmed) {
        return;
    }

    try {

        localStorage.removeItem(
            WRONG_NOTE_STORAGE_KEY
        );

    } catch (error) {

        console.log(
            "오답노트 삭제 오류:",
            error
        );
    }

    updateWrongCount();
    renderWrongNotes();
}


/* =========================================================
   14. 오답 개수 업데이트
   ========================================================= */

function updateWrongCount() {

    const notes =
        getWrongNotes();

    if (elementExists(wrongCount)) {

        wrongCount.innerText =
            notes.length;
    }
}


/* =========================================================
   15. 난이도 이름
   ========================================================= */

function levelName(level) {

    switch (level) {

        case "word":
            return "🔤 단어연습";

        case "easy":
            return "🐣 초급";

        case "medium":
            return "🐥 중급";

        case "hard":
            return "🦅 상급";

        default:
            return "영어 공부";
    }
}


/* =========================================================
   16. 오답노트 화면 표시
   ========================================================= */

function showWrongNoteScreen() {

    stopSpeaking();

    if (elementExists(homeScreen)) {
        homeScreen.style.display = "none";
    }

    if (elementExists(studyScreen)) {
        studyScreen.style.display = "none";
    }

    if (elementExists(wrongNoteScreen)) {
        wrongNoteScreen.style.display = "block";
    }

    renderWrongNotes();
    updateWrongCount();
}


/* =========================================================
   17. 오답노트 렌더링
   ---------------------------------------------------------
   중요:
   HTML onclick을 사용하지 않고
   addEventListener를 사용합니다.

   기존 오답노트 TTS 문제 해결 부분
   ========================================================= */

function renderWrongNotes() {

    const notes =
        getWrongNotes();

    if (!elementExists(wrongNoteList)) {
        return;
    }


    /* 오답 없음 */

    if (notes.length === 0) {

        wrongNoteList.innerHTML =
            `
            <div class="empty-note">
                아직 틀린 문제가 없어요.<br>
                공부를 시작해 보세요!
            </div>
            `;

        return;
    }


    /* 기존 내용 제거 */

    wrongNoteList.innerHTML = "";


    notes.forEach(function (note) {

        /* -----------------------------------------
           카드
           ----------------------------------------- */

        const card =
            document.createElement("article");

        card.className =
            "wrong-card";


        /* -----------------------------------------
           상단
           ----------------------------------------- */

        const top =
            document.createElement("div");

        top.className =
            "wrong-card-top";


        const level =
            document.createElement("span");

        level.className =
            "level-tag";

        level.innerText =
            levelName(note.level);


        const count =
            document.createElement("span");

        count.className =
            "wrong-count";

        count.innerText =
            `${note.count || 1}회 틀림`;


        top.appendChild(level);
        top.appendChild(count);


        /* -----------------------------------------
           한국어
           ----------------------------------------- */

        const kor =
            document.createElement("div");

        kor.className =
            "wrong-kor";

        kor.innerText =
            note.kor || "";


        /* -----------------------------------------
           영어
           ----------------------------------------- */

        const eng =
            document.createElement("div");

        eng.className =
            "wrong-eng";

        eng.innerText =
            note.eng || "";


        /* -----------------------------------------
           내가 선택한 답
           ----------------------------------------- */

        const userAnswer =
            document.createElement("div");

        userAnswer.className =
            "wrong-user";

        userAnswer.innerText =
            `내가 선택한 답: ${
                note.wrongAnswer || "기록 없음"
            }`;


        /* -----------------------------------------
           버튼 영역
           ----------------------------------------- */

        const actions =
            document.createElement("div");

        actions.className =
            "wrong-actions";


        /* -----------------------------------------
           TTS 버튼
           ----------------------------------------- */

        const speakButton =
            document.createElement("button");

        speakButton.type =
            "button";

        speakButton.innerText =
            "🔊 듣기";


        /*
         * 중요
         *
         * onclick="speakText(...)"
         *
         * 방식이 아니라
         *
         * addEventListener
         *
         * 방식으로 처리합니다.
         */

        speakButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                if (note.eng) {

                    speakText(
                        note.eng
                    );
                }
            }
        );


        /* -----------------------------------------
           삭제 버튼
           ----------------------------------------- */

        const deleteButton =
            document.createElement("button");

        deleteButton.type =
            "button";

        deleteButton.innerText =
            "삭제";


        deleteButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                deleteWrongNote(
                    note.id
                );
            }
        );


        /* -----------------------------------------
           버튼 추가
           ----------------------------------------- */

        actions.appendChild(
            speakButton
        );

        actions.appendChild(
            deleteButton
        );


        /* -----------------------------------------
           카드 완성
           ----------------------------------------- */

        card.appendChild(top);

        card.appendChild(kor);

        card.appendChild(eng);

        card.appendChild(userAnswer);

        card.appendChild(actions);


        wrongNoteList.appendChild(
            card
        );
    });
}


/* =========================================================
   18. 홈 화면
   ========================================================= */

function showHomeScreen() {

    stopSpeaking();

    if (elementExists(homeScreen)) {
        homeScreen.style.display = "block";
    }

    if (elementExists(studyScreen)) {
        studyScreen.style.display = "none";
    }

    if (elementExists(wrongNoteScreen)) {
        wrongNoteScreen.style.display = "none";
    }

    updateScoreDisplay();
    updateWrongCount();
}


/* =========================================================
   19. 공부 화면
   ========================================================= */

function showStudyScreen() {

    if (elementExists(homeScreen)) {
        homeScreen.style.display = "none";
    }

    if (elementExists(studyScreen)) {
        studyScreen.style.display = "block";
    }

    if (elementExists(wrongNoteScreen)) {
        wrongNoteScreen.style.display = "none";
    }

    updateScoreDisplay();
}


/* =========================================================
   20. 공부 시작
   ========================================================= */

function startStudy(level) {

    currentLevel =
        level || "word";

    isQuestionLocked = false;

    showStudyScreen();

    updateCurrentLevelTitle();

    stopSpeaking();

    nextQuestion();
}


/* =========================================================
   21. 현재 난이도 표시
   ========================================================= */

function updateCurrentLevelTitle() {

    if (
        elementExists(currentLevelTitle)
    ) {

        currentLevelTitle.innerText =
            levelName(currentLevel);
    }
}


/* =========================================================
   22. TTS 변수
   ========================================================= */

let synth = null;

let voices = [];

let isAudioUnlocked = false;

let isSpeaking = false;

let currentAudio = null;

let ttsReady = false;


/* =========================================================
   23. Web Speech API 초기화
   ========================================================= */

function initSpeechSynthesis() {

    if (
        typeof window !== "undefined" &&
        "speechSynthesis" in window &&
        typeof window.SpeechSynthesisUtterance !==
            "undefined"
    ) {

        synth =
            window.speechSynthesis;

        ttsReady = true;

        loadVoices();


        if (
            "onvoiceschanged" in synth
        ) {

            synth.onvoiceschanged =
                function () {

                    loadVoices();
                };
        }


        setTimeout(
            loadVoices,
            300
        );

        setTimeout(
            loadVoices,
            1000
        );

        setTimeout(
            loadVoices,
            2000
        );
    }
}


/* =========================================================
   24. 음성 목록
   ========================================================= */

function loadVoices() {

    if (!synth) {
        return;
    }

    try {

        const availableVoices =
            synth.getVoices();

        if (
            availableVoices &&
            availableVoices.length > 0
        ) {

            voices =
                availableVoices;
        }

    } catch (error) {

        console.log(
            "TTS 음성 목록 오류:",
            error
        );
    }
}


/* =========================================================
   25. 영어 음성 찾기
   ========================================================= */

function getEnglishVoice() {

    if (
        !voices ||
        voices.length === 0
    ) {

        loadVoices();
    }

    if (
        !voices ||
        voices.length === 0
    ) {

        return null;
    }


    /* 미국 영어 */

    let voice =
        voices.find(
            function (v) {

                return (
                    v.lang === "en-US" ||
                    v.lang === "en_US"
                );
            }
        );

    if (voice) {
        return voice;
    }


    /* 영국 영어 */

    voice =
        voices.find(
            function (v) {

                return (
                    v.lang === "en-GB" ||
                    v.lang === "en_GB"
                );
            }
        );

    if (voice) {
        return voice;
    }


    /* 영어 전체 */

    voice =
        voices.find(
            function (v) {

                return (
                    v.lang &&
                    v.lang
                        .toLowerCase()
                        .startsWith("en")
                );
            }
        );

    return voice || null;
}


/* =========================================================
   26. 모바일 오디오 잠금 해제
   ========================================================= */

function unlockAudio() {

    if (isAudioUnlocked) {
        return;
    }

    isAudioUnlocked = true;


    /* Web Speech */

    if (synth) {

        try {

            synth.resume();

        } catch (error) {

            console.log(
                "speechSynthesis resume 오류:",
                error
            );
        }
    }


    /* Android Native TTS */

    if (
        window.AndroidTTS &&
        typeof window.AndroidTTS.init ===
            "function"
    ) {

        try {

            window.AndroidTTS.init();

        } catch (error) {

            console.log(
                "Android TTS 초기화 오류:",
                error
            );
        }
    }
}


/* =========================================================
   27. 첫 사용자 터치
   ========================================================= */

document.addEventListener(
    "click",
    unlockAudio,
    {
        once: true,
        passive: true
    }
);


document.addEventListener(
    "touchstart",
    unlockAudio,
    {
        once: true,
        passive: true
    }
);


document.addEventListener(
    "pointerdown",
    unlockAudio,
    {
        once: true,
        passive: true
    }
);


/* =========================================================
   28. Android Native TTS
   ========================================================= */

function speakWithAndroidTTS(text) {

    if (!window.AndroidTTS) {
        return false;
    }

    try {

        if (
            typeof window.AndroidTTS.speak ===
            "function"
        ) {

            window.AndroidTTS.speak(
                String(text)
            );

            isSpeaking = true;

            return true;
        }

    } catch (error) {

        console.log(
            "Android Native TTS 오류:",
            error
        );
    }

    return false;
}


/* =========================================================
   29. Android TTS 중지
   ========================================================= */

function stopAndroidTTS() {

    if (
        window.AndroidTTS &&
        typeof window.AndroidTTS.stop ===
            "function"
    ) {

        try {

            window.AndroidTTS.stop();

        } catch (error) {

            console.log(
                "Android TTS stop 오류:",
                error
            );
        }
    }
}


/* =========================================================
   30. Web Speech TTS
   ========================================================= */

function speakWithWebSpeech(text) {

    if (!synth) {
        return false;
    }

    try {

        synth.cancel();


        setTimeout(
            function () {

                try {

                    const utterance =
                        new SpeechSynthesisUtterance(
                            String(text)
                        );


                    /* 영어 */

                    utterance.lang =
                        "en-US";


                    /* 공부용 속도 */

                    utterance.rate =
                        0.85;


                    /* 음 높이 */

                    utterance.pitch =
                        1.05;


                    /* 볼륨 */

                    utterance.volume =
                        1.0;


                    /* 영어 음성 선택 */

                    const englishVoice =
                        getEnglishVoice();

                    if (englishVoice) {

                        utterance.voice =
                            englishVoice;
                    }


                    utterance.onstart =
                        function () {

                            isSpeaking =
                                true;
                        };


                    utterance.onend =
                        function () {

                            isSpeaking =
                                false;
                        };


                    utterance.onerror =
                        function (event) {

                            isSpeaking =
                                false;

                            console.log(
                                "Web Speech TTS 오류:",
                                event
                            );
                        };


                    synth.speak(
                        utterance
                    );


                    if (synth.paused) {

                        synth.resume();
                    }

                } catch (error) {

                    isSpeaking =
                        false;

                    console.log(
                        "Speech 실행 오류:",
                        error
                    );
                }

            },
            100
        );

        return true;

    } catch (error) {

        console.log(
            "Web Speech 오류:",
            error
        );

        return false;
    }
}


/* =========================================================
   31. Audio TTS 보조 기능
   ========================================================= */

function speakWithAudio(text) {

    try {

        /* 기존 Audio 중지 */

        if (currentAudio) {

            try {

                currentAudio.pause();

                currentAudio.currentTime =
                    0;

            } catch (error) {

                console.log(
                    "기존 Audio 중지 오류:",
                    error
                );
            }

            currentAudio =
                null;
        }


        const encodedText =
            encodeURIComponent(
                String(text)
            );


        const audioUrl =
            "https://translate.google.com/translate_tts" +
            "?ie=UTF-8" +
            "&tl=en" +
            "&client=tw-ob" +
            "&q=" +
            encodedText;


        currentAudio =
            new Audio(audioUrl);


        currentAudio.volume =
            1.0;


        currentAudio.onplay =
            function () {

                isSpeaking =
                    true;
            };


        currentAudio.onended =
            function () {

                isSpeaking =
                    false;
            };


        currentAudio.onerror =
            function (error) {

                isSpeaking =
                    false;

                console.log(
                    "Audio TTS 오류:",
                    error
                );
            };


        const playPromise =
            currentAudio.play();


        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                function (error) {

                    console.log(
                        "Audio 재생 실패:",
                        error
                    );

                    isSpeaking =
                        false;
                }
            );
        }


        return true;

    } catch (error) {

        console.log(
            "Audio TTS 생성 오류:",
            error
        );

        return false;
    }
}


/* =========================================================
   32. 통합 TTS
   ---------------------------------------------------------
   모든 TTS는 반드시 이 함수를 사용
   ========================================================= */

function speakText(text) {

    if (
        text === undefined ||
        text === null
    ) {

        return;
    }


    text =
        String(text)
            .replace(/\s+/g, " ")
            .trim();


    if (!text) {
        return;
    }


    unlockAudio();


    /* -----------------------------------------
       1순위
       Android Native TTS
       ----------------------------------------- */

    if (
        speakWithAndroidTTS(text)
    ) {

        return;
    }


    /* -----------------------------------------
       2순위
       Web Speech API
       ----------------------------------------- */

    if (
        ttsReady &&
        synth
    ) {

        const result =
            speakWithWebSpeech(
                text
            );

        if (result) {
            return;
        }
    }


    /* -----------------------------------------
       3순위
       Audio fallback
       ----------------------------------------- */

    speakWithAudio(text);
}


/* =========================================================
   33. TTS 중지
   ========================================================= */

function stopSpeaking() {

    isSpeaking =
        false;


    /* Android */

    stopAndroidTTS();


    /* Web Speech */

    if (synth) {

        try {

            synth.cancel();

            synth.resume();

        } catch (error) {

            console.log(
                "Web Speech 중지 오류:",
                error
            );
        }
    }


    /* Audio */

    if (currentAudio) {

        try {

            currentAudio.pause();

            currentAudio.currentTime =
                0;

        } catch (error) {

            console.log(
                "Audio 중지 오류:",
                error
            );
        }

        currentAudio =
            null;
    }
}


/* =========================================================
   34. 현재 문제 전체 듣기
   ========================================================= */

function speakCurrentQuestion() {

    if (
        currentQuestion &&
        currentQuestion.eng
    ) {

        speakText(
            currentQuestion.eng
        );
    }
}


/* =========================================================
   35. 난이도 선택
   ---------------------------------------------------------
   기존 HTML에서 setLevel()을 직접 호출해도 작동
   ========================================================= */

function setLevel(level) {

    currentLevel =
        level || "word";

    updateCurrentLevelTitle();

    updateLevelButtons();

    stopSpeaking();

    nextQuestion();
}


/* =========================================================
   36. 난이도 버튼 상태
   ---------------------------------------------------------
   공부 화면에 기존 버튼이 남아 있어도 대응
   ========================================================= */

function updateLevelButtons() {

    const btnWord =
        document.getElementById(
            "btnWord"
        );

    const btnEasy =
        document.getElementById(
            "btnEasy"
        );

    const btnMedium =
        document.getElementById(
            "btnMedium"
        );

    const btnHard =
        document.getElementById(
            "btnHard"
        );


    if (btnWord) {

        btnWord.classList.toggle(
            "active",
            currentLevel === "word"
        );
    }


    if (btnEasy) {

        btnEasy.classList.toggle(
            "active",
            currentLevel === "easy"
        );
    }


    if (btnMedium) {

        btnMedium.classList.toggle(
            "active",
            currentLevel === "medium"
        );
    }


    if (btnHard) {

        btnHard.classList.toggle(
            "active",
            currentLevel === "hard"
        );
    }
}


/* =========================================================
   37. 다음 문제
   ========================================================= */

function nextQuestion() {

    if (
        !elementExists(questionBox) ||
        !elementExists(wordPool)
    ) {

        return;
    }


    isQuestionLocked =
        false;


    /* 이전 타이머 제거 */

    if (answerCheckTimer) {

        clearTimeout(
            answerCheckTimer
        );

        answerCheckTimer =
            null;
    }


    /* 화면 초기화 */

    answerArea.innerHTML =
        "";

    wordPool.innerHTML =
        "";


    if (elementExists(feedbackMessage)) {

        feedbackMessage.className =
            "feedback-message";

        feedbackMessage.innerText =
            "";
    }


    /* -----------------------------------------
       Listen 버튼
       ----------------------------------------- */

    const listenButton =
        document.createElement("button");

    listenButton.type =
        "button";

    listenButton.className =
        "tts-btn";

    listenButton.innerText =
        "Listen 🔊";


    listenButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            speakCurrentQuestion();
        }
    );


    /* =========================================
       단어 연습
       ========================================= */

    if (currentLevel === "word") {

        answerArea.style.display =
            "none";

        areaTitle.innerText =
            "👇 정답을 선택해 주세요 👇";


        /* 문제 초기화 */

        if (
            remainingWordQuestions.length ===
            0
        ) {

            remainingWordQuestions =
                [...wordQuestions];
        }


        const randomIndex =
            Math.floor(
                Math.random() *
                remainingWordQuestions.length
            );


        currentQuestion =
            remainingWordQuestions[
                randomIndex
            ];


        remainingWordQuestions.splice(
            randomIndex,
            1
        );


        /* 질문 방향 */

        const isKorToEng =
            Math.random() < 0.5;


        /* -------------------------------------
           한국어 → 영어
           ------------------------------------- */

        if (isKorToEng) {

            questionBox.innerHTML =
                "";


            questionBox.appendChild(
                listenButton
            );


            const questionText =
                document.createElement(
                    "div"
                );

            questionText.innerText =
                currentQuestion.kor;


            questionBox.appendChild(
                questionText
            );


            targetAnswer =
                [
                    currentQuestion.eng
                ];


            let options =
                [
                    currentQuestion.eng
                ];


            /* 보기 4개 */

            while (
                options.length < 4 &&
                options.length <
                    wordQuestions.length
            ) {

                const randomItem =
                    wordQuestions[
                        Math.floor(
                            Math.random() *
                            wordQuestions.length
                        )
                    ];


                if (
                    !options.includes(
                        randomItem.eng
                    )
                ) {

                    options.push(
                        randomItem.eng
                    );
                }
            }


            shuffleArray(
                options
            );


            options.forEach(
                function (option) {

                    createWordChoiceButton(
                        option
                    );
                }
            );
        }


        /* -------------------------------------
           영어 → 한국어
           ------------------------------------- */

        else {

            questionBox.innerHTML =
                "";


            questionBox.appendChild(
                listenButton
            );


            const questionText =
                document.createElement(
                    "div"
                );

            questionText.innerText =
                currentQuestion.eng;


            questionBox.appendChild(
                questionText
            );


            targetAnswer =
                [
                    currentQuestion.kor
                ];


            let options =
                [
                    currentQuestion.kor
                ];


            while (
                options.length < 4 &&
                options.length <
                    wordQuestions.length
            ) {

                const randomItem =
                    wordQuestions[
                        Math.floor(
                            Math.random() *
                            wordQuestions.length
                        )
                    ];


                if (
                    !options.includes(
                        randomItem.kor
                    )
                ) {

                    options.push(
                        randomItem.kor
                    );
                }
            }


            shuffleArray(
                options
            );


            options.forEach(
                function (option) {

                    createWordChoiceButton(
                        option
                    );
                }
            );
        }


        return;
    }


    /* =========================================
       문장 문제
       ========================================= */

    answerArea.style.display =
        "flex";

    areaTitle.innerText =
        "👇 여기에 단어를 순서대로 놓아주세요 👇";


    /* 문제 초기화 */

    if (
        remainingQuestions.length === 0
    ) {

        remainingQuestions =
            [...allQuestions];
    }


    const randomIndex =
        Math.floor(
            Math.random() *
            remainingQuestions.length
        );


    currentQuestion =
        remainingQuestions[
            randomIndex
        ];


    remainingQuestions.splice(
        randomIndex,
        1
    );


    const words =
        String(
            currentQuestion.eng || ""
        )
        .trim()
        .split(/\s+/);


    /* =========================================
       초급
       ========================================= */

    if (
        currentLevel === "easy"
    ) {

        const blankIdx =
            Math.floor(
                Math.random() *
                words.length
            );


        targetAnswer =
            [
                words[blankIdx]
            ];


        const displayWords =
            [...words];


        displayWords[blankIdx] =
            "___";


        questionBox.innerHTML =
            "";


        questionBox.appendChild(
            listenButton
        );


        const korText =
            document.createElement(
                "div"
            );

        korText.innerText =
            currentQuestion.kor;


        questionBox.appendChild(
            korText
        );


        const sentence =
            document.createElement(
                "span"
            );

        sentence.className =
            "easy-sentence";

        sentence.innerText =
            displayWords.join(" ");


        questionBox.appendChild(
            sentence
        );


        let poolWords =
            [...targetAnswer];


        const fakeWords = [

            "cat",
            "dog",
            "red",
            "blue",
            "big",
            "small",
            "run",
            "happy",
            "sun",
            "sky",
            "is",
            "a",
            "go",
            "book",
            "house"

        ];


        while (
            poolWords.length < 3
        ) {

            const randomFake =
                fakeWords[
                    Math.floor(
                        Math.random() *
                        fakeWords.length
                    )
                ];


            if (
                !poolWords.includes(
                    randomFake
                )
            ) {

                poolWords.push(
                    randomFake
                );
            }
        }


        shuffleArray(
            poolWords
        );


        poolWords.forEach(
            function (word) {

                createWordButton(
                    word
                );
            }
        );


        return;
    }


    /* =========================================
       중급
       ========================================= */

    if (
        currentLevel === "medium" &&
        words.length >= 2
    ) {

        const blankIndices =
            [];


        while (
            blankIndices.length < 2
        ) {

            const randomIndex =
                Math.floor(
                    Math.random() *
                    words.length
                );


            if (
                !blankIndices.includes(
                    randomIndex
                )
            ) {

                blankIndices.push(
                    randomIndex
                );
            }
        }


        blankIndices.sort(
            function (a, b) {
                return a - b;
            }
        );


        targetAnswer =
            blankIndices.map(
                function (index) {

                    return words[index];
                }
            );


        const displayWords =
            [...words];


        blankIndices.forEach(
            function (index) {

                displayWords[index] =
                    "___";
            }
        );


        questionBox.innerHTML =
            "";


        questionBox.appendChild(
            listenButton
        );


        const korText =
            document.createElement(
                "div"
            );

        korText.innerText =
            currentQuestion.kor;


        questionBox.appendChild(
            korText
        );


        const sentence =
            document.createElement(
                "span"
            );

        sentence.className =
            "easy-sentence";

        sentence.innerText =
            displayWords.join(" ");


        questionBox.appendChild(
            sentence
        );


        let poolWords =
            [...targetAnswer];


        const fakeWords = [

            "cat",
            "red",
            "big",
            "run",
            "happy",
            "sun",
            "go",
            "sky",
            "book",
            "house"

        ];


        let randomFake =
            fakeWords[
                Math.floor(
                    Math.random() *
                    fakeWords.length
                )
            ];


        while (
            poolWords.includes(
                randomFake
            )
        ) {

            randomFake =
                fakeWords[
                    Math.floor(
                        Math.random() *
                        fakeWords.length
                    )
                ];
        }


        poolWords.push(
            randomFake
        );


        shuffleArray(
            poolWords
        );


        poolWords.forEach(
            function (word) {

                createWordButton(
                    word
                );
            }
        );


        return;
    }


    /* =========================================
       상급
       ========================================= */

    targetAnswer =
        [...words];


    questionBox.innerHTML =
        "";


    questionBox.appendChild(
        listenButton
    );


    const korText =
        document.createElement(
            "div"
        );

    korText.innerText =
        currentQuestion.kor;


    questionBox.appendChild(
        korText
    );


    const poolWords =
        [...words];


    shuffleArray(
        poolWords
    );


    poolWords.forEach(
        function (word) {

            createWordButton(
                word
            );
        }
    );
}


/* =========================================================
   38. 배열 섞기
   ========================================================= */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        const temp =
            array[i];

        array[i] =
            array[j];

        array[j] =
            temp;
    }

    return array;
}


/* =========================================================
   39. 단어 선택 버튼
   ========================================================= */

function createWordChoiceButton(
    option
) {

    const btn =
        document.createElement(
            "button"
        );


    btn.type =
        "button";


    btn.innerText =
        option;


    btn.className =
        "word-btn";


    btn.addEventListener(
        "click",
        function () {

            selectWordOption(
                option
            );
        }
    );


    wordPool.appendChild(
        btn
    );
}


/* =========================================================
   40. 단어 선택
   ========================================================= */

function selectWordOption(
    selected
) {

    if (isQuestionLocked) {
        return;
    }


    /* 영어 보기 클릭 시 발음 */

    if (
        /[a-zA-Z]/.test(
            String(selected)
        )
    ) {

        speakText(
            selected
        );
    }


    /* -----------------------------------------
       정답
       ----------------------------------------- */

    if (
        selected ===
        targetAnswer[0]
    ) {

        isQuestionLocked =
            true;


        showMessage(
            "참 잘했어요! 💯 정답입니다!",
            true
        );


        addScore(10);


        setTimeout(
            function () {

                nextQuestion();

            },
            1200
        );


        return;
    }


    /* -----------------------------------------
       오답
       ----------------------------------------- */

    addWrongNote(
        selected
    );


    showMessage(
        "앗, 다시 한 번 생각해보자! 🤔",
        false
    );


    wordPool.classList.add(
        "shake"
    );


    setTimeout(
        function () {

            wordPool.classList.remove(
                "shake"
            );

        },
        400
    );
}


/* =========================================================
   41. 문장용 단어 버튼 생성
   ========================================================= */

function createWordButton(
    word
) {

    const btn =
        document.createElement(
            "button"
        );


    btn.type =
        "button";


    btn.innerText =
        word;


    btn.className =
        "word-btn";


    btn.addEventListener(
        "click",
        function () {

            moveWord(
                btn
            );
        }
    );


    wordPool.appendChild(
        btn
    );
}


/* =========================================================
   42. 단어 이동
   ========================================================= */

function moveWord(
    btn
) {

    if (isQuestionLocked) {
        return;
    }


    /* 영어 단어 발음 */

    if (
        /[a-zA-Z]/.test(
            btn.innerText
        )
    ) {

        speakText(
            btn.innerText
        );
    }


    /* -----------------------------------------
       문제 보기 → 정답 영역
       ----------------------------------------- */

    if (
        btn.parentElement ===
        wordPool
    ) {

        btn.className =
            "answer-btn";

        answerArea.appendChild(
            btn
        );
    }


    /* -----------------------------------------
       정답 영역 → 문제 보기
       ----------------------------------------- */

    else {

        btn.className =
            "word-btn";

        wordPool.appendChild(
            btn
        );
    }


    /* -----------------------------------------
       정답 개수만큼 선택하면 확인
       ----------------------------------------- */

    if (
        answerArea.children.length ===
        targetAnswer.length
    ) {

        answerCheckTimer =
            setTimeout(
                function () {

                    checkAnswer();

                },
                300
            );
    }
}


/* =========================================================
   43. 메시지
   ========================================================= */

function showMessage(
    message,
    isCorrect
) {

    if (
        !elementExists(
            feedbackMessage
        )
    ) {

        return;
    }


    feedbackMessage.innerText =
        message;


    feedbackMessage.className =
        "feedback-message show " +
        (
            isCorrect
                ? "correct"
                : "wrong"
        );


    setTimeout(
        function () {

            feedbackMessage.classList.remove(
                "show"
            );

        },
        1500
    );
}


/* =========================================================
   44. 문장 정답 확인
   ========================================================= */

function checkAnswer() {

    if (isQuestionLocked) {
        return;
    }


    const userWords =
        Array.from(
            answerArea.children
        )
        .map(
            function (btn) {

                return btn.innerText;
            }
        );


    const userAnswer =
        userWords.join(" ");


    const expectedAnswer =
        targetAnswer.join(" ");


    /* -----------------------------------------
       정답
       ----------------------------------------- */

    if (
        userAnswer ===
        expectedAnswer
    ) {

        isQuestionLocked =
            true;


        showMessage(
            "참 잘했어요! 💯 정답입니다!",
            true
        );


        addScore(10);


        setTimeout(
            function () {

                nextQuestion();

            },
            1500
        );


        return;
    }


    /* -----------------------------------------
       오답
       ----------------------------------------- */

    addWrongNote(
        userAnswer
    );


    showMessage(
        "앗, 다시 한 번 생각해보자! 🤔",
        false
    );


    answerArea.classList.add(
        "shake"
    );


    setTimeout(
        function () {

            answerArea.classList.remove(
                "shake"
            );

        },
        400
    );


    /* -----------------------------------------
       선택 단어 다시 돌려놓기
       ----------------------------------------- */

    Array.from(
        answerArea.children
    )
    .forEach(
        function (btn) {

            btn.className =
                "word-btn";

            wordPool.appendChild(
                btn
            );
        }
    );
}


/* =========================================================
   45. 오답노트 TTS
   ---------------------------------------------------------
   전역에서 사용할 수 있도록 함수 이름 유지
   ========================================================= */

window.speakText =
    speakText;

window.speakCurrentQuestion =
    speakCurrentQuestion;


/* =========================================================
   46. 홈으로 이동
   ---------------------------------------------------------
   HTML에서 onclick="goHome()"을 사용해도 작동
   ========================================================= */

function goHome() {

    stopSpeaking();

    isQuestionLocked =
        false;

    showHomeScreen();
}


window.goHome =
    goHome;


/* =========================================================
   47. 오답노트 열기
   ---------------------------------------------------------
   HTML에서 onclick="openWrongNotes()"
   사용해도 작동
   ========================================================= */

function openWrongNotes() {

    showWrongNoteScreen();
}


window.openWrongNotes =
    openWrongNotes;


/* =========================================================
   48. 오답노트 전체 삭제
   ========================================================= */

window.clearWrongNotes =
    clearWrongNotes;


/* =========================================================
   49. 공부 시작 전역 함수
   ---------------------------------------------------------
   HTML에서
   onclick="startStudy('word')"
   등으로 사용할 수 있음
   ========================================================= */

window.startStudy =
    startStudy;


/* =========================================================
   50. setLevel 전역 함수
   ========================================================= */

window.setLevel =
    setLevel;


/* =========================================================
   51. 페이지 가시성 변경
   ========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.visibilityState ===
            "visible"
        ) {

            if (synth) {

                try {

                    synth.resume();

                } catch (error) {

                    console.log(
                        "TTS resume 오류:",
                        error
                    );
                }
            }

            loadVoices();
        }
    }
);


/* =========================================================
   52. pageshow
   ========================================================= */

window.addEventListener(
    "pageshow",
    function () {

        if (synth) {

            try {

                synth.resume();

            } catch (error) {

                console.log(
                    "pageshow TTS 오류:",
                    error
                );
            }
        }

        loadVoices();
    }
);


/* =========================================================
   53. 초기 실행
   ========================================================= */

function initializeApp() {

    /* 점수 */

    loadScore();


    /* 오답 개수 */

    updateWrongCount();


    /* TTS */

    initSpeechSynthesis();


    /* 현재 난이도 */

    updateCurrentLevelTitle();


    /* -----------------------------------------
       화면 초기 상태
       ----------------------------------------- */

    if (
        elementExists(homeScreen) &&
        elementExists(studyScreen)
    ) {

        showHomeScreen();

    } else {

        /*
         * 기존 index.html을 사용하는 경우
         * 바로 문제 시작
         */

        nextQuestion();
    }
}


/* =========================================================
   54. DOM 로딩 후 실행
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );

} else {

    initializeApp();
}
