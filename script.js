// 🐣  데이터 모음!
const allQuestions = [
    // 기존 기초 데이터
    { kor: "이것은 사과야 🍎", eng: "This is an apple" },
    { kor: "나는 강아지를 좋아해 🐶", eng: "I like dogs" },
    { kor: "나는 배가 고파 🤤", eng: "I am hungry" },
    { kor: "하늘은 파란색이야 ☁️", eng: "The sky is blue" },
    { kor: "안녕, 만나서 반가워! 👋", eng: "Hello nice to meet you" },
    
    // 동물 친구들
    { kor: "원숭이는 바나나를 좋아해 🐒", eng: "Monkeys like bananas" },
    { kor: "고양이가 자고 있어 🐈", eng: "The cat is sleeping" },
    { kor: "저것은 곰이야 🐻", eng: "That is a bear" },
    { kor: "호랑이는 힘이 세 🐯", eng: "A tiger is strong" },
    { kor: "기린은 목이 길어 🦒", eng: "A giraffe has a long neck" },
    { kor: "코끼리는 커 🐘", eng: "An elephant is big" },
    { kor: "쥐는 작아 🐭", eng: "A mouse is small" },
    { kor: "물고기가 수영해 🐟", eng: "A fish swims" },
    { kor: "오리가 꽥꽥거려 🦆", eng: "A duck quacks" },
    { kor: "나비가 날아다녀 🦋", eng: "A butterfly flies" },
    { kor: "이것은 내 애완동물이야 🐾", eng: "This is my pet" },
    { kor: "개구리가 점프해 🐸", eng: "A frog jumps" },
    { kor: "소는 우유를 줘 🐄", eng: "A cow gives milk" },
    { kor: "나는 펭귄을 봐 🐧", eng: "I see a penguin" },
    { kor: "뱀은 길어 🐍", eng: "A snake is long" },

    // 음식과 과일
    { kor: "나는 빵을 원해 🍞", eng: "I want bread" },
    { kor: "이 케이크는 맛있어 🍰", eng: "This cake is yummy" },
    { kor: "포도는 보라색이야 🍇", eng: "Grapes are purple" },
    { kor: "나는 초콜릿을 사랑해 🍫", eng: "I love chocolate" },
    { kor: "사탕을 줘 🍬", eng: "Give me candy" },
    { kor: "이것은 내 주스야 🧃", eng: "This is my juice" },
    { kor: "수박은 달콤해 🍉", eng: "A watermelon is sweet" },
    { kor: "나는 당근을 안 좋아해 🥕", eng: "I do not like carrots" },
    { kor: "아이스크림은 차가워 🍦", eng: "Ice cream is cold" },
    { kor: "치즈를 먹자 🧀", eng: "Let's eat cheese" },

    // 내 감정과 상태
    { kor: "나는 신나 😆", eng: "I am excited" },
    { kor: "나는 피곤해 😮‍💨", eng: "I am tired" },
    { kor: "나는 목이 말라 🥤", eng: "I am thirsty" },
    { kor: "나는 무서워 😱", eng: "I am scared" },
    { kor: "나는 용감해 🦸", eng: "I am brave" },
    { kor: "그는 아파 🤒", eng: "He is sick" },
    { kor: "그녀는 예뻐 👸", eng: "She is pretty" },
    { kor: "그는 키가 커 🧍‍♂️", eng: "He is tall" },
    { kor: "나는 똑똑해 🧠", eng: "I am smart" },
    { kor: "우리는 친구야 👫", eng: "We are friends" },

    // 색깔과 모양
    { kor: "내 차는 검은색이야 🚗", eng: "My car is black" },
    { kor: "꽃이 분홍색이야 🌸", eng: "The flower is pink" },
    { kor: "레몬은 노란색이야 🍋", eng: "A lemon is yellow" },
    { kor: "눈은 하얀색이야 ⛄", eng: "Snow is white" },
    { kor: "이것은 동그라미야 ⭕", eng: "This is a circle" },
    { kor: "별이 반짝여 ⭐", eng: "The star is shining" },
    { kor: "그것은 네모야 🔲", eng: "It is a square" },
    { kor: "신발이 갈색이야 👞", eng: "The shoes are brown" },

    // 일상 행동
    { kor: "나는 아침에 일어나 🌅", eng: "I wake up in the morning" },
    { kor: "나는 이를 닦아 🪥", eng: "I brush my teeth" },
    { kor: "나는 세수를 해 🧼", eng: "I wash my face" },
    { kor: "학교에 가자 🎒", eng: "Let's go to school" },
    { kor: "나는 숙제를 해 ✏️", eng: "I do my homework" },
    { kor: "그는 노래를 불러 🎤", eng: "He sings a song" },
    { kor: "그녀는 춤을 춰 💃", eng: "She dances" },
    { kor: "나는 그림을 그려 🎨", eng: "I draw a picture" },
    { kor: "우리는 게임을 해 🎮", eng: "We play games" },
    { kor: "자전거를 타자 🚲", eng: "Let's ride a bike" },
    { kor: "나는 텔레비전을 봐 📺", eng: "I watch TV" },
    { kor: "손을 씻어 👐", eng: "Wash your hands" },
    { kor: "문 열어줘 🚪", eng: "Open the door" },
    { kor: "창문 닫아줘 🪟", eng: "Close the window" },
    { kor: "앉아주세요 🪑", eng: "Sit down please" },
    { kor: "일어서주세요 🧍", eng: "Stand up please" },

    // 자연과 날씨
    { kor: "오늘 날씨 맑음 ☀️", eng: "It is sunny today" },
    { kor: "비가 오고 있어 ☔", eng: "It is raining" },
    { kor: "바람이 불어 🌬️", eng: "It is windy" },
    { kor: "구름이 많아 ☁️", eng: "It is cloudy" },
    { kor: "달이 밝아 🌕", eng: "The moon is bright" },
    { kor: "바다에 가자 🏖️", eng: "Let's go to the sea" },
    { kor: "산이 높아 ⛰️", eng: "The mountain is high" },
    { kor: "강이 길어  رود", eng: "The river is long" },

    // 물건과 가족
    { kor: "이것은 내 가방이야 🎒", eng: "This is my bag" },
    { kor: "저것은 네 연필이야 ✏️", eng: "That is your pencil" },
    { kor: "공을 던져 ⚾", eng: "Throw the ball" },
    { kor: "장난감을 치워 🧸", eng: "Put away the toys" },
    { kor: "엄마 사랑해요 👩", eng: "I love you mom" },
    { kor: "아빠는 멋져 👨", eng: "Dad is cool" },
    { kor: "나는 형제가 있어 👦", eng: "I have a brother" },
    { kor: "나는 자매가 있어 👧", eng: "I have a sister" },
    { kor: "할머니 안녕하세요 👵", eng: "Hello grandmother" },
    { kor: "이것은 내 집이야 🏠", eng: "This is my house" },

    { kor: "코를 만져봐 👃", eng: "Touch your nose" },
    { kor: "눈을 감아 🙈", eng: "Close your eyes" },
    { kor: "입을 벌려 👄", eng: "Open your mouth" },
    { kor: "손을 들어 🙋", eng: "Raise your hand" },
    { kor: "발을 굴러 🦶", eng: "Stomp your feet" },
    { kor: "손뼉을 쳐 👏", eng: "Clap your hands" },
    { kor: "고개를 끄덕여 🙆", eng: "Nod your head" },
    { kor: "내 머리카락은 길어 💇‍♀️", eng: "My hair is long" },
    { kor: "나는 다리가 두 개야 🦵", eng: "I have two legs" },
    { kor: "배가 아파 🤕", eng: "My tummy hurts" },
    { kor: "나는 모자를 써 🧢", eng: "I wear a hat" },
    { kor: "내 바지는 파란색이야 👖", eng: "My pants are blue" },
    { kor: "신발을 신어 👟", eng: "Put on your shoes" },
    { kor: "외투를 입어 🧥", eng: "Put on your coat" },
    { kor: "양말을 신어 🧦", eng: "Put on your socks" },
    { kor: "안경을 써 👓", eng: "Wear your glasses" },
    { kor: "이 티셔츠는 예뻐 👕", eng: "This shirt is pretty" },
    { kor: "치마가 빨간색이야 👗", eng: "The skirt is red" },
    { kor: "장갑을 껴 🧤", eng: "Put on your gloves" },
    { kor: "이것은 내 반지야 💍", eng: "This is my ring" },
    { kor: "우리 아빠야 👨", eng: "This is my dad" },
    { kor: "우리 엄마야 👩", eng: "This is my mom" },
    { kor: "그는 내 오빠야 👦", eng: "He is my brother" },
    { kor: "그녀는 내 여동생이야 👧", eng: "She is my sister" },
    { kor: "할아버지는 친절해 👴", eng: "Grandpa is kind" },
    { kor: "할머니는 따뜻해 👵", eng: "Grandma is warm" },
    { kor: "아기가 울고 있어 👶", eng: "The baby is crying" },
    { kor: "삼촌이 왔어 👨‍🦱", eng: "Uncle is here" },
    { kor: "이모 안녕 👋", eng: "Hello aunt" },
    { kor: "우리는 가족이야 👨‍👩‍👧‍👦", eng: "We are a family" },
    { kor: "밥을 먹자 🍚", eng: "Let's eat rice" },
    { kor: "나는 고기를 좋아해 🥩", eng: "I like meat" },
    { kor: "생선은 맛있어 🐟", eng: "Fish is delicious" },
    { kor: "수프가 뜨거워 🍲", eng: "The soup is hot" },
    { kor: "계란을 먹어 🥚", eng: "Eat an egg" },
    { kor: "감자튀김 주세요 🍟", eng: "French fries please" },
    { kor: "햄버거는 커 🍔", eng: "The hamburger is big" },
    { kor: "주스를 마셔 🧃", eng: "Drink some juice" },
    { kor: "샐러드를 먹어 🥗", eng: "Eat the salad" },
    { kor: "핫도그를 좋아해 🌭", eng: "I like hot dogs" },
    { kor: "바나나는 길어 🍌", eng: "A banana is long" },
    { kor: "복숭아는 달콤해 🍑", eng: "A peach is sweet" },
    { kor: "체리는 작아 🍒", eng: "Cherries are small" },
    { kor: "파인애플은 노란색이야 🍍", eng: "A pineapple is yellow" },
    { kor: "오렌지 주스 주세요 🍊", eng: "Orange juice please" },
    { kor: "나는 토마토를 먹어 🍅", eng: "I eat a tomato" },
    { kor: "양파는 매워 🧅", eng: "An onion is spicy" },
    { kor: "감자를 요리해 🥔", eng: "Cook the potato" },
    { kor: "옥수수는 맛있어 🌽", eng: "Corn is yummy" },
    { kor: "오이는 초록색이야 🥒", eng: "A cucumber is green" },
    { kor: "달려가자 🏃", eng: "Let's run" },
    { kor: "높이 점프해 ⬆️", eng: "Jump high" },
    { kor: "천천히 걸어 🚶", eng: "Walk slowly" },
    { kor: "바닥에 앉아 ⬇️", eng: "Sit on the floor" },
    { kor: "빨리 일어나 🧍", eng: "Stand up quickly" },
    { kor: "책을 덮어 📕", eng: "Close the book" },
    { kor: "연필을 잡아 ✏️", eng: "Hold the pencil" },
    { kor: "그림을 색칠해 🖍️", eng: "Color the picture" },
    { kor: "종이를 잘라 ✂️", eng: "Cut the paper" },
    { kor: "이름을 써봐 📝", eng: "Write your name" },
    { kor: "공을 발로 차 ⚽", eng: "Kick the ball" },
    { kor: "공을 잡아 ⚾", eng: "Catch the ball" },
    { kor: "숨바꼭질 하자 🙈", eng: "Let's play hide and seek" },
    { kor: "미끄럼틀을 타자 🛝", eng: "Let's slide" },
    { kor: "그네를 타자 🎡", eng: "Let's swing" },
    { kor: "모래성을 만들어 🏖️", eng: "Make a sandcastle" },
    { kor: "장난감을 나눠 써 🤝", eng: "Share your toys" },
    { kor: "내 인형이야 🎎", eng: "It is my doll" },
    { kor: "로봇이 움직여 🤖", eng: "The robot moves" },
    { kor: "블록을 쌓아 🧱", eng: "Stack the blocks" },
    { kor: "학교 버스가 와 🚌", eng: "The school bus comes" },
    { kor: "선생님 안녕하세요 👩‍🏫", eng: "Hello teacher" },
    { kor: "의자에 앉아 🪑", eng: "Sit on the chair" },
    { kor: "책상 위를 봐 🖥️", eng: "Look at the desk" },
    { kor: "조용히 해 주세요 🤫", eng: "Please be quiet" },
    { kor: "질문 있어요 🙋", eng: "I have a question" },
    { kor: "화장실에 가도 되나요 🚽", eng: "Can I go to the restroom" },
    { kor: "쉬는 시간이야 ⏰", eng: "It is break time" },
    { kor: "점심 먹을 시간이야 🍱", eng: "It is time for lunch" },
    { kor: "집에 갈 시간이야 🏠", eng: "It is time to go home" },
    { kor: "봄이 왔어 🌷", eng: "Spring is here" },
    { kor: "여름은 더워 ☀️", eng: "Summer is hot" },
    { kor: "가을에는 잎이 떨어져 🍂", eng: "Leaves fall in autumn" },
    { kor: "겨울은 추워 ❄️", eng: "Winter is cold" },
    { kor: "눈사람을 만들자 ⛄", eng: "Let's make a snowman" },
    { kor: "우산을 챙겨 ☂️", eng: "Take your umbrella" },
    { kor: "무지개가 예뻐 🌈", eng: "The rainbow is pretty" },
    { kor: "별이 많아 ✨", eng: "There are many stars" },
    { kor: "해가 뜨고 있어 🌅", eng: "The sun is rising" },
    { kor: "달이 크다 🌝", eng: "The moon is big" },
    { kor: "개미가 지나가 🐜", eng: "An ant passes by" },
    { kor: "벌이 윙윙거려 🐝", eng: "A bee buzzes" },
    { kor: "거미줄이 있어 🕸️", eng: "There is a spider web" },
    { kor: "달팽이는 느려 🐌", eng: "A snail is slow" },
    { kor: "무당벌레는 빨개 🐞", eng: "A ladybug is red" },
    { kor: "모기가 물었어 🦟", eng: "A mosquito bit me" },
    { kor: "강아지가 짖어 🐕", eng: "A dog barks" },
    { kor: "고양이가 야옹해 🐈", eng: "A cat meows" },
    { kor: "말이 달려 🐎", eng: "A horse runs" },
    { kor: "양은 털이 많아 🐑", eng: "A sheep has much wool" },
    { kor: "나는 놀랐어 😲", eng: "I am surprised" },
    { kor: "그는 지루해 🥱", eng: "He is bored" },
    { kor: "우리는 바빠 🏃‍♂️", eng: "We are busy" },
    { kor: "나는 준비됐어 👍", eng: "I am ready" },
    { kor: "그녀는 강해 💪", eng: "She is strong" },
    { kor: "나는 약해 🥺", eng: "I am weak" },
    { kor: "이것은 무거워 🏋️", eng: "This is heavy" },
    { kor: "깃털은 가벼워 🪶", eng: "A feather is light" },
    { kor: "상자가 비어있어 📦", eng: "The box is empty" },
    { kor: "컵이 가득 찼어 🥛", eng: "The cup is full" },
    { kor: "비행기가 날아 ✈️", eng: "An airplane flies" },
    { kor: "기차가 칙칙폭폭 🚂", eng: "A train goes chug chug" },
    { kor: "배가 물 위에 있어 ⛵", eng: "A boat is on the water" },
    { kor: "소방차가 지나가 🚒", eng: "A fire engine passes" },
    { kor: "경찰차가 삐뽀삐뽀 🚓", eng: "A police car goes wee woo" },
    { kor: "구급차가 와 🚑", eng: "An ambulance is coming" },
    { kor: "자전거가 빠르다 🚴", eng: "The bike is fast" },
    { kor: "트럭이 커 🚚", eng: "A truck is big" },
    { kor: "헬리콥터가 올라가 🚁", eng: "A helicopter goes up" },
    { kor: "오토바이를 조심해 🏍️", eng: "Watch out for the motorcycle" },
    { kor: "여기는 병원이야 🏥", eng: "This is a hospital" },
    { kor: "공원에 가자 🏞️", eng: "Let's go to the park" },
    { kor: "마트에서 쇼핑해 🛒", eng: "Shop at the mart" },
    { kor: "경찰서가 있어 👮", eng: "There is a police station" },
    { kor: "도서관은 조용해 📚", eng: "The library is quiet" },
    { kor: "빵집에서 빵을 사 🥐", eng: "Buy bread at the bakery" },
    { kor: "놀이터에서 놀아 🛝", eng: "Play at the playground" },
    { kor: "동물원에 가고 싶어 🦓", eng: "I want to go to the zoo" },
    { kor: "수영장에서 수영해 🏊", eng: "Swim in the pool" },
    { kor: "식당에서 밥을 먹어 🍽️", eng: "Eat at the restaurant" },
    { kor: "오늘 무슨 요일이야 📅", eng: "What day is it today" },
    { kor: "오늘은 월요일이야 📅", eng: "Today is Monday" },
    { kor: "내일은 화요일이야 📅", eng: "Tomorrow is Tuesday" },
    { kor: "오늘은 내 생일이야 🎂", eng: "Today is my birthday" },
    { kor: "생일 축하해 🎉", eng: "Happy birthday" },
    { kor: "선물 고마워 🎁", eng: "Thank you for the gift" },
    { kor: "파티를 하자 🥳", eng: "Let's have a party" },
    { kor: "풍선을 불어 🎈", eng: "Blow up a balloon" },
    { kor: "사진을 찍자 📷", eng: "Let's take a picture" },
    { kor: "웃어봐 치즈 😁", eng: "Smile say cheese" },
    { kor: "피아노를 쳐 🎹", eng: "Play the piano" },
    { kor: "기타를 연주해 🎸", eng: "Play the guitar" },
    { kor: "북을 둥둥 쳐 🥁", eng: "Beat the drum" },
    { kor: "음악을 들어 🎧", eng: "Listen to music" },
    { kor: "노래 부르자 🎶", eng: "Let's sing a song" },
    { kor: "박자를 맞춰 👏", eng: "Keep the beat" },
    { kor: "소리가 너무 커 🔊", eng: "The sound is too loud" },
    { kor: "소리를 줄여 🔉", eng: "Turn the volume down" },
    { kor: "리코더를 불어 🎵", eng: "Play the recorder" },
    { kor: "종이 울려 🔔", eng: "The bell rings" },
    { kor: "이거 얼마예요 💰", eng: "How much is this" },
    { kor: "돈을 저금해 🐷", eng: "Save your money" },
    { kor: "동전이 있어 🪙", eng: "I have a coin" },
    { kor: "지갑을 잃어버렸어 👛", eng: "I lost my wallet" },
    { kor: "영수증 주세요 🧾", eng: "Receipt please" },
    { kor: "카드로 낼게요 💳", eng: "I will pay by card" },
    { kor: "비싸다 💸", eng: "It is expensive" },
    { kor: "싸다 🏷️", eng: "It is cheap" },
    { kor: "사탕을 샀어 🍭", eng: "I bought candy" },
    { kor: "잔돈 여기 있어요 💵", eng: "Here is your change" },
    { kor: "컴퓨터를 켜 💻", eng: "Turn on the computer" },
    { kor: "마우스를 클릭해 🖱️", eng: "Click the mouse" },
    { kor: "키보드를 쳐 ⌨️", eng: "Type on the keyboard" },
    { kor: "화면을 봐 🖥️", eng: "Look at the screen" },
    { kor: "스마트폰을 써 📱", eng: "Use a smartphone" },
    { kor: "전화 받아 📞", eng: "Answer the phone" },
    { kor: "메시지를 보내 ✉️", eng: "Send a message" },
    { kor: "게임 오버 👾", eng: "Game over" },
    { kor: "비밀번호를 입력해 🔐", eng: "Enter the password" },
    { kor: "배터리가 없어 🪫", eng: "No battery" },
    { kor: "나뭇잎이 초록색이야 🌿", eng: "The leaf is green" },
    { kor: "꽃에 물을 줘 🚿", eng: "Water the flower" },
    { kor: "씨앗을 심어 🌱", eng: "Plant a seed" },
    { kor: "나무가 자라 🌲", eng: "The tree grows" },
    { kor: "숲속에 새가 있어 🌳", eng: "There is a bird in the forest" },
    { kor: "잔디밭을 뛰어 🏃‍♂️", eng: "Run on the grass" },
    { kor: "돌멩이를 주워 🪨", eng: "Pick up a stone" },
    { kor: "흙을 파 ⛏️", eng: "Dig the dirt" },
    { kor: "벌레를 조심해 🐛", eng: "Watch out for the bug" },
    { kor: "자연을 사랑해 🌍", eng: "Love nature" },
    { kor: "아침 인사를 해 ☀️", eng: "Say good morning" },
    { kor: "오후 인사를 해 🌤️", eng: "Say good afternoon" },
    { kor: "저녁 인사를 해 🌆", eng: "Say good evening" },
    { kor: "미안해 🙏", eng: "I am sorry" },
    { kor: "천만에요 ☺️", eng: "You are welcome" },
    { kor: "도와주세요 🆘", eng: "Please help me" },
    { kor: "도와줄게 🤝", eng: "I will help you" },
    { kor: "이름이 뭐야 📛", eng: "What is your name" },
    { kor: "내 이름은 지훈이야 👦", eng: "My name is Jihoon" },
    { kor: "나이는 몇 살이야 🎂", eng: "How old are you" },
    { kor: "나는 일곱 살이야 7️⃣", eng: "I am seven years old" },
    { kor: "나는 여덟 살이야 8️⃣", eng: "I am eight years old" },
    { kor: "어디 살아 🏠", eng: "Where do you live" },
    { kor: "어디 가 🚶‍♂️", eng: "Where are you going" },
    { kor: "뭐 해 🤔", eng: "What are you doing" },
    { kor: "이게 뭐야 ❓", eng: "What is this" },
    { kor: "저게 뭐야 🔭", eng: "What is that" },
    { kor: "잘했어 👍", eng: "Good job" },
    { kor: "포기하지 마 💪", eng: "Do not give up" },
    { kor: "다음에 또 봐 👋", eng: "See you next time" },
    { kor: "그는 의사야 👨‍⚕️", eng: "He is a doctor" },
    { kor: "그녀는 간호사야 👩‍⚕️", eng: "She is a nurse" },
    { kor: "소방관은 용감해 🧑‍🚒", eng: "A firefighter is brave" },
    { kor: "경찰관이 도와줘 👮‍♂️", eng: "A police officer helps" },
    { kor: "요리사가 요리를 해 🧑‍🍳", eng: "A chef cooks" },
    { kor: "농부는 씨앗을 심어 🧑‍🌾", eng: "A farmer plants seeds" },
    { kor: "조종사가 비행기를 조종해 🧑‍✈️", eng: "A pilot flies an airplane" },
    { kor: "우주비행사는 우주에 가 🧑‍🚀", eng: "An astronaut goes to space" },
    { kor: "과학자는 똑똑해 🧑‍🔬", eng: "A scientist is smart" },
    { kor: "가수는 노래를 잘해 🧑‍🎤", eng: "A singer sings well" },
    { kor: "여기는 거실이야 🛋️", eng: "This is the living room" },
    { kor: "소파가 푹신해 🛋️", eng: "The sofa is soft" },
    { kor: "텔레비전이 켜져 있어 📺", eng: "The television is on" },
    { kor: "여기는 부엌이야 🍳", eng: "This is the kitchen" },
    { kor: "냉장고는 차가워 🧊", eng: "The refrigerator is cold" },
    { kor: "식탁에 앉아 🪑", eng: "Sit at the table" },
    { kor: "접시가 깨끗해 🍽️", eng: "The plate is clean" },
    { kor: "포크를 사용해 🍴", eng: "Use a fork" },
    { kor: "숟가락으로 먹어 🥄", eng: "Eat with a spoon" },
    { kor: "칼을 조심해 🔪", eng: "Be careful with the knife" },
    { kor: "침실에서 자 🛏️", eng: "Sleep in the bedroom" },
    { kor: "침대가 편안해 🛌", eng: "The bed is comfortable" },
    { kor: "베개를 베고 누워 🛏️", eng: "Lie on the pillow" },
    { kor: "이불을 덮어 🛌", eng: "Cover with a blanket" },
    { kor: "알람 시계가 울려 ⏰", eng: "The alarm clock rings" },
    { kor: "거울을 봐 🪞", eng: "Look in the mirror" },
    { kor: "수건으로 닦아 🧖", eng: "Dry with a towel" },
    { kor: "비누로 씻어 🧼", eng: "Wash with soap" },
    { kor: "샴푸로 머리를 감아 🧴", eng: "Wash hair with shampoo" },
    { kor: "목욕을 하자 🛁", eng: "Let's take a bath" },
    { kor: "상어는 무서워 🦈", eng: "A shark is scary" },
    { kor: "고래는 아주 커 🐋", eng: "A whale is very big" },
    { kor: "돌고래는 똑똑해 🐬", eng: "A dolphin is smart" },
    { kor: "문어는 다리가 많아 🐙", eng: "An octopus has many legs" },
    { kor: "게가 옆으로 걸어 🦀", eng: "A crab walks sideways" },
    { kor: "해파리가 떠다녀 🪼", eng: "A jellyfish floats" },
    { kor: "바다거북이 수영해 🐢", eng: "A sea turtle swims" },
    { kor: "불가사리가 예뻐 ⭐", eng: "A starfish is pretty" },
    { kor: "악어는 입이 커 🐊", eng: "An alligator has a big mouth" },
    { kor: "하마는 물을 좋아해 🦛", eng: "A hippo likes water" },
    { kor: "코뿔소는 뿔이 있어 🦏", eng: "A rhino has a horn" },
    { kor: "얼룩말은 줄무늬가 있어 🦓", eng: "A zebra has stripes" },
    { kor: "캥거루가 펄쩍 뛰어 🦘", eng: "A kangaroo jumps" },
    { kor: "코알라가 나무에 매달려 🐨", eng: "A koala hangs on a tree" },
    { kor: "판다 곰이 대나무를 먹어 🐼", eng: "A panda eats bamboo" },
    { kor: "부엉이가 밤에 깨어 있어 🦉", eng: "An owl is awake at night" },
    { kor: "박쥐가 거꾸로 매달려 🦇", eng: "A bat hangs upside down" },
    { kor: "다람쥐가 도토리를 모아 🐿️", eng: "A squirrel gathers acorns" },
    { kor: "여우가 숨어 🦊", eng: "A fox hides" },
    { kor: "늑대가 하울링해 🐺", eng: "A wolf howls" },
    { kor: "닭이 알을 낳아 🐔", eng: "A chicken lays eggs" },
    { kor: "병아리가 삐약거려 🐥", eng: "A chick peeps" },
    { kor: "오리가 연못에 있어 🦆", eng: "A duck is in the pond" },
    { kor: "칠면조가 있어 🦃", eng: "There is a turkey" },
    { kor: "말을 타자 🐎", eng: "Let's ride a horse" },
    { kor: "새끼 양이 귀여워 🐑", eng: "A lamb is cute" },
    { kor: "염소가 풀을 먹어 🐐", eng: "A goat eats grass" },
    { kor: "돼지가 진흙에서 굴러 🐖", eng: "A pig rolls in mud" },
    { kor: "소에서 우유를 짜 🐄", eng: "Milk the cow" },
    { kor: "황소가 뿔로 밀어 🐂", eng: "An ox pushes with horns" },
    { kor: "퍼즐을 맞춰 🧩", eng: "Do a puzzle" },
    { kor: "연을 날려 🪁", eng: "Fly a kite" },
    { kor: "요요를 굴려 🪀", eng: "Play with a yoyo" },
    { kor: "팽이를 돌려 🌀", eng: "Spin a top" },
    { kor: "비눗방울을 불어 🫧", eng: "Blow bubbles" },
    { kor: "찰흙을 빚어 🟤", eng: "Play with clay" },
    { kor: "물총을 쏴 🔫", eng: "Shoot a water gun" },
    { kor: "장난감 기차가 달려 🚂", eng: "The toy train runs" },
    { kor: "보드게임을 해 🎲", eng: "Play a board game" },
    { kor: "카드 게임을 해 🃏", eng: "Play a card game" },
    { kor: "문을 닫아줄래 🚪", eng: "Can you close the door" },
    { kor: "불을 켜줘 💡", eng: "Turn on the light" },
    { kor: "불을 꺼줘 💡", eng: "Turn off the light" },
    { kor: "휴지통에 버려 🗑️", eng: "Throw it in the trash" },
    { kor: "방을 청소해 🧹", eng: "Clean your room" },
    { kor: "옷을 입어 👚", eng: "Put on your clothes" },
    { kor: "옷을 벗어 👕", eng: "Take off your clothes" },
    { kor: "단추를 채워 🔘", eng: "Button up" },
    { kor: "지퍼를 올려 🩳", eng: "Zip up" },
    { kor: "신발 끈을 묶어 👟", eng: "Tie your shoes" },
    { kor: "이거 매워 🌶️", eng: "This is spicy" },
    { kor: "이거 시큼해 🍋", eng: "This is sour" },
    { kor: "이거 짜다 🧂", eng: "This is salty" },
    { kor: "이거 쓰다 ☕", eng: "This is bitter" },
    { kor: "배불러 🤰", eng: "I am full" },
    { kor: "더 주세요 🤲", eng: "More please" },
    { kor: "다 먹었어 🍽️", eng: "I am done" },
    { kor: "치킨을 먹자 🍗", eng: "Let's eat chicken" },
    { kor: "소시지가 맛있어 🌭", eng: "The sausage is delicious" },
    { kor: "만두를 좋아해 🥟", eng: "I like dumplings" },
    { kor: "라면을 끓여 🍜", eng: "Cook noodles" },
    { kor: "김밥을 소풍에 가져가 🍙", eng: "Take gimbap on a picnic" },
    { kor: "딸기잼을 발라 🍯", eng: "Spread strawberry jam" },
    { kor: "버터를 발라 🧈", eng: "Spread butter" },
    { kor: "꿀은 달아 🍯", eng: "Honey is sweet" },
    { kor: "초콜릿 칩 쿠키야 🍪", eng: "It is a chocolate chip cookie" },
    { kor: "도넛에 구멍이 있어 🍩", eng: "A donut has a hole" },
    { kor: "팬케이크를 뒤집어 🥞", eng: "Flip the pancake" },
    { kor: "와플을 먹어 🧇", eng: "Eat a waffle" },
    { kor: "차를 마셔 🍵", eng: "Drink tea" },
    { kor: "위로 올라가 ⬆️", eng: "Go up" },
    { kor: "아래로 내려가 ⬇️", eng: "Go down" },
    { kor: "오른쪽으로 돌아 ➡️", eng: "Turn right" },
    { kor: "왼쪽으로 돌아 ⬅️", eng: "Turn left" },
    { kor: "앞으로 가 🚶", eng: "Go forward" },
    { kor: "뒤로 가 🚶", eng: "Go backward" },
    { kor: "상자 안에 있어 📦", eng: "It is in the box" },
    { kor: "상자 위에 있어 📦", eng: "It is on the box" },
    { kor: "상자 아래에 있어 📦", eng: "It is under the box" },
    { kor: "상자 옆에 있어 📦", eng: "It is next to the box" },
    { kor: "선이 길다 📏", eng: "The line is long" },
    { kor: "선이 짧다 📏", eng: "The line is short" },
    { kor: "책이 두꺼워 📚", eng: "The book is thick" },
    { kor: "종이가 얇아 📄", eng: "The paper is thin" },
    { kor: "돌이 단단해 🪨", eng: "The stone is hard" },
    { kor: "베개가 푹신해 ☁️", eng: "The pillow is soft" },
    { kor: "방이 밝아 ☀️", eng: "The room is bright" },
    { kor: "방이 어두워 🌙", eng: "The room is dark" },
    { kor: "가방이 무거워 🎒", eng: "The bag is heavy" },
    { kor: "풍선이 가벼워 🎈", eng: "The balloon is light" },
    { kor: "옷이 깨끗해 ✨", eng: "The clothes are clean" },
    { kor: "손이 더러워 흙 흙", eng: "The hands are dirty" },
    { kor: "길이 넓어 🛣️", eng: "The road is wide" },
    { kor: "골목이 좁아 🛤️", eng: "The alley is narrow" },
    { kor: "물이 깊어 🌊", eng: "The water is deep" },
    { kor: "웅덩이가 얕아 💧", eng: "The puddle is shallow" },
    { kor: "차가 빨라 🏎️", eng: "The car is fast" },
    { kor: "자전거가 느려 🚲", eng: "The bicycle is slow" },
    { kor: "할아버지는 늙으셨어 👴", eng: "Grandfather is old" },
    { kor: "아기는 젊어 👶", eng: "The baby is young" },
    { kor: "새 옷이야 👕", eng: "It is a new shirt" },
    { kor: "헌 신발이야 👞", eng: "They are old shoes" },
    { kor: "가격이 비싸 💰", eng: "The price is high" },
    { kor: "가격이 싸다 🪙", eng: "The price is low" },
    { kor: "날씨가 좋아 ☀️", eng: "The weather is good" },
    { kor: "날씨가 나빠 ⛈️", eng: "The weather is bad" },
    { kor: "바람이 시원해 🌬️", eng: "The wind is cool" },
    { kor: "얼음이 차가워 🧊", eng: "The ice is cold" },
    { kor: "불이 뜨거워 🔥", eng: "The fire is hot" },
    { kor: "물이 따뜻해 ♨️", eng: "The water is warm" },
    { kor: "봄에는 꽃이 펴 🌸", eng: "Flowers bloom in spring" },
    { kor: "여름에는 수영해 🏊", eng: "Swim in summer" },
    { kor: "가을에는 단풍이 들어 🍁", eng: "Leaves change color in autumn" },
    { kor: "겨울에는 눈이 와 ❄️", eng: "It snows in winter" },
    { kor: "월요일이 시작이야 📅", eng: "Monday is the start" },
    { kor: "금요일이 좋아 📅", eng: "I like Friday" },
    { kor: "토요일에 놀아 📅", eng: "Play on Saturday" },
    { kor: "일요일에 쉬어 📅", eng: "Rest on Sunday" },
    { kor: "일월은 추워 🗓️", eng: "January is cold" },
    { kor: "오월은 따뜻해 🗓️", eng: "May is warm" },
    { kor: "팔월은 더워 🗓️", eng: "August is hot" },
    { kor: "십이월은 크리스마스야 🎄", eng: "December is Christmas" },
    { kor: "지금 몇 시야 ⌚", eng: "What time is it now" },
    { kor: "아침 일곱 시야 🕖", eng: "It is seven in the morning" },
    { kor: "점심 열두 시야 🕛", eng: "It is twelve at noon" },
    { kor: "저녁 여섯 시야 🕕", eng: "It is six in the evening" },
    { kor: "밤 아홉 시야 🕘", eng: "It is nine at night" },
    { kor: "시간이 빨라 ⏳", eng: "Time is fast" },
    { kor: "기다려 주세요 ✋", eng: "Please wait" },
    { kor: "빨리 와 🏃", eng: "Come quickly" },
    { kor: "천천히 해 🐢", eng: "Take your time" },
    { kor: "늦었어 ⏰", eng: "I am late" },
    { kor: "일찍 왔어 ⏲️", eng: "I am early" },
    { kor: "수영복을 입어 🩱", eng: "Put on a swimsuit" },
    { kor: "수경을 써 🥽", eng: "Wear swimming goggles" },
    { kor: "튜브를 타 🛟", eng: "Ride a tube" },
    { kor: "수건으로 닦아 🧖", eng: "Dry off with a towel" },
    { kor: "텐트를 쳐 ⛺", eng: "Set up a tent" },
    { kor: "모닥불을 피워 🏕️", eng: "Make a campfire" },
    { kor: "침낭에서 자 🐛", eng: "Sleep in a sleeping bag" },
    { kor: "손전등을 켜 🔦", eng: "Turn on the flashlight" },
    { kor: "배낭을 메 🎒", eng: "Carry a backpack" },
    { kor: "지도를 봐 🗺️", eng: "Look at the map" },
    { kor: "나침반을 사용해 🧭", eng: "Use a compass" },
    { kor: "물병을 챙겨 🚰", eng: "Bring a water bottle" },
    { kor: "간식을 먹자 🥨", eng: "Let's eat snacks" },
    { kor: "소풍 가자 🧺", eng: "Let's go on a picnic" },
    { kor: "돗자리를 깔아 🔲", eng: "Spread the mat" },
    { kor: "도시락을 열어 🍱", eng: "Open the lunch box" },
    { kor: "바구니에 담아 🧺", eng: "Put it in the basket" },
    { kor: "꽃을 꺾지 마 🚫", eng: "Do not pick flowers" },
    { kor: "쓰레기를 줍자 ♻️", eng: "Let's pick up trash" },
    { kor: "길을 건너 🚶", eng: "Cross the street" },
    { kor: "신호등을 봐 🚦", eng: "Look at the traffic light" },
    { kor: "초록 불에 건너 🟢", eng: "Cross on the green light" },
    { kor: "빨간 불에 멈춰 🔴", eng: "Stop on the red light" },
    { kor: "횡단보도로 가 🦓", eng: "Go to the crosswalk" },
    { kor: "안전벨트를 매 💺", eng: "Fasten your seatbelt" },
    { kor: "헬멧을 써 🪖", eng: "Wear a helmet" },
    { kor: "조심해 ⚠️", eng: "Be careful" },
    { kor: "위험해 ☢️", eng: "It is dangerous" },
    { kor: "도와줘서 고마워 🥰", eng: "Thank you for helping" },
    { kor: "친구랑 싸우지 마 🙅", eng: "Do not fight with friends" },
    { kor: "화해하자 🤝", eng: "Let's make up" },
    { kor: "양보해 줘서 고마워 🙏", eng: "Thank you for yielding" },
    { kor: "차례를 기다려 🧍", eng: "Wait for your turn" },
    { kor: "줄을 서세요 🧍‍♂️🧍‍♀️", eng: "Please stand in line" },
    { kor: "규칙을 지켜 📜", eng: "Follow the rules" },
    { kor: "거짓말 하지 마 🤥", eng: "Do not tell lies" },
    { kor: "약속할게 🤞", eng: "I promise" },
    { kor: "로봇을 조립해 🤖", eng: "Build a robot" },
    { kor: "인형에게 옷을 입혀 👗", eng: "Dress the doll" },
    { kor: "스티커를 붙여 🌟", eng: "Put on a sticker" },
    { kor: "색종이를 접어 📄", eng: "Fold the colored paper" },
    { kor: "비행기를 날려보자 ✈️", eng: "Let's fly an airplane" },
    { kor: "공룡 장난감이야 🦖", eng: "It is a dinosaur toy" },
    { kor: "기차놀이를 하자 🚂", eng: "Let's play train" },
    { kor: "마술을 보여줄게 🎩", eng: "I will show you magic" },
    { kor: "왕관을 써 👑", eng: "Wear a crown" },
    { kor: "요술봉을 흔들어 🪄", eng: "Wave the magic wand" },
    { kor: "동화책을 읽어줘 📖", eng: "Read a storybook" },
    { kor: "영화를 보자 🎬", eng: "Let's watch a movie" },
    { kor: "팝콘을 먹어 🍿", eng: "Eat popcorn" },
    { kor: "노래방에 가자 🎤", eng: "Let's go to karaoke" },
    { kor: "숨을 크게 쉬어 😮‍💨", eng: "Take a deep breath" },
    { kor: "기지개를 켜 🙆‍♂️", eng: "Stretch your body" },
    { kor: "하품이 나와 🥱", eng: "I am yawning" },
    { kor: "코를 골아 💤", eng: "Snore in sleep" },
    { kor: "꿈을 꿔 💭", eng: "Have a dream" },
    { kor: "좋은 아침이야 ☀️", eng: "Good morning to you" },
    { kor: "유리창을 닦아 🪟", eng: "Wipe the glass window" },
    { kor: "바닥을 쓸어 🧹", eng: "Sweep the floor" },
    { kor: "걸레질을 해 🧽", eng: "Mop the floor" },
    { kor: "설거지를 도와줘 🍽️", eng: "Help with the dishes" },
    { kor: "빨래를 널어 👕", eng: "Hang the laundry" },
    { kor: "옷을 개켜 👖", eng: "Fold the clothes" },
    { kor: "식물을 가꿔 🪴", eng: "Take care of plants" },
    { kor: "화분에 물을 줘 🚰", eng: "Water the pot" },
    { kor: "우편물을 확인해 📬", eng: "Check the mail" },
    { kor: "편지를 써 💌", eng: "Write a letter" },
    { kor: "우표를 붙여 📮", eng: "Put on a stamp" },
    { kor: "소포가 왔어 📦", eng: "A parcel has arrived" },
    { kor: "문을 똑똑 두드려 🚪", eng: "Knock on the door" },
    { kor: "초인종을 눌러 🔔", eng: "Ring the doorbell" },
    { kor: "누구세요 👤", eng: "Who is it" },
    { kor: "신발을 벗어 👞", eng: "Take off your shoes" },
    { kor: "슬리퍼를 신어 🩴", eng: "Wear slippers" },
    { kor: "우산을 접어 ☂️", eng: "Fold the umbrella" },
    { kor: "우산꽂이에 넣어 🌂", eng: "Put it in the umbrella stand" },
    { kor: "열쇠로 문을 열어 🗝️", eng: "Open the door with a key" },
    { kor: "변기 물을 내려 🚽", eng: "Flush the toilet" },
    { kor: "휴지를 써 🧻", eng: "Use toilet paper" },
    { kor: "손톱을 깎아 💅", eng: "Cut your nails" },
    { kor: "머리를 빗어 梳", eng: "Comb your hair" },
    { kor: "드라이기로 말려 💨", eng: "Dry with a hairdryer" },
    { kor: "로션을 발라 🧴", eng: "Put on lotion" },
    { kor: "입술에 립밤을 발라 👄", eng: "Put lip balm on lips" },
    { kor: "향기가 좋아 🌺", eng: "It smells good" },
    { kor: "냄새가 나 🦨", eng: "It smells bad" },
    { kor: "코를 풀어 🤧", eng: "Blow your nose" },
    { kor: "재채기가 나와 🤧", eng: "I am sneezing" },
    { kor: "기침을 해 😷", eng: "I am coughing" },
    { kor: "마스크를 써 😷", eng: "Wear a mask" },
    { kor: "체온을 재봐 🌡️", eng: "Check your temperature" },
    { kor: "약을 먹어 💊", eng: "Take medicine" },
    { kor: "반창고를 붙여 🩹", eng: "Put on a band-aid" },
    { kor: "주사는 안 아파 💉", eng: "The injection does not hurt" },
    { kor: "건강이 최고야 💪", eng: "Health is the best" },
    { kor: "다치지 않게 조심해 🛑", eng: "Be careful not to get hurt" },
    { kor: "운동을 하자 🏃‍♀️", eng: "Let's exercise" },
    { kor: "태권도를 배워 🥋", eng: "Learn Taekwondo" },
    { kor: "발차기를 해 🦵", eng: "Do a kick" },
    { kor: "요가를 해 🧘", eng: "Do yoga" },
    { kor: "스케이트보드를 타 🛹", eng: "Ride a skateboard" },
    { kor: "롤러스케이트를 타 🛼", eng: "Ride roller skates" },
    { kor: "농구공을 던져 🏀", eng: "Throw the basketball" },
    { kor: "야구 방망이를 휘둘러 ⚾", eng: "Swing the baseball bat" },
    { kor: "탁구를 쳐 🏓", eng: "Play table tennis" },
    { kor: "배드민턴을 쳐 🏸", eng: "Play badminton" },
    { kor: "테니스를 쳐 🎾", eng: "Play tennis" },
    { kor: "골프공을 쳐 ⛳", eng: "Hit the golf ball" },
    { kor: "볼링을 쳐 🎳", eng: "Play bowling" },
    { kor: "스케이트를 타 ⛸️", eng: "Ride ice skates" },
    { kor: "스키를 타 ⛷️", eng: "Ride skis" },
    { kor: "썰매를 타 🛷", eng: "Ride a sled" },
    { kor: "줄넘기를 해 ➰", eng: "Jump rope" },
    { kor: "훌라후프를 돌려 ⭕", eng: "Spin the hula hoop" },
    { kor: "술래잡기를 해 🏃", eng: "Play tag" },
    { kor: "무궁화 꽃이 피었습니다 🌺", eng: "Red light green light" },
    { kor: "수건돌리기를 해 🧣", eng: "Play drop the handkerchief" },
    { kor: "달팽이는 집이 있어 🐌", eng: "A snail has a house" },
    { kor: "지렁이가 꿈틀거려 🪱", eng: "A earthworm wiggles" },
    { kor: "매미가 맴맴 우네 🌳", eng: "A cicada sings" },
    { kor: "잠자리가 날아다녀 🚁", eng: "A dragonfly flies around" },
    { kor: "메뚜기가 뛰어 🦗", eng: "A grasshopper jumps" },
    { kor: "나비가 꽃에 앉아 🦋", eng: "A butterfly sits on a flower" },
    { kor: "벌이 꿀을 모아 🐝", eng: "A bee collects honey" },
    { kor: "사마귀는 무서워 🌿", eng: "A mantis is scary" },
    { kor: "거미가 줄을 쳐 🕷️", eng: "A spider makes a web" },
    { kor: "반딧불이가 반짝여 ✨", eng: "A firefly shines" },
    { kor: "다람쥐는 도토리를 좋아해 🐿️", eng: "A squirrel likes acorns" },
    { kor: "토끼는 당근을 좋아해 🐰", eng: "A rabbit likes carrots" },
    { kor: "원숭이는 바나나를 좋아해 🐒", eng: "A monkey likes bananas" },
    { kor: "곰은 꿀을 좋아해 🐻", eng: "A bear likes honey" },
    { kor: "고양이는 생선을 좋아해 🐈", eng: "A cat likes fish" },
    { kor: "강아지는 뼈다귀를 좋아해 🐶", eng: "A dog likes bones" },
    { kor: "판다는 대나무를 좋아해 🐼", eng: "A panda likes bamboo" },
    { kor: "코알라는 유칼립투스를 좋아해 🐨", eng: "A koala likes eucalyptus" },
    { kor: "펭귄은 얼음을 좋아해 🐧", eng: "A penguin likes ice" },
    { kor: "낙타는 사막에 살아 🐪", eng: "A camel lives in the desert" },
    { kor: "밥솥에 밥을 해 🍚", eng: "Cook rice in the rice cooker" },
    { kor: "프라이팬에 고기를 구워 🍳", eng: "Grill meat in the frying pan" },
    { kor: "냄비에 국을 끓여 🍲", eng: "Boil soup in the pot" },
    { kor: "도마 위에서 썰어 🪓", eng: "Chop on the cutting board" },
    { kor: "오븐에서 빵을 구워 🍞", eng: "Bake bread in the oven" },
    { kor: "전자레인지를 돌려 ⏲️", eng: "Use the microwave" },
    { kor: "믹서기로 주스를 만들어 🍹", eng: "Make juice with a blender" },
    { kor: "주전자에 물을 끓여 🫖", eng: "Boil water in the kettle" },
    { kor: "머그잔에 우유를 부어 🥛", eng: "Pour milk into a mug" },
    { kor: "빨대로 마셔 🥤", eng: "Drink with a straw" },
    { kor: "소금을 조금 넣어 🧂", eng: "Add a little salt" },
    { kor: "설탕은 달콤해 🍬", eng: "Sugar is sweet" },
    { kor: "후추를 뿌려 🧂", eng: "Sprinkle black pepper" },
    { kor: "간장을 찍어 먹어 🍣", eng: "Dip in soy sauce" },
    { kor: "케첩을 발라 🍟", eng: "Put on ketchup" },
    { kor: "마요네즈를 섞어 🥗", eng: "Mix with mayonnaise" },
    { kor: "머스터드를 뿌려 🌭", eng: "Put on mustard" },
    { kor: "올리브 오일을 둘러 🫒", eng: "Pour olive oil" },
    { kor: "식초는 시큼해 🍋", eng: "Vinegar is sour" },
    { kor: "잼을 발라 먹어 🍞", eng: "Eat with jam" },
    { kor: "피망은 초록색이야 🫑", eng: "Bell peppers are green" },
    { kor: "가지가 보라색이야 🍆", eng: "Eggplants are purple" },
    { kor: "브로콜리는 나무 같아 🥦", eng: "Broccoli looks like a tree" },
    { kor: "마늘을 까 🧄", eng: "Peel the garlic" },
    { kor: "버섯을 썰어 🍄", eng: "Slice the mushrooms" },
    { kor: "파를 송송 썰어 🧅", eng: "Chop the green onions" },
    { kor: "상추에 쌈을 싸 🥬", eng: "Wrap in lettuce" },
    { kor: "양배추를 씻어 🥬", eng: "Wash the cabbage" },
    { kor: "호박이 둥글어 🎃", eng: "A pumpkin is round" },
    { kor: "고구마가 달콤해 🍠", eng: "Sweet potatoes are sweet" },
    { kor: "귤을 까먹어 🍊", eng: "Peel and eat a tangerine" },
    { kor: "사과를 깎아 🍎", eng: "Peel an apple" },
    { kor: "배는 시원해 🍐", eng: "A pear is refreshing" },
    { kor: "키위는 새콤해 🥝", eng: "A kiwi is sour" },
    { kor: "멜론은 달콤해 🍈", eng: "A melon is sweet" },
    { kor: "망고는 노란색이야 🥭", eng: "A mango is yellow" },
    { kor: "코코넛 즙을 마셔 🥥", eng: "Drink coconut water" },
    { kor: "블루베리를 먹어 🫐", eng: "Eat blueberries" },
    { kor: "아보카도를 잘라 🥑", eng: "Cut the avocado" },
    { kor: "석류 알갱이가 예뻐 🍎", eng: "Pomegranate seeds are pretty" },
    { kor: "교실에 들어가 🚪", eng: "Enter the classroom" },
    { kor: "자리에 앉아 🪑", eng: "Sit in your seat" },
    { kor: "책을 펴 📖", eng: "Open the book" },
    { kor: "공책에 필기해 📓", eng: "Take notes in the notebook" },
    { kor: "지우개로 지워 🧽", eng: "Erase with an eraser" },
    { kor: "필통을 열어 ✏️", eng: "Open the pencil case" },
    { kor: "자를 대고 선을 그어 📏", eng: "Draw a line with a ruler" },
    { kor: "칠판을 봐 ⬛", eng: "Look at the blackboard" },
    { kor: "분필로 글씨를 써 🖍️", eng: "Write with chalk" },
    { kor: "숙제를 다 했어 💯", eng: "I finished my homework" },
    { kor: "시험을 봐 📝", eng: "Take a test" },
    { kor: "백점을 맞았어 💯", eng: "I got a perfect score" },
    { kor: "손을 들고 발표해 🙋‍♀️", eng: "Raise hand and present" },
    { kor: "친구를 도와줘 🤝", eng: "Help a friend" },
    { kor: "싸우지 마 🙅‍♂️", eng: "Do not fight" },
    { kor: "사이좋게 지내 👫", eng: "Get along well" },
    { kor: "쉬는 시간 종이 쳤어 🔔", eng: "The break time bell rang" },
    { kor: "급식을 먹어 🍱", eng: "Eat school lunch" },
    { kor: "우유를 마셔 🥛", eng: "Drink milk" },
    { kor: "양치질을 해 🪥", eng: "Brush your teeth" },
    { kor: "티셔츠를 입어 👕", eng: "Put on a T-shirt" },
    { kor: "청바지를 입어 👖", eng: "Put on blue jeans" },
    { kor: "반바지를 입어 🩳", eng: "Put on shorts" },
    { kor: "원피스를 입어 👗", eng: "Put on a dress" },
    { kor: "스웨터를 입어 🧶", eng: "Put on a sweater" },
    { kor: "패딩을 입어 🧥", eng: "Put on a padded jacket" },
    { kor: "모자를 써 🧢", eng: "Put on a cap" },
    { kor: "목도리를 둘러 🧣", eng: "Put on a scarf" },
    { kor: "귀마개를 해 🎧", eng: "Wear earmuffs" },
    { kor: "선글라스를 껴 🕶️", eng: "Wear sunglasses" },
    { kor: "장화를 신어 👢", eng: "Wear rain boots" },
    { kor: "우비를 입어 🧥", eng: "Wear a raincoat" },
    { kor: "넥타이를 매 👔", eng: "Tie a necktie" },
    { kor: "벨트를 차 🥋", eng: "Wear a belt" },
    { kor: "머리띠를 해 🎀", eng: "Wear a headband" },
    { kor: "시계를 차 ⌚", eng: "Wear a watch" },
    { kor: "반지를 껴 💍", eng: "Wear a ring" },
    { kor: "목걸이를 걸어 📿", eng: "Wear a necklace" },
    { kor: "귀걸이를 해 💎", eng: "Wear earrings" },
    { kor: "가방을 메 🎒", eng: "Carry a bag" },
    { kor: "아침에는 해가 떠 🌅", eng: "The sun rises in the morning" },
    { kor: "저녁에는 해가 져 🌇", eng: "The sun sets in the evening" },
    { kor: "밤에는 달이 떠 🌃", eng: "The moon rises at night" },
    { kor: "구름이 뭉게뭉게 피어 ☁️", eng: "Clouds are fluffy" },
    { kor: "안개가 끼었어 🌫️", eng: "It is foggy" },
    { kor: "천둥이 쳐 🌩️", eng: "Thunder crashes" },
    { kor: "번개가 번쩍 ⚡", eng: "Lightning flashes" },
    { kor: "소나기가 내려 🌧️", eng: "A shower falls" },
    { kor: "우박이 떨어져 🧊", eng: "Hail falls" },
    { kor: "태풍이 와 🌪️", eng: "A typhoon is coming" }
];

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

