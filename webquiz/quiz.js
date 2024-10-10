const question = 'ゲーム市場、もっとも売れたゲームきたどれ？';

const answers = ['スーパファミコン',
'プレイステーション２',
'ニンテンドウースイッチ',
'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';


const $button = document.getElementsByTagName('button');

const setupQuiz = () =>{
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    let buttonLength = $button.length
    
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    };
};
setupQuiz();

const clickHandler = (e) =>{
    if(correct === e.target.textContent ){
        window.alert('正解');
    }else {
        window.alert('間違い');
    }
};

let handlerIndex = 0;

while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => clickHandler(e));
    handlerIndex++;
};









