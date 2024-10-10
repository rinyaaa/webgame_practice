const quiz = [
    {
        question: 'ゲーム市場、もっとも売れたゲームきたどれ？',
        answers: [
            'スーパファミコン',
            'プレイステーション２',
            'ニンテンドウースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    }, {
        question: '糸井重勝何企画に関わった、任天堂のゲームといえば？',
        answers: [
            'MOTHER2',
            'スパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービー'
        ],
        correct: 'MOTHER2'
    }, {
        question: 'ハイキューの主人公の名前は',
        answers: [
            'ひなた',
            'かげやま',
            'おおいかわ',
            'うしわか'
        ],
        correct: 'ひなた'
    },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question; // 修正
    let buttonIndex = 0;

    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        score++;
    } else {
        window.alert('間違い');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        // 問題がまだある場合
        setupQuiz();
    } else {
        window.alert("あなたのスコアは"+ score +'です'); // 修正
    }
};

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => clickHandler(e));
    handlerIndex++;
}
