const question = 'ゲーム市場、もっとも売れたゲームきたどれ？';

const answers = ['スーパファミコン',
'プレイステーション２',
'ニンテンドウースイッチ',
'ニンテンドウーDS'
];
const correct = 'ニンテンドーDS';

document.getElementById('js-question').textContent = question;


const $button = document.getElementsByTagName('button');

button[0].textContent = answers[0];
button[1].textContent = answers[1];
button[2].textContent = answers[2];
button[3].textContent = answers[3];

$button[0].addEventListener('click', () => {
    //クリックされたら
    if(correct === answers[0] ){
        window.alert('正解');
    }else {
        window.alert('間違い');
    }
});