// 모바일 음성 음원 사전 로드
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

// 모바일 호환 TTS 실행 함수
function speakText(text) {
    if (!synth) return;
    
    // 모바일 브라우저 버그 방지를 위한 초기화
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.1;

    // 미국식 영어 목소리 우선 지정
    if (voices.length > 0) {
        const usVoice = voices.find(v => v.lang === 'en-US' || v.lang.includes('en'));
        if (usVoice) utterance.voice = usVoice;
    }

    synth.speak(utterance);
}

function setLevel(level) {
    currentLevel = level;
    document.getElementById('btnEasy').classList.toggle('active', level === 'easy');
    document.getElementById('btnHard').classList.toggle('active', level === 'hard');
    nextQuestion();
}

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

    if (currentLevel === 'easy' && words.length >= 2) {
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
        const fakeWords = ["cat", "red", "big", "run", "happy", "sun", "go"];
        let randomFake = fakeWords[Math.floor(Math.random() * fakeWords.length)];
        if (!poolWords.includes(randomFake)) poolWords.push(randomFake);
        
        poolWords.sort(() => Math.random() - 0.5);

        poolWords.forEach(word => createWordButton(word));

    } else {
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

function moveWord(btn) {
    speakText(btn.innerText);

    if (btn.parentElement === wordPool) {
        btn.className = 'answer-btn';
        answerArea.appendChild(btn);
    } else {
        btn.className = 'word-btn';
        wordPool.appendChild(btn);
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